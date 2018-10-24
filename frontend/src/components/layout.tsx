import React from 'react'
import { withRouter } from 'next/router'
import { connect } from 'react-redux'

import { RootState } from '../@types/types'
import Nav from './nav'
import { setScrollY } from 'src/redux/actions'

interface Props {
  children?: React.ReactNode
  isMobile: boolean
  scrollY: number
  dispatchSetScrollY: (data: number) => any
}

interface State {
  mobileHeight: string
}

class Layout extends React.Component<Props, State> {
  private ticking: boolean
  private eventKeyScroll: number

  public constructor(props) {
    super(props)
    this.state = {
      mobileHeight: 'calc(100vh - 44px)'
    }
  }

  public componentDidMount() {
    const { dispatchSetScrollY } = this.props
    this.eventKeyScroll = window.scrollEvent.subscribe(this.eventKeyScroll, this.handleScroll)
    dispatchSetScrollY(window.scrollY)
  }

  public componentWillUnmount() {
    window.scrollEvent.unsubscribe(this.eventKeyScroll)
  }

  public handleScroll = () => {
    const { dispatchSetScrollY } = this.props
    if (!this.ticking) {
      window.requestAnimationFrame(() => {
        dispatchSetScrollY(window.scrollY)
        this.ticking = false
      })

      this.ticking = true
    }
  }

  public render() {
    const { children, isMobile, scrollY } = this.props
    return (
      <React.Fragment>
        <Nav isMobile={isMobile} scrollY={scrollY} />
        <div className="d-flex">
          {children}
        </div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state: RootState) => ({
  scrollY: state.scrollY
})

const mapDispatchToProps = dispatch => ({
  dispatchSetScrollY: (data) => dispatch(setScrollY(data))
})

export default withRouter<any>(connect(mapStateToProps, mapDispatchToProps)(Layout))
