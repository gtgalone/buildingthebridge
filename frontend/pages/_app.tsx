import * as React from 'react'
import App, { Container } from 'next/app'
// import Router from 'next/router'
import Head from 'next/head'
// import getConfig from 'next/config'
import { Provider } from 'react-redux'
import { toast, ToastContainer } from 'react-toastify'
import throttle from 'lodash/throttle'

import Layout from 'src/components/layout'
import { mobileRegexp } from 'src/constants/const'
import { withReduxSaga } from 'src/redux/store'
// import { pageview } from 'src/shared/helper/gtag'

interface Props {
  Component: React.Component
  pageProps: any
  store: any
}

class MyApp extends App<Props> {
  static async getInitialProps({Component, ctx}) {
    const userAgent = ctx.req ? ctx.req.headers['user-agent'] : navigator.userAgent
    const isMobile = mobileRegexp.test(userAgent)
    const isWindows = userAgent.includes('Windows')
    const pathname = ctx.pathname
    const asPath = ctx.asPath

    let pageProps = {}
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps, isMobile, pathname, isWindows, asPath }
  }

  public componentDidMount() {
    window.addEventListener(
      'scroll',
      throttle(() => window.scrollEvent.publish(), 99),
      {
        passive: true,
        capture: true
      }
    )
  }

  public render() {
    const { Component, pageProps, store, isMobile, asPath } = (this as any).props
    // Router.onRouteChangeStart = (url) => {
    //   pageview(url, getConfig().publicRuntimeConfig.GA_TRACKING_ID)
    // }

    return (
      <Container>
        <Head>
          <title>Building the Bridge</title>
        </Head>
        <ToastContainer
          position={toast.POSITION.TOP_CENTER}
          autoClose={10000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          draggable
          pauseOnHover
        />
        <Provider store={store}>
          { asPath.split('/')[1] == 'users' ?
          <Component {...pageProps} isMobile={isMobile} />
          :
          <Layout isMobile={isMobile}>
            <Component {...pageProps} isMobile={isMobile} />
          </Layout>
          }
        </Provider>
        <style jsx global>{`
          .no-select {
            user-select: none;
          }
          .bg-primary {
            background-color: #7195BA;
          }
          .bg-secondary {
            background-color: #FFDD56;
          }
          .text-primary {
            color: #7195BA;
          }
          .text-secondary {
            color: #FFDD56;
          }
          .text-content {
            color: #1B3443;
          }
        `}</style>
      </Container>
    )
  }
}

export default withReduxSaga(MyApp)
