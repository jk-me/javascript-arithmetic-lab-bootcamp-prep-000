function add(a,b){
  return parseInt(a)+parseInt(b)
}

function subtract(a,b){
  return parseInt(a)-parseInt(b)
}

function multiply(a,b){
  return parseInt(a)*parseInt(b)
}

function divide(a,b){
  return parseInt(a)/parseInt(b)
}

function inc(a){
  var x=parseInt(a)
  x++
  return x
}

function dec(a){
  var x=parseInt(a)
  x--
  return x
}

function makeInt(a){
  var x=a
  if (parseInt(x)===NaN){
    true;
  }
  else if((parseInt(x/10)===NaN)===false){
    return 0
  }
  else{
  return parseInt(x)
  }
}