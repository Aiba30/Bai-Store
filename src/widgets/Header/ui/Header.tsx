import Logo from '@shared/ui/Logo';
import classes from './Header.module.scss';
import { MenuBar } from '@features/MenuBar';
import NavBar from '@entities/NavBar/ui';

export function Header() {
    return(
        <header className={classes.header}>
            <div className={classes.header__content}>
            <Logo />
            <MenuBar />
            </div>
            <NavBar />
        </header>
    )
}