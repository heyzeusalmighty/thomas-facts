import React, { Component } from 'react';


class FactsList extends Component {

    constructor(props) {
        super(props);
    }



    render() {

        let facts = this.props.thomasFacts.map(fact => (
        <li className="mdl-list__item fact-in-list" key={fact.title} onClick={() => this.props.selectFact(fact)}>
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
