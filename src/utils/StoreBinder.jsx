import React, { Component } from 'react';
import stores from '../stores';

const Binder = (storesToBind, ComposedComponent, cb) => {
  class Wrapper extends Component {
    constructor() {
      super();
      const initialState = {};
      storesToBind.forEach((storeName) => {
        initialState[storeName] = stores[storeName].getState();
      });
      this.state = initialState;
    }
    componentDidMount() {
      storesToBind.forEach(storeName =>
        stores[storeName].on('change', data => this.setState({ [storeName]: data })),
      );
    }
    componentWillUnmount() {
      storesToBind.forEach(storeName => stores[storeName].off('change'));
    }
    render() {
      const props = cb !== undefined ? cb(this.state) : this.state;
      return <ComposedComponent {...this.props} {...props} />;
    }
  }

  return Wrapper;
};

export default Binder;
