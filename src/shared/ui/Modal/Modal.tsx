import { classNames } from 'shared/lib/classNames/classNames';
import React, {
    ReactNode, useCallback, useEffect, useRef, useState
} from 'react';
import { Portal } from 'shared/ui/Portal/Portal';
import { useTheme } from 'app/providers/ThemeProvider';
import cls from './Modal.module.scss';

interface ModalProps {
    className? : string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean;
}

const ANIMATION_DELAY = 300;

export const Modal = (props: ModalProps) => {
    const {
        className,
        children,
        isOpen,
        onClose,
        lazy,
    } = props;
    // состояние закрытия окна
    const [isClosing, setIsClosing] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    // инициализация реф
    const timerRef = useRef<ReturnType<typeof setTimeout>>();
    // добавление в модс нужных стилей если тру
    const mods: Record<string, boolean> = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    };
    const { theme } = useTheme();
    useEffect(() => {
        if (isOpen) {
            setIsMounted(true);
        }
    }, [isOpen]);
    // при нажатии на заблюренное закрытие
    const CloseHandler = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timerRef.current = setTimeout(() => { // изменения без перерисовки
                onClose();
                setIsClosing(false);
            }, ANIMATION_DELAY); // через это время выполнит код выше, т.е задержка для плавного закрытия окна
        }
    }, [onClose]);

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            CloseHandler();
        }
    }, [CloseHandler]);
    // позволяет игнорировать закрытие окна при нажатии на саму модалку
    const onContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }
        return () => {
            clearTimeout(timerRef.current); // если есть таймеры-очищать
            window.removeEventListener('keydown', onKeyDown); // сбросить слушатель события
        };
    }, [isOpen, onKeyDown]);
    if (lazy && !isMounted) {
        return null;
    }

    return (
        <div className={classNames(cls.Modal, mods, [className, theme])}>
            <div className={cls.overlay} onClick={CloseHandler}>
                <div
                    className={cls.content}
                    onClick={onContentClick}
                >
                    {children}
                </div>
            </div>
        </div>
    );
};
