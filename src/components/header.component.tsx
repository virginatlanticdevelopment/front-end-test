import { h, JSX } from 'preact'
import * as style from './header.module.less'

export default function HeaderComponent(): JSX.Element {
  const logo = new URL('../assets/images/logo.svg', import.meta.url);

  return (
    <header className={`${style['header']} wrapper full-bleed`}>
        <div className="wrapper">
          <img src={logo} width="35" height="24" alt="Virgin Atlantic Logo" />
        </div>
    </header>
  )
}