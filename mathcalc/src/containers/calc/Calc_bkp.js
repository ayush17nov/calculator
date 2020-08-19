import React, { Component } from "react";
// import Aux from '../../hoc/Aux/Aux';
import classes from './Calc.css';
// import Operator from '../../components/Operator/Operator';

class Calc extends Component{
    state = {
        calcbox: 0,
        result: 0
    }

    boxInputHandler = (event) => this.setState({calcbox: event.target.value});

    getResultHandler = () => {
        const boxExp = this.expParser(this.state.calcbox);
        this.setState({
            calcbox: boxExp,
            result: this.boxResult(boxExp)});
    }

    expParser(s) {
        return s;
    }

    boxResult(exp){
        return "";
    }

    resetResultHandler = () => this.setState({calcbox: 0, result:0});

    render(){

        const box = this.state.calcbox;

        return (            
            <div className={classes.calc}>
                 {/* <Operator no1={this.state.number1} no2={this.state.number2} 
                 resultChange={this.numbersChangeHandler} /> */}
                 
                <input type="text" value={box} 
                     onChange={(event)=> this.boxInputHandler(event) } />
                
                <p className={classes.Result}>{this.state.result}</p>

                {/* <button className={classes.Button}>C</button>
                <button className={classes.Button}>&plusmn;</button>
                <button className={classes.Button}>%</button>
                <button className={classes.Button}>/</button> */}

                <div className={classes.CalcWindow}>
                <button className={classes.Button}>/</button>
                    <div className={classes.Btn_group}>
                        <button className={classes.Button}>C</button>
                        <button className={classes.Button}>&plusmn;</button>
                        <button className={classes.Button}>%</button>
                        <button className={classes.Button}>/</button>
                    </div>
                    <div className={classes.Btn_group}>
                        <button className={classes.Button}>7</button>
                        <button className={classes.Button}>8</button>
                        <button className={classes.Button}>9</button>
                        <button className={classes.Button}>*</button>
                    </div>
                    <div className={classes.Btn_group}>
                        <button className={classes.Button}>4</button>
                        <button className={classes.Button}>5</button>
                        <button className={classes.Button}>6</button>
                        <button className={classes.Button}>-</button>
                    </div>
                    <div className={classes.Btn_group}>
                        <button className={classes.Button}>1</button>
                        <button className={classes.Button}>2</button>
                        <button className={classes.Button}>3</button>
                        <button className={classes.Button}>+</button>
                    </div>
                    <div className={classes.Btn_group}>
                        <button className={classes.Button}>0</button>
                        <button className={classes.Button}>.</button>
                        <button className={classes.Button}>&#8617;</button>
                        <button className={classes.Button}>=</button>
                    </div>
                </div>
                
                {/* <button className={classes.Button} onClick={this.getResultHandler} >
                    <strong>=</strong>
                </button>
                <button style={{padding:'10px'}} onClick={this.resetResultHandler}>Reset</button> */}
            </div>
        )
    }
}

export default Calc