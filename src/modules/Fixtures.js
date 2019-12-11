import React from 'react';
import './Fixtures.css';

class Fixtures extends React.Component {
    constructor(props) {
        super(props);
        var matchups = [];
        var teamsCopy = this.props.teams.slice();
        for(var j=this.props.teams.length/2; j>=1; j=j/2) {
            if(j===this.props.teams.length/2) {
                var matchupsr1 = []
                for (let i=0; i<j; i++) {
                    let index = Math.floor(Math.random() * teamsCopy.length);
                    matchupsr1.push([teamsCopy[index]]);
                    teamsCopy.splice(index, 1);
                    index = Math.floor(Math.random() * teamsCopy.length);
                    matchupsr1[i] = [...matchupsr1[i], teamsCopy[index]];
                    teamsCopy.splice(index, 1);
                }
                matchups.push(matchupsr1);
            }
            else {
                var matchupsr = []
                for (let i=0; i<j; i++) {
                    matchupsr.push(['Winner', 'Winner']);
                }
                matchups.push(matchupsr);
            }
        }
        this.state = {
            matchups: matchups
        }
    }

    render() {
        return (
        <div className="Fixtures">
            <h2 className="title2">{this.props.toname}</h2>
            <div className="matchups">
            {this.state.matchups.map((matchupr) => {
                return (
                <div className="matchupr">
                    {matchupr.map((matchup) => (
                        <div className="matchup">
                            <div className="matchup-team">{matchup[0]}</div>
                                <h6>vs</h6>
                            <div className="matchup-team">{matchup[1]}</div>
                        </div>
                    ))}
                </div>
            )})}
            </div>
        </div>
        );
    }
}

export default Fixtures;
