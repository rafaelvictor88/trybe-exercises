import React from 'react';

class Image extends React.Component {
  render() {
    return <img src={this.props.logo} alt='Cute cat staring' />;
  }
}

export default Image;

// R1: O nome de componente criado acima é 'image';