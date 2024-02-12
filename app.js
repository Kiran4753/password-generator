
// string holder
let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
'abcdefghijklmnopqrstuvwxyz0123456789@#$%&*-?!'; 

const generateBtn = document.querySelector('.generate');
const copyBtn = document.querySelector('.copy');
const showPassword = document.querySelector('.password-holder')


generateBtn.addEventListener('click', function(){
    // using string value to generate random password
    let pass = '';
    for (let i = 1; i <= 8; i++) {
        let char = Math.floor(Math.random()
            * str.length + 1);
 
        pass += str.charAt(char)
    }
    showPassword.value = pass
})

copyBtn.addEventListener('click', function(){
    showPassword.select();
    navigator.clipboard.writeText(showPassword.value)
})