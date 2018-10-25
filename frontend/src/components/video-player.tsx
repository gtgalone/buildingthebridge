import * as React from 'react'

interface Props {
  show: boolean
  close: (arg: boolean) => any
}

class VideoPlayer extends React.Component<Props> {
  public render() {
    const { show, close } = this.props
    return (
      <React.Fragment>
        <div className="video-player w-100 vh-100 bg-black fixed top-0 left-0">
          <i onClick={() => close(false)} className="fas fa-times-circle f1 text-secondary bg-white br-100 absolute right-2 top-2 pointer grow"></i>
          <iframe src="https://player.vimeo.com/video/214265573" width="100%" height="100%" frameBorder="0" allowFullScreen></iframe>
        </div>
        <style jsx>{`
          .video-player {
            z-index: 10;
            transform: scale(${ show ? 1 : 0 });
            transition: transform ease 0.5s;
          }
        `}</style>
      </React.Fragment>
    )
  }
}

export default VideoPlayer