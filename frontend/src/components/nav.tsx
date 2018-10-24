import * as React from 'react'
import classNames from 'classnames'

interface Props {
  isMobile: boolean
  scrollY: number
}

interface State {
  isOpenMenu: boolean
}

class Nav extends React.Component<Props, State> {

  public constructor(props) {
    super(props)
    this.state = {
      isOpenMenu: false
    }
  }

  public toggleMenu = () => {
    this.setState((prevState) => ({
      isOpenMenu: !prevState.isOpenMenu
    }))
  }

  public render() {
    const { scrollY } = this.props
    const { isOpenMenu } = this.state

    return (
      <nav className={classNames('flex items-center justify-between absolute w-100 pa3 fixed bg-animate', { 'bg-primary': scrollY != 0 })}>
        <a className="logo link flex flex-column items-start flex-grow-1" href="#">
          <span className="f6 helvetica white-50 ba b--white-50 pa1">Building the Bridge</span>
        </a>
        <ul className="list pl0 dn flex-ns flex-grow-1 justify-around white avenir f6 fw5">
          <li>
            <a href="#" className="navigator link white-80 relative">How We Started</a>
          </li>
          <li>
            <a href="#" className="navigator link white-80 relative">Our Vision</a>
          </li>
          <li>
            <a href="#" className="navigator link white-80 relative">Core Values</a>
          </li>
          <li>
            <a href="#" className="navigator link white-80 relative">Our Process</a>
          </li>
          <li>
            <a href="#" className="navigator link white-80 relative">Inspirations</a>
          </li>
        </ul>
        <div onClick={this.toggleMenu} className={classNames('menu-toggle dn-ns br-100 bg-animate bg-primary flex items-center justify-center', { 'active-menu': isOpenMenu })}>
          <span className={classNames('hamburger relative', { 'active-hamburger': isOpenMenu })}></span>
          <span className={classNames('menu-close relative', { 'active-close': isOpenMenu })}></span>
        </div>
        <ul className={classNames('navigator-mobile flex flex-column justify-center items-center list absolute top-0 left-0 w-100 vh-100 ma0 pa0 bg-primary', { 'active-navigator-mobile': isOpenMenu })}>
          <li className="mv3 pa2">
            <a href="#" className="navigator link white-80 relative">How We Started</a>
          </li>
          <li className="mv3 pa2">
            <a href="#" className="navigator link white-80 relative">Our Vision</a>
          </li>
          <li className="mv3 pa2">
            <a href="#" className="navigator link white-80 relative">Core Values</a>
          </li>
          <li className="mv3 pa2">
            <a href="#" className="navigator link white-80 relative">Our Process</a>
          </li>
          <li className="mv3 pa2">
            <a href="#" className="navigator link white-80 relative">Inspirations</a>
          </li>
        </ul>
        <style jsx>{`
          nav {
            letter-spacing: .1em;
            text-transform: uppercase;
            z-index: 5;
          }
          .navigator:after, .navigator:before {
            background: rgba(255, 255, 255, 0.8);
            position: absolute;
            left: 0;
            width: 100%;
            height: 1px;
            transform: scale3d(0,1,1);
            transition: transform 0.5s cubic-bezier(0.37,0.16,0.12,1);
            content: '';
          }
          .navigator:after {
            bottom: -5px;
            transform-origin: left top;
          }
          .navigator:before {
            bottom: -6px;
            transform-origin: right top;
          }
          .navigator:hover::after, .navigator:hover::before {
            transform: scale3d(1,1,1);
          }
          .logo {
            z-index: 10;
          }
          .svg-logo {
            fill: currentcolor;
          }
          .menu-toggle {
            z-index: 10;
            width: 50px;
            height: 50px;
          }
          .hamburger, .menu-close {
            top: -1px;
            left: -16px;
          }
          .hamburger:before, .hamburger:after, .menu-close:before, .menu-close:after {
            width: 32px;
            height: 3px;
            content: '';
            display: block;
            background-color: #FFFFFF;
            position: absolute;
            transform: scale(1);
            transition: transform 0.5s cubic-bezier(0.37,0.16,0.12,1);
          }
          .menu-close:before {
            top: 0px;
          }
          .menu-close:after {
            top: 0px;
          }
          .hamburger:before {
            top: -7px;
          }
          .hamburger:after {
            top: 7px;
          }
          .active-menu {
            background-color: #27324B !important;
          }
          .active-hamburger:before, .active-hamburger:after {
            transform: scale(0) !important;
          }
          .active-close:before {
            transform: rotateZ(45deg);
          }
          .active-close:after {
            transform: rotateZ(-45deg);
          }
          .navigator-mobile {
            transform: translateX(101%);
            transition: transform 0.5s cubic-bezier(0.37,0.16,0.12,1);
          }
          .active-navigator-mobile {
            transform: none;
          }
        `}</style>
      </nav>
    )
  }
}

export default Nav