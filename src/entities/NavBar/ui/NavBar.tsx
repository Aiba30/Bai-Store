import Image from 'next/image'
import classes from './NavBar.module.scss'
import { NavItems } from '../model/NavBar.helpers'

export function NavBar() {
  return (
    <div className={classes.navBar}>
      <div className={classes.navBar__search}>
        <button className={classes.navBar__search__button}>
        <Image className={classes.navBar__search__icon} src='/icons/search.svg' alt='search' width={16} height={16}/>
        </button>
        <input type="text" placeholder="Поиск" />
      </div>
      <div className={classes.navBar__links}>
        {NavItems.map(item => (
          <a key={item.title} href={"#"}>
            {item.title}
          </a>
        ))}
      </div>
    </div>
  )
}
