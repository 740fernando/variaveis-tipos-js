console.log("solução 1")
function verificaPalindromo(string){
    return (!string) 
        ? "string inexistente"
        : string.split("").reverse().join("")===string;
}
console.log(verificaPalindromo(""));
console.log(verificaPalindromo("ama"));
console.log(verificaPalindromo("gato"));

console.log("")
console.log("solução 2")
function verificaPalindromo2(string){
    if(!string) return "string inexistente";

    for(let i= 0; i< string.length/2 ; i++){
        if(string[i] !== string[string.length-1-i]){
            return false;
        }
    }
    return true;
}

console.log(verificaPalindromo2("abba"));
console.log(verificaPalindromo2("gato"));