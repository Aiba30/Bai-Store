import Image from 'next/image'
import classes from './Logo.module.scss'

export function Logo(){
    return(
        <div className={classes.logo}>
            <Image className={classes.logo__txt} src="/Icons/logo.svg" alt='logo' width={100} height={100}/>
            <div className={classes.logo__icon}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    )
}