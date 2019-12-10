import React from 'react';
import './Form.css'

class Form extends React.Component {
    render() {
        return(
            <div className="Form">
                <h2>Fixturer</h2>
                <p>Fixturer is a Web App that generates single-elimination style fixtures.</p>
                <input type="text" name="tname" placeholder="Tournament Name"></input>
                <br/><br/>
                <input type="text" name="tnum" placeholder="Number of Teams"></input>
                <br/>
                <button>GO</button>
            </div>
        );
    }
}

export default Form;
