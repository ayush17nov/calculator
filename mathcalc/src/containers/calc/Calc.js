import React, { Component } from 'react';
import classes from './Calc.css';

class Calculator extends Component{
    state = {
        displayBox: [],
        calcResult: "",
        operatorSet: "+-*/%."
    }

    resetResultHandler = () => this.setState({displayBox: [], calcResult: ""})

    displayBoxHandler = (event, val) => {
        const abc = this.state.displayBox;
        const updatedDspBox = this.updateDspBox(val, abc);
        this.setState( { displayBox: updatedDspBox } );
    }

    updateDspBox(c, displayArr) {
        let updatedBoxArr = displayArr;
        const lenOfDisplay = displayArr.length;
        if (lenOfDisplay > 0){
            if( this.state.operatorSet.includes(c)){
                const lastElm = updatedBoxArr[lenOfDisplay-1];
                if ( this.state.operatorSet.includes(lastElm)){
                    if (lastElm === c){
                        return updatedBoxArr;
                    }
                    updatedBoxArr.pop();
                }
            }
        }
        else{
            if ("*/%00".includes(c)){
                return updatedBoxArr;
            }
        }
        updatedBoxArr.push(c);
        return updatedBoxArr;
    }

    backCursorHandler = () => {
        let backDisplay = this.state.displayBox;        
        if (backDisplay.length){
            backDisplay.pop();
            this.setState({displayBox: backDisplay});
        }
    }

    ResultBoxHandler = () => {
        const result = this.state.displayBox.join("");
        if ( result ){
            this.setState({calcResult: eval(result), displayBox: []})
        }
    }

    hasDisplayOperator(){
        const opList = this.state.operatorSet.split("");
        const dspLine = this.state.displayBox.join("");
        return opList.find((op)=>{return dspLine.includes(op);});
    }

    render(){
        let displayStr = "";
        const displayBox = this.state.displayBox;
        if (displayBox){
            displayStr = displayBox.join("");
            if(displayStr.includes("/")){
                displayStr = displayStr.replace(/\//g, "÷");
            }
            if(displayStr.includes("*")){
                displayStr = displayStr.replace(/\*/g, "×");
            }
        }

        let resultDisplay = this.state.calcResult;
        if(displayBox.length >= 3){
            const lastElm = displayBox[ displayBox.length - 1 ];
            if (! this.state.operatorSet.includes(lastElm) && this.hasDisplayOperator()){
                const strToEval = displayBox.join("");
                resultDisplay = eval(strToEval);
            }
        }
        let disp_font_size = "100%";
        let result_font_size = "100%";
        if (! displayStr && resultDisplay){
            disp_font_size = "-1%";
            result_font_size = "180%";
        }
        
        return (

            <div className={classes.CalcBody}>
                <div className={classes.CalcHeader}>
                    <p style={{fontSize: disp_font_size, color: "grey"}}>{displayStr}</p>
                    <p style={{fontSize: result_font_size}}>{resultDisplay}</p>
                </div>

                <div className={classes.CalcButton}>
                    <button className={classes.Button} onClick={this.resetResultHandler}>C</button>
                    <button className={classes.Button} onClick={(event) => this.displayBoxHandler(event, '00')}>00</button>
                    <button className={classes.Button} onClick={(event) => this.displayBoxHandler(event, '%')}>%</button>
                    <button className={classes.ButtonPrimaryOperator} onClick={(event) => this.displayBoxHandler(event, '/')}>÷</button>
                    
                    <button className={classes.Button} onClick={(event) => this.displayBoxHandler(event, '7')}>7</button>
                    <button className={classes.Button} onClick={(event) => this.displayBoxHandler(event, '8')}>8</button>
                    <button className={classes.Button} onClick={(event) => this.displayBoxHandler(event, '9')}>9</button>
                    <button className={classes.ButtonPrimaryOperator} onClick={(event) => this.displayBoxHandler(event, '*')}>×</button>

                    <button className={classes.Button} onClick={(event) => this.displayBoxHandler(event, '4')}>4</button>
                    <button className={classes.Button} onClick={(event) => this.displayBoxHandler(event, '5')}>5</button>
                    <button className={classes.Button} onClick={(event) => this.displayBoxHandler(event, '6')}>6</button>
                    <button className={classes.ButtonPrimaryOperator} onClick={(event) => this.displayBoxHandler(event, '-')}>−</button>

                    <button className={classes.Button} onClick={(event) => this.displayBoxHandler(event, '1')}>1</button>
                    <button className={classes.Button} onClick={(event) => this.displayBoxHandler(event, '2')}>2</button>
                    <button className={classes.Button} onClick={(event) => this.displayBoxHandler(event, '3')}>3</button>
                    <button className={classes.ButtonPrimaryOperator } onClick={(event) => this.displayBoxHandler(event, '+')}>+</button>

                    <button className={classes.Button} onClick={(event) => this.displayBoxHandler(event, '0')}>0</button>
                    <button className={classes.Button} onClick={(event) => this.displayBoxHandler(event, '.')}>.</button>
                    <button className={classes.Button} onClick={this.backCursorHandler}>⌫</button>
                    <button className={classes.Button} onClick={this.ResultBoxHandler}>=</button>
                </div>
            </div>
        );
    }
}

export default Calculator;