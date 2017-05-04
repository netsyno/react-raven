import React from 'react';
import PropTypes from 'prop-types';
import RavenJS from 'raven-js';
import debounce from 'lodash/debounce';

export default class Raven extends React.Component {
  constructor(props) {
    super(props);
    this.install = debounce(this.install.bind(this));
  }

  componentDidMount() {
    this.isComponentMounted = true;
    this.install();
  }

  componentWillUnmount() {
    this.isComponentMounted = false;
    if (RavenJS._isRavenInstalled) {
      RavenJS.uninstall();
    }
  }

  install() {
    if (!this.isComponentMounted || RavenJS._isRavenInstalled) {
      return;
    }
    RavenJS.config(this.props.dsn, this.props.config).install();
  }

  render() {
    return null;
  }
}

Raven.defaultProps = {
  config: {},
};

Raven.propTypes = {
  dsn: PropTypes.string.isRequired,
  config: PropTypes.object,
};
