import * as React from 'react'
import classNames from 'classnames'

interface Props {

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
    const { isOpenMenu } = this.state
    return (
      <nav className="flex items-center justify-between absolute w-100 pa3 fixed">
        <a className="logo flex flex-column white-80 w3 w2-ns" href="#">
          <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 45.12 34.68" className="svg-logo"><path d="M2.33 6.7H0L6.7 0l6.7 6.7H11v14.87a4.16 4.16 0 0 0 2.62 4 5.23 5.23 0 0 0 2.53.48 5 5 0 0 0 3.59-1.66 4.24 4.24 0 0 0 .9-1.91 9 9 0 0 0 .16-1.86V0h11.87a12.29 12.29 0 0 1 1.66.22A14.09 14.09 0 0 1 36 .65a18.42 18.42 0 0 1 2 .75 11.45 11.45 0 0 1 4 2.86 10.42 10.42 0 0 1 2 3.29 17.38 17.38 0 0 1 .64 2 15.45 15.45 0 0 1 .43 3.59c0 .82 0 1.65-.09 2.47a18.82 18.82 0 0 1-.32 1.87 11.72 11.72 0 0 1-1 2.89 10.87 10.87 0 0 1-3.06 3.83 11.66 11.66 0 0 1-3.42 1.91 18.12 18.12 0 0 1-2.08.63 14.33 14.33 0 0 1-2.37.35c-1.45.07-2.9.06-4.35.08a.22.22 0 0 0-.24.16A11.81 11.81 0 0 1 25 31.81a10.66 10.66 0 0 1-3.21 1.87 13.41 13.41 0 0 1-1.8.56 21.54 21.54 0 0 1-2.37.35 18.91 18.91 0 0 1-2.14.08 17.77 17.77 0 0 1-2-.16 15.74 15.74 0 0 1-1.95-.35 12 12 0 0 1-4.31-2 11.66 11.66 0 0 1-3.62-4.74 12.69 12.69 0 0 1-.86-2.72c-.11-.57-.25-1.13-.31-1.71a16.27 16.27 0 0 1-.09-1.82V6.91c-.01-.06-.01-.12-.01-.21zm27.15 11.82a21.62 21.62 0 0 0 3.31-.14 4.3 4.3 0 0 0 2.09-1 4.94 4.94 0 0 0 1.58-3.51 5.24 5.24 0 0 0-.75-3.1 4.26 4.26 0 0 0-3.49-2.07c-.66-.06-1.33 0-2 0h-.74z" id="RGRjGq.tif"></path></svg>
        </a>
        <ul className="list pl0 dn flex-ns flex-grow-1 justify-around white avenir f6 fw5">
          <li>
            <a href="#" className="navigator link white-80 relative">Home</a>
          </li>
          <li>
            <a href="#" className="navigator link white-80 relative">What We Do</a>
          </li>
          <li>
            <a href="#" className="navigator link white-80 relative">Our Story</a>
          </li>
          <li>
            <a href="#" className="navigator link white-80 relative">Journal</a>
          </li>
          <li>
            <a href="#" className="navigator link white-80 relative">Contact</a>
          </li>
        </ul>
        <div onClick={this.toggleMenu} className={classNames('menu-toggle dn-ns br-100 bg-animate bg-gold flex items-center justify-center', { 'active-menu': isOpenMenu })}>
          <span className={classNames('hamburger relative', { 'active-hamburger': isOpenMenu })}></span>
          <span className={classNames('menu-close relative', { 'active-close': isOpenMenu })}></span>
        </div>
        <ul className={classNames('navigator-mobile flex flex-column justify-center items-center list absolute top-0 left-0 w-100 vh-100 ma0 pa0 bg-gold', { 'active-navigator-mobile': isOpenMenu })}>
          <li className="mv3 pa2">
            <a href="#" className="navigator link white-80 relative">Home</a>
          </li>
          <li className="mv3 pa2">
            <a href="#" className="navigator link white-80 relative">What We Do</a>
          </li>
          <li className="mv3 pa2">
            <a href="#" className="navigator link white-80 relative">Our Story</a>
          </li>
          <li className="mv3 pa2">
            <a href="#" className="navigator link white-80 relative">Journal</a>
          </li>
          <li className="mv3 pa2">
            <a href="#" className="navigator link white-80 relative">Contact</a>
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
            background-color: #6D4C1E !important;
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