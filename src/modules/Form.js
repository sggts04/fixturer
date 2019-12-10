import React from 'react';
import './Form.css'

class Form extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tname: '',
            tnum: '',
            stage: 0
        };

        this.updateName = this.updateName.bind(this);
        this.updateNum = this.updateNum.bind(this);
        this.submit = this.submit.bind(this);
    }

    updateName(e) {
        this.setState({
            tname: e.target.value
        });
    }

    updateNum(e) {
        if(!isNaN(e.target.value)) {
            this.setState({
                    tnum: e.target.value
            });
        }
    }

    submit() {
        if(!( Number.isInteger(Math.log(this.state.tnum)/Math.log(2)) && Number(this.state.tnum) !== 1)) {
            alert("Number of teams must be a power of 2!");
        }
        else {
            this.setState({
                stage: 1
            });
        }
    }

    render() {
        return(
            (this.state.stage===0)?(
                
                <div className="Form">
                    <h2>Fixturer</h2>
                    <p>Fixturer is a Web App that generates single-elimination style fixtures.</p>
                    <input type="text" name="tname" placeholder="Tournament Name" value={this.state.tname} onChange={this.updateName}></input>
                    <br/><br/>
                    <input type="text" name="tnum" placeholder="Number of Teams" value={this.state.tnum} onChange={this.updateNum}></input>
                    <br/>
                    <button onClick={this.submit}>GO</button>
                </div>
                
                ):(

                <p>Enter Team Names</p>
            
                )
            );
    }
}

export default Form;
