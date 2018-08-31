let num1 = 0;
let num2 = 0;
let operation = 0;
let calc = 0;
let numberOrder = 0;
let operSign = "+";
let oper1 = 0;
let oper2 = 0;
let oper1Comp = 0;
let oper2Comp = 0;

function calculation() {
switch(operation) {
    case 0:
        //add
        calc = (oper1Comp + oper2Comp);
        break;
    case 1:
        //sub
        calc = (oper1Comp - oper2Comp);
        break;
    case 2:
        //mult
        calc = (oper1Comp * oper2Comp);
        break;
    case 3:
        //div
        calc = (oper1Comp / oper2Comp);
        break;
}
    document.getElementById("calc").innerHTML = calc;
    numberOrder = 0;
    num1 = calc
    num2 = 0
    oper1Comp = calc
}

function changeValue(number) {
	if (numberOrder === 0) {
    	if (oper1Comp === calc) {
        num1 = 0
        oper1Comp = 0
        } else {}
    	oper1 = num1 + number;
        num1 = oper1;
        oper1Comp = (parseInt(oper1));
    	document.getElementById("value").innerHTML = oper1Comp;
        document.getElementById("operation").innerHTML = " ";
        document.getElementById("value2").innerHTML = " ";
        document.getElementById("calc").innerHTML = " ";
	} else {
    	oper2 = num2 + number;
        num2 = oper2;
        oper2Comp = (parseInt(oper2));
        document.getElementById("value2").innerHTML = oper2Comp;
    }
}

function changeOperation(number) {
	operation = number;
    switch(operation) {
    	case 0:
        	operSign = "+"
            break;
        case 1:
        	operSign = "-"
            break;
        case 2:
        	operSign = "*"
            break;
        case 3:
        	operSign = "/"
            break;
    }
    document.getElementById("value").innerHTML = oper1Comp;
    document.getElementById("operation").innerHTML = operSign;
    document.getElementById("value2").innerHTML = " ";
    document.getElementById("calc").innerHTML = " ";
    numberOrder = 1
}