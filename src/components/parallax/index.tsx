import * as React from 'react';

export default class Parallax extends React.Component<any, any> {
  public render () {
    return (
      <div className="parallax">
        <div className="parallax__one"></div>
        <div className="parallax__two"></div>
        <div className="parallax__three"></div>
        <div className="parallax__four"></div>
        <div className="parallax__five"></div>
        <div className="parallax__six"></div>
        <div className="parallax__seven"></div>
        <div className="parallax__eight"></div>
      </div>
    );
  }
}
