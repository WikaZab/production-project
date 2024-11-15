import {classNames} from "shared/lib/classNames/classNames";
import cls from './AppLink.module.scss';
import {Link, LinkProps} from "react-router-dom";
import {FC} from "react";

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    RAD = 'red'

}
interface AppLinkProps extends LinkProps{
    className? : string;
    theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps>= (props) => {
    const {to, children, className, theme = AppLinkTheme.PRIMARY} = props;
    return (

        <Link
            to = {to}
            className= {classNames(cls.AppLink, {}, [className, cls[theme]])}>
            {children}
        </Link>
    );
};




