import * as React from 'react'

interface Props {
  source: string
}

class IframePlayer extends React.Component<Props> {
  public render() {
    const { source } = this.props
    return (
      <iframe width="100%" height="100%" src={source} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
    )
  }
}

export default IframePlayer