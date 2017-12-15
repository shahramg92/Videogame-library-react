import React, {PureComponent} from 'react';
import {Link} from 'react-router-dom';
import {GamesContainer} from '../containers';

export default class Layout extends PureComponent {
  render () {
    return (
      <div className="view">
        <nav className="navbar navbar-inverse">
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
              <Link className="navbar-brand" to="/">
                <img src="../fonts/arcade-font-writer.png" className="header-logo" />
              </Link>
            </div>
            <GamesContainer />
          </div>
        </nav>
        {this.props.children}
        <footer className="text-center">
          <p>© 2017 Shahram Ghassemi</p>
        </footer>
      </div>
    );
  }
}
