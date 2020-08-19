import React, { Component } from 'react';
import classes from './Calc.css';

class Calculator extends Component{
    state = {
        displayBox: "",
        calcResult: 0
    }

    resetResultHandler = () => this.setState({displayBox: "", calcResult: 0})

    displayBoxHandler = (event, val) => {
        const currentDspBox = this.state.displayBox;
        const updatedDspBox = this.updateDspBoxVal(val, currentDspBox);
        this.setState({displayBox: updatedDspBox});
    }

    updateDspBoxVal(c, displayStr) {
        let updatedStr = displayStr;
        const lenOfDisplay = displayStr.length;
        if (lenOfDisplay > 0){
            const operatorSet = "+-*/%.";
            if( !operatorSet.includes(c)){
                return updatedStr+c;
            }
            updatedStr = displayStr.replace(/^(.*)/,'$1'+c);
            return updatedStr;
        }
        return c;
    }

    ResultBoxHandler = () => {
        const result = this.state.displayBox;
        this.setState({calcResult: eval(result), displayBox: ""})
    }

    render(){
        return (
            <div className={classes.Calc}>
                <div className={classes.CalcHeader}>
                    <p style={{color: "grey"}}>{this.state.displayBox}</p>
                    <p>{this.state.calcResult}</p>
                </div>

                <div className={classes.Btn_group}>
                        <button className={classes.Button} onClick={this.resetResultHandler}>C</button>
                        <button className={classes.Button}>&plusmn;</button>
                        <button className={classes.Button}
                            onClick={(event) => this.displayBoxHandler(event, '%')}>%</button>
                        <button className={classes.Button} 
                            onClick={(event) => this.displayBoxHandler(event, '/')}>/</button>
                </div>
                <div className={classes.Btn_group}>
                    <button className={classes.Button}
                        onClick={(event) => this.displayBoxHandler(event, '7')}>7</button>
                    <button className={classes.Button}
                        onClick={(event) => this.displayBoxHandler(event, '8')}>8</button>
                    <button className={classes.Button}
                        onClick={(event) => this.displayBoxHandler(event, '9')}>9</button>
                    <button className={classes.Button}
                        onClick={(event) => this.displayBoxHandler(event, '*')}>*</button>
                </div>
                <div className={classes.Btn_group}>
                    <button className={classes.Button}
                        onClick={(event) => this.displayBoxHandler(event, '4')}>4</button>
                    <button className={classes.Button}
                        onClick={(event) => this.displayBoxHandler(event, '5')}>5</button>
                    <button className={classes.Button}
                        onClick={(event) => this.displayBoxHandler(event, '6')}>6</button>
                    <button className={classes.Button}
                        onClick={(event) => this.displayBoxHandler(event, '-')}>-</button>
                </div>
                <div className={classes.Btn_group}>
                    <button className={classes.Button}
                        onClick={(event) => this.displayBoxHandler(event, '1')}>1</button>
                    <button className={classes.Button}
                        onClick={(event) => this.displayBoxHandler(event, '2')}>2</button>
                    <button className={classes.Button}
                        onClick={(event) => this.displayBoxHandler(event, '3')}>3</button>
                    <button className={classes.Button}
                        onClick={(event) => this.displayBoxHandler(event, '+')}>+</button>
                </div>
                <div className={classes.Btn_group}>
                    <button className={classes.Button}
                        onClick={(event) => this.displayBoxHandler(event, '0')}>0</button>
                    <button className={classes.Button}
                        onClick={(event) => this.displayBoxHandler(event, '.')}>.</button>
                    <button className={classes.Button}>&#8617;</button>
                    <button className={classes.Button}
                        onClick={this.ResultBoxHandler}>=</button>
                </div>
            </div>
        );
    }
}

export default Calculator;