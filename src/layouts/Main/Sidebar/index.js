import * as routes from 'constants/routes'

import LogoIcon from 'icons/Logo'

import useClasses from 'hooks/useClasses'

import styles from './styles'

import MainLayoutNavMenuItem from './NavMenuItem'

const MENU = [
  {
    label: 'Home',
    to: routes.HOME_PAGE_ROUTE
  },
  {
    label: 'About',
    to: routes.ABOUT_PAGE_ROUTE
  }
]

function MainLayoutSidebar (props) {
  const classes = useClasses(styles)

  return (
    <div className={classes.root}>
      <LogoIcon />

      <div className={classes.navMenu}>
        {MENU.map((item, i) => (
          <MainLayoutNavMenuItem item={item} key={i} />
        ))}
      </div>
    </div>
  )
}

export default MainLayoutSidebar
