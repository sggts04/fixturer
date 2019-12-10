import React from 'react';
import Fixtures from './Fixtures.js'
import './Form.css'

class Form extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            toname: '',
            tnum: '',
            tnames: [],
            stage: 0
        };

        this.updateToName = this.updateToName.bind(this);
        this.updateNum = this.updateNum.bind(this);
        this.updateNames = this.updateNames.bind(this);
        this.goBack = this.goBack.bind(this);
        this.submit = this.submit.bind(this);
        this.goToFixtures = this.goToFixtures.bind(this);
    }

    updateToName(e) {
        this.setState({
            toname: e.target.value
        });
    }

    updateNum(e) {
        if(!isNaN(e.target.value)) {
            this.setState({
                    tnum: e.target.value
            });
        }
    }

    updateNames(e, i) {
        var tnamestemp = this.state.tnames;
        tnamestemp[i] = e.target.value;
        this.setState({
            tnames: tnamestemp
        });
    }

    goBack() {
        this.setState({
            tnames: [],
            stage: 0
        });
    }

    submit() {
        if(!( Number.isInteger(Math.log(this.state.tnum)/Math.log(2)) && Number(this.state.tnum) !== 1)) {
            alert("Number of teams must be a power of 2!");
        }
        else {
            var tnamestemp = this.state.tnames;
            for(var i=0; i<this.state.tnum; i++) {
                tnamestemp.push('');
            }
            this.setState({
                stage: 1,
                tnames: tnamestemp
            });
        }
    }

    goToFixtures() {
        this.setState({
            stage: 2
        });
    }

    render() {
        return(
            (this.state.stage===0)?(
                
                <div className="Form">
                    <h2 className="title">Fixturer</h2>
                    <p className="description">Fixturer is a Web App that generates single-elimination style fixtures.</p>
                    <input type="text" name="toname" placeholder="Tournament Name" value={this.state.toname} onChange={this.updateToName}></input>
                    <br/><br/>
                    <input type="text" name="tnum" placeholder="Number of Teams" value={this.state.tnum} onChange={this.updateNum}></input>
                    <br/>
                    <button onClick={this.submit}>GO</button>
                </div>
                
                ):(
                    (this.state.stage===1)?(

                        <div className="Form">
                            <h2 className="title2">{this.state.toname}</h2>
                            <p className="description">Enter Team Names</p>
                            {this.state.tnames.map((name, i) => (
                                <div key={i}>
                                    <input type="text" placeholder={i+1} value={name} onChange={(e) => this.updateNames(e, i)}></input>
                                    <br/><br/>
                                </div>
                            ))}
                            <button className="back" onClick={this.goBack}>BACK</button>
                            <button className="names-submit" onClick={this.goToFixtures}>GO</button>
                        </div>
                    ):(

                        <Fixtures teams={this.state.tnames}/>

                    )
                )
            );
    }
}

export default Form;
