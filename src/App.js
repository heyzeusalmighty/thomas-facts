import React, { Component } from 'react';
import './App.css';
import FactsList from './facts-list';
import SelectedFact from './selected-fact';
import thomasFacts from './facts';

class App extends Component {

  constructor() {
	  super();
	  console.log('thomasFacts', thomasFacts);
	  this.state = {
		  selectedFact: { title: 'Learn you something', body: 'Click a fact on the left'}
	  }

	  this.factHasBeenSelected = this.factHasBeenSelected.bind(this)
  }

  factHasBeenSelected(fact) {
	  this.setState({ selectedFact: fact});
  }


  render() {
    return (
      <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <header className="mdl-layout__header">
          <div className="mdl-layout__header-row">
            <span className="mdl-layout-title">Title</span>
            <div className="mdl-layout-spacer"></div>
            <nav className="mdl-navigation mdl-layout--large-screen-only">
              <a className="mdl-navigation__link" href="">Link</a>
            </nav>
          </div>
        </header>
        <div className="mdl-layout__drawer">
          <span className="mdl-layout-title">Title</span>
          <nav className="mdl-navigation">
            <a className="mdl-navigation__link" href="">Search</a>
            <a className="mdl-navigation__link" href="">Link</a>
            <a className="mdl-navigation__link" href="">Link</a>
            <a className="mdl-navigation__link" href="">Link</a>
          </nav>
        </div>
        <main className="mdl-layout__content">
          <div className="page-content">
		  	<div className="mdl-grid">
			  <div className="mdl-cell mdl-cell--3-col">
			  	<FactsList thomasFacts={thomasFacts} selectFact={this.factHasBeenSelected} />
			  </div>
			  <div className="mdl-cell mdl-cell--9-col">
			  	<SelectedFact selectedFact={this.state.selectedFact}/>
			  </div>

			</div>
			
			
          </div>
        </main>
      </div>
    );
  }
}

export default App;
