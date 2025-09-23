import { classNames } from 'shared/lib/classNames/classNames';
import { Input } from 'shared/ui/Input/Input';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import cls from './AddCommentForm.module.scss';
import { getAddCommentFormError, getAddCommentFormText } from '../../model/selectors/adCommentForrmSelectors';
import { useAppDispatch } from '../../../../shared/lib/hooks/useAppDispatch/useAppDispatch';
import { addCommentFormActions, addCommentFormReducer } from '../../model/slice/AddCommentFormSlice';
import {
    DynamicModuleLoader,
    ReducerList
} from '../../../../shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

export interface AddCommentFormProps {
    className?: string;
    onSendComment: (text: string) => void;
}
const reducers: ReducerList = {
    addCommentForm: addCommentFormReducer
};
const AddCommentForm = memo(({ className, onSendComment }: AddCommentFormProps) => {
    const { t } = useTranslation('article');
    const error = useSelector(getAddCommentFormError);
    const text = useSelector(getAddCommentFormText);
    const dispatch = useAppDispatch();

    const onCommentTextChange = useCallback((value: string) => {
        dispatch(addCommentFormActions.setText(value));
    }, [dispatch]);
    const onSendHandler = useCallback(() => {
        onCommentTextChange('');
        onSendComment(text || '');
    }, [onCommentTextChange, onSendComment, text]);

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={classNames(cls.AddCommentForm, {}, [className])}>
                <Input
                    placeholder={t('Введите техт комментария')}
                    value={text}
                    onChange={onCommentTextChange}
                    className={cls.input}
                />
                <Button
                    theme={ButtonTheme.BACKGROUND_INVERTED}
                    onClick={onSendHandler}
                >
                    {t('Отправить')}
                </Button>
            </div>
        </DynamicModuleLoader>

    );
});

export default AddCommentForm;
