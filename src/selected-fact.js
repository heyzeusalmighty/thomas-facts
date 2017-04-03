import React, { Component } from 'react';

class SelectedFact extends Component {

    constructor(props) {
        super(props);
    }


  render() {
    return (
      <div className="facts-list">
        <h2>{this.props.selectedFact.title}</h2>
        <p>{this.props.selectedFact.body}</p>


      </div>
    );
  }
}

export default SelectedFact;
