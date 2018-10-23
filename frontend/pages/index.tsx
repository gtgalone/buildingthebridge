import * as React from 'react'
import throttle from 'lodash/throttle'

interface Props {
  isMobile: boolean
}

class Index extends React.Component<Props> {
  private ticking: boolean
  private mainImageRef: any
  private contentRef: any

  public constructor(props) {
    super(props)
    this.mainImageRef = React.createRef()
    this.contentRef = React.createRef()
  }

  public componentDidMount() {
    const { isMobile } = this.props
    this.mainImageRef.current.style.transform = 'scale(1)'
    // window.addEventListener(
    //   'scroll',
    //   throttle(this.handleScroll, 99)
    // )
  }
  
  public componentWillUnmount() {
    // window.removeEventListener(
    //   'scroll',
    //   throttle(this.handleScroll, 99)
    // )
  }

  // public handleScroll = () => {
  //   if (!this.ticking) {
  //     window.requestAnimationFrame(() => {
  //       this.mainImageRef.current.style.opacity = `${window.scrollY / document.body.clientHeight}`
  //       this.heartRef.current.style.transform = `rotate(30deg) scale(${window.scrollY / document.body.clientHeight + 0.1})`
  //       this.ticking = false
  //     })

  //     this.ticking = true
  //   }
  // }

  public onClickScroll = () => {
    this.contentRef.current.scrollIntoView({ block: 'start', behavior: 'smooth' })
  }

  public render() {
    const { isMobile } = this.props
    return (
      <div className="w-100">
        <div className="main relative flex justify-center items-center vh-100 overflow-hidden">
          <img src="/static/main-image.jpg" ref={this.mainImageRef} className="main-image absolute mw-none" />
          <div className="background-shadow absolute"></div>
          <div className="main-image-contents relative flex flex-column justify-center items-center">
            <div className="main-image-text relative flex flex-wrap justify-center mb6">
              <div className="white f3 f2-m f1-ns fw9 georgia w-50-ns tc ph4">To break the cycle of poverty, we must embrace the will to navigate <span className="yellow">Upstream</span></div>
            </div>
            <div onClick={this.onClickScroll} className="white flex flex-column items-center pointer">
              <i className="arrow-down f2 fw4 fas fa-long-arrow-alt-down mb3"></i>
              <span className="helvetica o-50 f6">S C R O L L</span>
            </div>
          </div>
        </div>
        <section ref={this.contentRef} className="content w-100 pa4 tc relative bg-white vh-50">
        
        </section>
        <style jsx>{`{
          hr {
            border: 1px solid #FFFFFF;
            flex-grow: 1;
            flex-shrink: 0;
            flex-basis: auto;
          }
          section {
            font-family: 'Noto Serif KR', sans-serif !important;
          }
          .main-image {
            transform: scale(3);
            transition: all 10s;
          }
          .main-image-contents {
            z-index: 2
          }
          .background-shadow {
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(56, 49, 38, 0.8);
            z-index: 1;
          }
          @keyframes bounce {
            0%, 16.667%, 33.333%, 53.33%, 67.667% {
              transform: translateY(0);
            }
            26.667% {
              transform: translateY(-30px);
            }
            40% {
              transform: translateY(-15px);
            }
          }
          .arrow-down {
            animation: bounce 3s infinite;
          }
          .content {
            z-index: 2;
          }
        }`}</style>
      </div>
    )
  }
}

export default Index
