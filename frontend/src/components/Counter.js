import React from 'react';

class Counter extends React.Component {
    state = {
      count: 0
    };
  
    handleClick = () => {
      this.setState(prev => ({ count: prev.count + 1 }));
    };
  
    render() {
      return (
        <div className="counter-text">
          <p>Up Vote </p>
          <button onClick={this.handleClick}>
            {this.state.count}
          </button>
        </div>

      );
    }
  }

export default Counter;
