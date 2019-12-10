import React from 'react';
import './Fixtures.css';

class Fixtures extends React.Component {
    constructor(props) {
        super(props);
        var matchups = [];
        var teamsCopy = this.props.teams.slice();
        for (var i=0; i<this.props.teams.length/2; i++) {
            let index = Math.floor(Math.random() * teamsCopy.length);
            matchups.push([teamsCopy[index]]);
            teamsCopy.splice(index, 1);
            index = Math.floor(Math.random() * teamsCopy.length);
            matchups[i] = [...matchups[i], teamsCopy[index]];
            teamsCopy.splice(index, 1);
        }
        this.state = {
            matchups: matchups
        }
    }

    render() {
        return (
        <div className="Fixtures">
            {this.state.matchups.map((matchup) => (
                <div className="matchup">

                    <div className="matchup-team">{matchup[0]}</div>
                        <h6>vs</h6>
                    <div className="matchup-team">{matchup[1]}</div>

                </div>
            ))}
        </div>
        );
    }
}

export default Fixtures;
