const textBox = document.getElementById("password");
const len = 16;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = '0123456789'
const symbol = "!@#$%^&*()_+=-[]{}.,/";
const chars = upperCase + lowerCase + number + symbol;

function generatePassword(){
    let password = "";

    while(password.length<len){
        password += chars[Math.floor(Math.random() * chars.length)]
    }

    // password += upperCase[Math.floor(Math.random() * upperCase.length)]
    // password += lowerCase[Math.floor(Math.random() * lowerCase.length)]
    // password += number[Math.floor(Math.random * number.length)]
    // password += symbol[Math.floor(Math.random) * symbol.length]

    textBox.value = password;
    console.log("Password generated!");
}

function copyPassword(){
    textBox.select();
    navigator.clipboard.writeText(textBox.value);
    console.log("Password copied!");
}