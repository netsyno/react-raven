import React from 'react';
import PropTypes from 'prop-types';
import RavenJS from 'raven-js';
import debounce from 'lodash/debounce';

class Raven extends React.Component {
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

  connect() {
    if (!this.isComponentMounted) {
      return;
    }
    RavenJS.config(this.props.dsn).install();
  }

  render() {
    return <div />;
  }
}

Raven.propTypes = {
  dsn: PropTypes.string.isRequired,
};
