import React, { Component } from 'react';


const thomasFacts = [
    { title: `snails don't speak english`, body: ' its true in that snails cannot speak english, only understand it.  They actually speak Basque'},
    { title: `hammocks were invented by the british`, body: 'hammocks were invented by the British as stopgap to the ground.'},
    { title: 'beards can prevent cancer', body: 'probably'},
    { title: 'Kim Kardashian is actually 3 small children', body: 'the celebrity is actually just 3 small toddlers swapped out as they get bigger'}
]

class FactsList extends Component {
  render() {

        let facts = thomasFacts.map(fact => (
            <li className="mdl-list__item">
                <span className="mdl-list__item-primary-content">
                    {fact.title}
                </span>
            </li>
        ));
    return (
        <ul className="demo-list-item mdl-list">
            {facts}
        </ul>
    );
  }
}

export default FactsList;
