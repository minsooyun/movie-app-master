import React, { Fragment } from "react";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }
  render() {
    const { location } = this.props;
    if (location.state) {
      return (
        <Fragment>
          <article className="movie__detail">
            <h2 className="movie__title">{location.state.title}</h2>
            <img src={location.state.poster}></img>
            <p className="movie__summary">{location.state.summary}</p>
          </article>
        </Fragment>
      );
    } else {
      return null;
    }
  }
}

export default Detail;
