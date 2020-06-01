let isValid = true;

// Sem ternario
function verify(isValid){
    if (isValid) {
        return true;
    } else {
        return false;
    }
}

console.log(verify(isValid));



//Com ternario
const result = isValid ? true : false;

let zero = 0;

//Def. Se variazel zero for maior que zero vou atribuir o 0 se não vou atribuir o -1*
const numeroResultado = zero > 0 ? 0 : -1;

console.log(numeroResultado);