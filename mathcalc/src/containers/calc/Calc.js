import React, { Component } from "react";
import Aux from '../../hoc/Aux/Aux';
import classes from './Calc.css';
// import Operator from '../../components/Operator/Operator';

class Calc extends Component{
    state = {
        number1: 0,
        number2: 0,
        result: 0
    }

    numbersChangeHandler = (event, id, no) => {
        const dno = Number(event.target.value)
        const res = dno + Number(no);
        if(id === 1){
            this.setState({number1: dno, result: res})
        }
        else{
            this.setState({
                number2: dno,
                result: res});
        }
        
    }
    
    resultChangeHandler = (event, id) => {
        const dno = Number(event.target.value)
        // const res = dno + Number(no);
        if(id === 1){
            this.setState({number1: dno});
        }
        else{
            this.setState({number2: dno});
        }
        
    }

    getResultHandler = () => {
        const no1 = this.state.number1;
        const no2 = this.state.number2;
        this.setState({result: no1 + no2})
    }

    resetResult = () => {
        this.setState({
            number1: 0,
            number2: 0,
            result:0})
    }

    render(){

        const num1 = this.state.number1;
        const num2 = this.state.number2;

        return (
            <div className={classes.calc}>
                {/* <Operator no1={this.state.number1} no2={this.state.number2} 
                resultChange={this.numbersChangeHandler} /> */}
                <h3>Number1</h3>
                <input type="text" value={num1} 
                    onChange={(event)=> this.resultChangeHandler(event, 1) } />
                <h3>Number2</h3>
                <input type="text" value={num2} 
                    onChange={(event)=> this.resultChangeHandler(event, 2) } />
                <h3>Result : {this.state.result}</h3>
                
                <button onClick={this.getResultHandler} >Add</button>&nbsp;
                <button onClick={this.resetResult}>Reset</button>
            </div>
        )
    }
}

export default Calc