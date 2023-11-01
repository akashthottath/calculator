// display
function display(num){
    inputbox.value+=num;          // id.values=to get value
}

// clear =Ac

function clearAll(){
    inputbox.value=''
}

function evaluateExp(){
    // method1
    // exp=output.value   exp=7+7
    // result=eval(exp)   result=14
    inputbox.value=eval(inputbox.value)
}

// remove last
function removeLast(){
    currentExp=inputbox.value
    inputbox.value=currentExp.slice(0,-1)
}