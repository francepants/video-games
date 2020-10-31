import React from 'react';

class Counter extends React.Component {
    state = {
      count: 0
    };
  
    handleClick = () => {
      // Use updater function when new state is derived from old
      this.setState(prev => ({ count: prev.count + 1 }));
    };
  
    render() {
      return (
        <button onClick={this.handleClick}>
          <div>{this.state.count}</div>
        </button>
      );
    }
  }

export default Counter;
