import React from 'react';
import ReactShadowRoot from 'react-shadow-root';

export default class ShadowCounter extends React.Component {
  state = { cnt: 0 };

  increment = () => {
    this.setState({
      cnt: this.state.cnt + 1
    });
  }

  render() {
    const style = `span {
      background-color: #333;
      border-radius: 3px;
      color: #fff;
      padding: 1px 5px;
    }
    button {
      background-color: #fff;
      border: 1px solid currentColor;
      border-radius: 3px;
      color: #333;
      cursor: pointer;
      outline: 0;
    }
    button:active {
      background-color: #333;
      color: #fff;
    }`;

    return (
      <div> {/* The shadow root will be attached to this DIV */}
        <ReactShadowRoot>
          <style>{style}</style>
          <span>{this.state.cnt}</span> <button onClick={this.increment}>Click Me</button>
        </ReactShadowRoot>
      </div>
    );
  }
}