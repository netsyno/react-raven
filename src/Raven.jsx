import React from 'react';
import PropTypes from 'prop-types';
import RavenJS from 'raven-js';
import debounce from 'lodash/debounce';

if (typeof navigator != 'undefined' && navigator.product == 'ReactNative') {
  require('raven-js/plugins/react-native')(Raven);
}

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
    this.uninstall();
  }

  install() {
    if (!this.isComponentMounted) {
      return;
    }
    RavenJS.config(this.props.dsn, this.props.config).install();
  }

  uninstall() {
    if (!Raven._isRavenInstalled) {
      return;
    }
    RavenJS.uninstall();
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