import React from 'react';
import Ad from './Ad';

  class AdPage extends React.Component {
    constructor(props) {
      super(props);
      this.state = {isToggleOn: true};
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick() {
      this.setState(state => ({
        isToggleOn:!state.isToggleOn
      }));
    }
  
    render() {
      return (
        <div classNmae="adShow">
        <Ad State={this.state.isToggleOn} />
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? "광고안보기":"광고보기"}
        </button>
        </div>
      );
    }
  }

  export default AdPage;
  
 