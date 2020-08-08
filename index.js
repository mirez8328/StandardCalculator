var pointflag = false; //দশমিক একসাথে একটার বেশী না দেয়া যায়
var addFlag = false; //একসাথে একটার বেশি প্লাস সাইন দেয়া না যায়
var subFlag = false; //একসাথে একটার বেশি মাইনাস সাইন দেয়া না যায়
var multiplyFlag = false; //একসাথে একটার বেশি গুণ সাইন দেয়া না যায়
var divFlag = false; //একসাথে একটার বেশি প্লাস ভাগ দেয়া না যায়
var percentageFlag = false; //
var operatorFlag = false; //সর্বশেষ পেসকৃত বাটনটি কোন অপারেটর ছিল না নাম্বার ছিল তা জানার জন্য কিনা
var operatorFlag2 = false; //একের অধিক অপারেশন এর জন্য প্রিভিয়াস অপারেটর ক্যালকুলেট করার জন্য 
var OF2Value = ''; //সর্বশেষ অপারেশন এর সাইন জানার জন্য
var check = false; //অপারেটর এর মাধ্যমে একের অধিক ক্যালকুলেট করার জন্য
var check2 = false; //অপারেটর এর মাধ্যমে ক্যালকুলেট করার পর রেজাল্ট শোতে একাধিক ডিজিট ব্যভার এর জন্য
var calculation = 0; //ক্যালকুলেট করার জন্য ভ্যরিয়েবল
var count = 0;
var sqrtFlag = false;

/* Operation */
function Addition(){
    var existNum = document.querySelector('#result').value;
    var existNum2 = document.querySelector('#result2').value;
    
        if(addFlag == false){
            if(operatorFlag == false){
                if(operatorFlag2 == true){
                    if(check == true){
                        if(percentageFlag == true){
                            calculation = calculation;
                            document.querySelector('#result').value = calculation;
                            document.querySelector('#result2').value = existNum2 + '+';
                        }
                        else if(sqrtFlag == true){
                            calculation = calculation;
                            document.querySelector('#result').value = calculation;
                            document.querySelector('#result2').value = existNum2 + '+';
                        }
                        else{
                            calculation = eval(calculation + OF2Value + existNum)
                            document.querySelector('#result').value = calculation;
                            document.querySelector('#result2').value = existNum2 + existNum + '+';
                        }
                    }
                    else{
                        if(percentageFlag == true){
                            calculation = calculation;
                            document.querySelector('#result').value = calculation;
                            document.querySelector('#result2').value = existNum2 + '+';
                        }
                        else if(sqrtFlag == true){
                            calculation = calculation
                            document.querySelector('#result').value = calculation;
                            document.querySelector('#result2').value = existNum2 + '+';
                        }
                        else{
                            calculation = eval(existNum2 + existNum);
                            document.querySelector('#result').value = calculation;
                            document.querySelector('#result2').value = existNum2 + existNum + '+';
                        }
                    }
                    check = true;
                    check2 = true;
                }
                else{
                    document.querySelector('#result2').value = existNum + '+';
                    document.querySelector('#result').value = '0';
                }
            }
            else{
                document.querySelector('#result2').value = existNum2.slice(0,-1) + '+';
            }
            pointflag = false;
            addFlag = true;
            subFlag = false;
            multiplyFlag = false;
            divFlag = false;
            modulusFlag = false;
            operatorFlag = true;
            operatorFlag2 = true;
            OF2Value = '+';
            percentageFlag = false;
            sqrtFlag = false;
            count++;
        }
    
}

function Subtraction(){
    var existNum = document.querySelector('#result').value;
    var existNum2 = document.querySelector('#result2').value;

        if(subFlag == false){
            if(operatorFlag == false){
                if(operatorFlag2 == true){
                    if(check == true){
                        if(percentageFlag == true){
                            calculation = calculation;
                            document.querySelector('#result').value = calculation;
                            document.querySelector('#result2').value = existNum2 + '-';
                        }
                        else if(sqrtFlag == true){
                            calculation = calculation;
                            document.querySelector('#result').value = calculation;
                            document.querySelector('#result2').value = existNum2 + '-';
                        }
                        else{
                            calculation = eval(calculation+OF2Value+existNum)
                            document.querySelector('#result').value = calculation;
                            document.querySelector('#result2').value = existNum2 + existNum + '-';
                        }
                    }
                    else{
                        if(percentageFlag == true){
                            calculation = calculation;
                            document.querySelector('#result').value = calculation;
                            document.querySelector('#result2').value = existNum2 + '-';
                        }
                        else if(sqrtFlag == true){
                            calculation = calculation;
                            document.querySelector('#result').value = calculation;
                            document.querySelector('#result2').value = existNum2 + '-';
                        }
                        else{
                            calculation = eval(existNum2 + existNum);
                            document.querySelector('#result').value = calculation;
                            document.querySelector('#result2').value = existNum2 + existNum + '-';
                        }
                    }
                    check = true;
                    check2 = true;
                }
                else{
                    document.querySelector('#result2').value = existNum + '-';
                    document.querySelector('#result').value = '0';
                }
            }
            else{
                document.querySelector('#result2').value = existNum2.slice(0,-1) + '-';
            }
            pointflag = false;
            subFlag = true;
            addFlag = false
            multiplyFlag = false;
            divFlag = false;
            modulusFlag = false;
            operatorFlag = true;
            operatorFlag2 = true;
            OF2Value = '-';
            percentageFlag = false;
            sqrtFlag = false;
            count++;
        }
    
}

function Multiplication(){
    var existNum = document.querySelector('#result').value;
    var existNum2 = document.querySelector('#result2').value;
    
        if(multiplyFlag == false){
            if(operatorFlag == false){
                if(operatorFlag2 == true){
                    if(check == true){
                        if(percentageFlag == true){
                            calculation = calculation;
                            document.querySelector('#result').value = calculation;
                            document.querySelector('#result2').value = existNum2 + '*';
                        }
                        else if(sqrtFlag == true){
                            calculation = calculation;
                            document.querySelector('#result').value = calculation;
                            document.querySelector('#result2').value = existNum2 + '*';
                        }
                        else{
                            calculation = eval(calculation+OF2Value+existNum)
                            document.querySelector('#result').value = calculation;
                            document.querySelector('#result2').value = existNum2 + existNum + '*';
                        }
                    }
                    else{
                        if(percentageFlag == true){
                            calculation = calculation;
                            document.querySelector('#result').value = calculation;
                            document.querySelector('#result2').value = existNum2 + '*';
                        }
                        else if(sqrtFlag == true){
                            calculation = calculation;
                            document.querySelector('#result').value = calculation;
                            document.querySelector('#result2').value = existNum2 + '*';
                        }
                        else{
                            calculation = eval(existNum2 + existNum);
                            document.querySelector('#result').value = calculation;
                            document.querySelector('#result2').value = existNum2 + existNum + '*';
                        }
                    }
                    check = true;
                    check2 = true;
                }
                else{
                    document.querySelector('#result2').value = existNum + '*';
                    document.querySelector('#result').value = '0';
                }
            }
            else{
                document.querySelector('#result2').value = existNum2.slice(0,-1) + '*';
            }
            pointflag = false;
            multiplyFlag = true;
            addFlag = false;
            subFlag = false;
            divFlag = false;
            modulusFlag = false;
            operatorFlag = true;
            operatorFlag2 = true;
            OF2Value = '*'
            percentageFlag = false;
            sqrtFlag = false;
            count++;
        }
    
}

function Division(){
    var existNum = document.querySelector('#result').value;
    var existNum2 = document.querySelector('#result2').value;
    
        if(divFlag == false){
            if(operatorFlag == false){
                if(operatorFlag2 == true){
                    if(check == true){
                        if(percentageFlag == true){
                            calculation = calculation;
                            document.querySelector('#result').value = calculation;
                            document.querySelector('#result2').value = existNum2 + '/';
                        }
                        else if(sqrtFlag == true){
                            calculation = calculation;
                            document.querySelector('#result').value = calculation;
                            document.querySelector('#result2').value = existNum2 + '/';
                        }
                        else{
                            calculation = eval(calculation+OF2Value+existNum)
                            document.querySelector('#result').value = calculation;
                            document.querySelector('#result2').value = existNum2 + existNum + '/';
                        }
                    }
                    else{
                        if(percentageFlag == true){
                            calculation = calculation;
                            document.querySelector('#result').value = calculation;
                            document.querySelector('#result2').value = existNum2 + '/';
                        }
                        else if(sqrtFlag == true){
                            calculation = calculation;
                            document.querySelector('#result').value = calculation;
                            document.querySelector('#result2').value = existNum2 + '/';
                        }
                        else{
                            calculation = eval(existNum2 + existNum);
                            document.querySelector('#result').value = calculation;
                            document.querySelector('#result2').value = existNum2 + existNum + '/';
                        }
                    }
                    check = true;
                    check2 = true;
                }
                else{
                    document.querySelector('#result2').value = existNum + '/';
                    document.querySelector('#result').value = '0';
                }
            }
            else{
                document.querySelector('#result2').value = existNum2.slice(0,-1) + '/';
            }
            pointflag = false;
            divFlag = true;
            addFlag = false;
            subFlag = false;
            multiplyFlag = false;
            modulusFlag = false;
            operatorFlag = true;
            operatorFlag2 = true;
            OF2Value = '/';
            percentageFlag = false;
            sqrtFlag = false;
            count++;
        }
    
}

function Percentage(){
    var existNum = document.querySelector('#result').value;
    var existNum2 = document.querySelector('#result2').value;

    if(operatorFlag2 == true){
        if(percentageFlag == false){
            var fraction = eval(existNum/100);
            var input = eval(existNum2.slice(0,-1));

            if(OF2Value == '+'){
                calculation = eval(existNum2 + (input * fraction));
                document.querySelector('#result').value = (input * fraction);
                document.querySelector('#result2').value = existNum2 + '(' + existNum + ')%';
                percentageFlag = true;
            }
            else if(OF2Value == '-'){
                calculation = eval(existNum2 + (input * fraction));
                document.querySelector('#result').value = (input * fraction);
                document.querySelector('#result2').value = existNum2 + '(' + existNum + ')%';
                percentageFlag = true;
            }
            else if(OF2Value == '*'){
                calculation = (input * fraction);
                document.querySelector('#result').value = fraction;
                document.querySelector('#result2').value = existNum2 + '(' + existNum + ')%';
                percentageFlag = true;
            }
            else if(OF2Value == '/'){
                calculation = eval(existNum2 + fraction);
                document.querySelector('#result').value = fraction;
                document.querySelector('#result2').value = existNum2 + '(' + existNum + ')%';
                percentageFlag = true;
            }
        }
    }
    sqrtFlag = false;
}

function Squareroot(){
    var existNum = document.querySelector('#result').value;
    var existNum2 = document.querySelector('#result2').value;

    if(operatorFlag2 == true){
        sqrtCal = Math.sqrt(existNum);
        calculation = calculation + sqrtCal;
        document.querySelector('#result2').value = existNum2 + '√(' + existNum +')';
        document.querySelector('#result').value = calculation;
    }
    else{
        calculation = Math.sqrt(existNum);
        document.querySelector('#result2').value = '√(' + existNum +')';
        document.querySelector('#result').value = calculation;
    }
    sqrtFlag = true;
    percentageFlag = false;
}

function Cuberoot(){
    var existNum = document.querySelector('#result').value;
    var existNum2 = document.querySelector('#result2').value;

    if(operatorFlag2 == true){
        sqrtCal = Math.cbrt(existNum);
        calculation = calculation + sqrtCal;
        document.querySelector('#result2').value = existNum2 + '∛(' + existNum +')';
        document.querySelector('#result').value = calculation;
    }
    else{
        calculation = Math.cbrt(existNum);
        document.querySelector('#result2').value = '∛(' + existNum +')';
        document.querySelector('#result').value = calculation;
    }
    sqrtFlag = true;
    percentageFlag = false;
}

function Square(){
    var existNum = document.querySelector('#result').value;
    var existNum2 = document.querySelector('#result2').value;

    if(operatorFlag2 == true){
        sqrtCal = Math.pow(existNum,2);
        calculation = calculation + sqrtCal;
        document.querySelector('#result2').value = existNum2 + 'sqr(' + existNum +')';
        document.querySelector('#result').value = calculation;
    }
    else{
        calculation = Math.pow(existNum,2);
        document.querySelector('#result2').value = 'sqr(' + existNum +')';
        document.querySelector('#result').value = calculation;
    }
    sqrtFlag = true;
    percentageFlag = false;
}

function Cube(){
    var existNum = document.querySelector('#result').value;
    var existNum2 = document.querySelector('#result2').value;

    if(operatorFlag2 == true){
        sqrtCal = Math.pow(existNum,3);
        calculation = calculation + sqrtCal;
        document.querySelector('#result2').value = existNum2 + 'cube(' + existNum +')';
        document.querySelector('#result').value = calculation;
    }
    else{
        calculation = Math.pow(existNum,3);
        document.querySelector('#result2').value = 'cube(' + existNum +')';
        document.querySelector('#result').value = calculation;
    }
    sqrtFlag = true;
    percentageFlag = false;
}

function OneBy(){
    var existNum = document.querySelector('#result').value;
    var existNum2 = document.querySelector('#result2').value;

    if(operatorFlag2 == true){
        sqrtCal = eval(1/existNum);
        calculation = calculation + sqrtCal;
        document.querySelector('#result2').value = existNum2 + '1/(' + existNum +')';
        document.querySelector('#result').value = calculation;
    }
    else{
        calculation = eval(1/existNum);
        document.querySelector('#result2').value = '1/(' + existNum +')';
        document.querySelector('#result').value = calculation;
    }
    sqrtFlag = true;
    percentageFlag = false;
}

/*Insert Digit*/

//document.querySelector("#id").addEventListener("click",function(){})

function Zero(){
    var existNum = document.querySelector('#result').value;
    if(existNum == '0'){ existNum = '' }
    else{
        var text = document.querySelector("#d0").value;
        document.querySelector("#result").value = existNum + text;
        addFlag = false;
        subFlag = false;
        multiplyFlag = false;
        divFlag = false;
        modulusFlag = false;
        operatorFlag = false;
    }
}

function One(){
    var existNum = document.querySelector('#result').value;
    if(existNum == '0' || check2 == true){ existNum = '' }
        var text = document.querySelector("#d1").value;
        document.querySelector("#result").value = existNum + text;
        addFlag = false;
        subFlag = false;
        multiplyFlag = false;
        divFlag = false;
        modulusFlag = false;
        operatorFlag = false;
        check2 =false;
}

function Two(){
    var existNum = document.querySelector('#result').value;
    if(existNum == '0' || check2 == true){ existNum = '' }
    var text = document.querySelector("#d2").value;
    document.querySelector("#result").value = existNum + text;
    addFlag = false;
    subFlag = false;
    multiplyFlag = false;
    divFlag = false;
    modulusFlag = false;
    operatorFlag = false
    check2 =false;;
}

function Three(){
    var existNum = document.querySelector('#result').value;
    if(existNum == '0' || check2 == true){ existNum = '' }
    var text = document.querySelector("#d3").value;
    document.querySelector("#result").value = existNum + text;
    addFlag = false;
    subFlag = false;
    multiplyFlag = false;
    divFlag = false;
    modulusFlag = false;
    operatorFlag = false;
    check2 =false;
}

function Four(){
    var existNum = document.querySelector('#result').value;
    if(existNum == '0' || check2 == true){ existNum = '' }
    var text = document.querySelector("#d4").value;
    document.querySelector("#result").value = existNum + text;
    addFlag = false;
    subFlag = false;
    multiplyFlag = false;
    divFlag = false;
    modulusFlag = false;
    operatorFlag = false;
    check2 =false;
}

function Five(){
    var existNum = document.querySelector('#result').value;
    if(existNum == '0' || check2 == true){ existNum = '' }
    var text = document.querySelector("#d5").value;
    document.querySelector("#result").value = existNum + text;
    addFlag = false;
    subFlag = false;
    multiplyFlag = false;
    divFlag = false;
    modulusFlag = false;
    operatorFlag = false;
    check2 = false;
}

function Six(){
    var existNum = document.querySelector('#result').value;
    if(existNum == '0' || check2 == true){ existNum = '' }
    var text = document.querySelector("#d6").value;
    document.querySelector("#result").value = existNum + text;
    addFlag = false;
    subFlag = false;
    multiplyFlag = false;
    divFlag = false;
    modulusFlag = false;
    operatorFlag = false;
    check2 =false;
}

function Seven(){
    var existNum = document.querySelector('#result').value;
    if(existNum == '0' || check2 == true){ existNum = '' }
    var text = document.querySelector("#d7").value;
    document.querySelector("#result").value = existNum + text;
    addFlag = false;
    subFlag = false;
    multiplyFlag = false;
    divFlag = false;
    modulusFlag = false;
    operatorFlag = false;
    check2 =false;
}

function Eight(){
    var existNum = document.querySelector('#result').value;
    if(existNum == '0' || check2 == true){ existNum = '' }
    var text = document.querySelector("#d8").value;
    document.querySelector("#result").value = existNum + text;
    addFlag = false;
    subFlag = false;
    multiplyFlag = false;
    divFlag = false;
    modulusFlag = false;
    operatorFlag = false;
    check2 =false;
}

function Nine(){
    var existNum = document.querySelector('#result').value;
    if(existNum == '0' || check2 == true){ existNum = '' }
    var text = document.querySelector("#d9").value;
    document.querySelector("#result").value = existNum + text;
    addFlag = false;
    subFlag = false;
    multiplyFlag = false;
    divFlag = false;
    modulusFlag = false;
    operatorFlag = false;
    check2 =false;
}

function Point(){
    var existNum = document.querySelector('#result').value;
    if(pointflag == true) {  }
    if(pointflag == false) {
        pointflag = true
        var text = document.querySelector("#point").value;
        document.querySelector("#result").value = existNum + text;
    }
    
}

/*Clear Function*/
function Clear(){
    document.querySelector("#result").value = '0';
    document.querySelector("#result2").value = '';
    addFlag = false;
    subFlag = false;
    multiplyFlag = false;
    divFlag = false;
    pointflag = false;
    modulusFlag = false;
    operatorFlag = false;
    operatorFlag2 = false;
    check=false;
    calculation = 0;
    count = 0;
}

/*Delete Function*/
function Delete(){
    var presentValue = document.querySelector('#result').value;
    if(presentValue != ''){
        if(presentValue.length == 1){
            document.querySelector('#result').value = document.querySelector("#result").value.slice(0,-1) + '0';
        }
        else{
            document.querySelector('#result').value = document.querySelector("#result").value.slice(0,-1);
        }
    }
}

/*Negation*/
function Negation(){
    document.querySelector("#result").value = document.querySelector("#result").value * (-1);
}

/*Calculation*/
function Calculate(){
    var existNum = document.querySelector('#result').value;
    var existNum2 = document.querySelector('#result2').value;
    if(count>1){
        if(percentageFlag == true){
            calculation = calculation;
        }
        else if(sqrtFlag == true){
            calculation = calculation
        }
        else{
            calculation = eval(calculation + OF2Value + existNum);
        }
    }
    else{
        if(percentageFlag == true){
            calculation = calculation;
        }
        else if(sqrtFlag == true){
            calculation = calculation;
        }
        else{
            calculation = eval(existNum2 + existNum);
        }
    }

    document.querySelector('#result').value = calculation;
    document.querySelector('#result2').value ='';

    addFlag = false;
    subFlag = false;
    multiplyFlag = false;
    divFlag = false;
    pointflag = false;
    modulusFlag = false;
    operatorFlag = false;
    operatorFlag2 = false;
    check = false;
    check2 = false
    percentageFlag = false;
    sqrtFlag = false;
    count = 0;
}

document.addEventListener("keypress",function(event){
    var digits = event.key;
    KeyPress(digits);
})

function KeyPress(digits){
    switch(digits){
        case "1":
            One();
            break;

        case "2":
            Two();
            break;

        case "3":
            Three();
            break;

        case "4":
            Four();
            break;
                
        case "5":
            Five();
            break;
    
        case "6":
            Six();
            break;

        case "7":
            Seven();
            break;
                
        case "8":
            Eight();
            break;
    
        case "9":
            Nine();
            break;
        
        case "0":
            Zero();
            break;
        
        case "+":
            Addition();
            break;
        
        case "-":
            Subtraction();
            break;

        case "*":
            Multiplication();
            break;
            
        case "/":
            Division();
            break;

        case "=":
            Calculate();
            break;

        case ".":
            Point();
            break;

        case "C":
            Clear();
            break;

        case "c":
            Clear();
            break;
    
        case "D":
            Delete();
            break;

        case "d":
            Delete();
            break;
    }
}