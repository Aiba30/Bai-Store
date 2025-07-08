import Image from 'next/image'
import classes from './MenuBar.module.scss'
import { menuBarItems } from './model/MenuBar.helpers'

export function MenuBar() {
  return (
    <div className={classes.menuBar}>
      {menuBarItems.map(item => (
        <a key={item.id} href={"#"}>
          <Image className={classes.menuBar__icon} src={item.icon} alt={item.label} width={24} height={24} />
          <span className={classes.label}>{item.label}</span>
        </a>
      ))}
    </div>
  )
}
