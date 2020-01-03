import React from 'react';
import Button from '@/component/Button';

export default class extends React.Component {
  static getInitialProps = async ({ route, location, isServer, req, res }) => {
    return {
      data: 'pageA',
    };
  };

  render() {
    return (
      <h1><Button text={this.props.data}/></h1>
    );
  }
}
