import React, {PureComponent} from 'react';
import {Link} from 'react-router-dom';

export default class Welcome extends PureComponent {
  render () {
    return (
      <div className="inner cover">
        <h1 className="cover-heading">Welcome!</h1>
        <p className="lead">Please click browse to look at the world's most sophisticated video game database</p>
        <p className="lead">
          <Link className="btn btn-lg" to="/games">Browse!</Link>
        </p>
      </div>
    );
  }
}
