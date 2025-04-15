import { classNames, Mods } from 'shared/lib/classNames/classNames';
import React, {
    InputHTMLAttributes, memo, MutableRefObject, useEffect, useRef, useState
} from 'react';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'| 'readOnly'>
interface InputProps extends HTMLInputProps {
    className? : string;
    value?: string | number;
    onChange?: (value: string) => void;
    autofocus?: boolean;
    readonly?: boolean;
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        onChange,
        type = 'text',
        placeholder,
        autofocus,
        readonly,
        ...otherProps
    } = props;

    const ref = useRef() as MutableRefObject<HTMLInputElement>;

    const [inFocused, setInFocused] = useState(false);
    const [caretPosition, setCaretPosition] = useState(0);

    const isCaretVisible = inFocused && !readonly; // каретка отобр если в фокуск и не только для чтения

    useEffect(() => {
        if (autofocus) {
            ref.current.focus();
            setInFocused(true);
        }
    }, [autofocus]);

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
        setCaretPosition(e.target.value.length);
    };

    const onBlure = () => {
        setInFocused(false);
    };

    const onFocus = () => {
        setInFocused(true);
    };

    const onSelect = (e:React.ChangeEvent<HTMLInputElement>) => {
        setCaretPosition(e?.target?.selectionStart || 0);
    };
    // визуализация дл чтение или редакт
    const mods:Mods = {};
    return (
        <div
            className={classNames(cls.InputWrapper, mods, [className])}
            {...otherProps}
        >
            {placeholder && (
                <div className={cls.placeholder}>
                    {`${placeholder} >`}
                </div>
            )}
            <div className={cls.caretWrapper}>
                <input
                    ref={ref}
                    type={type}
                    value={value}
                    onChange={onChangeHandler}
                    className={cls.input}
                    onFocus={onFocus}
                    onBlur={onBlure}
                    onSelect={onSelect}
                    readOnly={readonly}
                />
                {isCaretVisible
                    && <span className={cls.caret} style={{ left: `${caretPosition * 9}px` }} />}
            </div>
        </div>
    );
});
