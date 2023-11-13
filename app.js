//password holder array
// const passwordHolderArray = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
//         'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
//         '0','1','2','3','4','5','6','7','8','9', '`','!','#','$','%','&','*','-','/','?'
// ]

// string holder
let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
'abcdefghijklmnopqrstuvwxyz0123456789@#$%&*-?!'; 

const generateBtn = document.querySelector('.generate');
const copyBtn = document.querySelector('.copy');
const showPassword = document.querySelector('.password-holder')


generateBtn.addEventListener('click', function(){

    // using array value to generate password

    //let holder = []
    // for(let i=0; i<=10; i++){
    //     let randomNum = Math.floor( Math.random() * passwordHolderArray.length)
    //     holder.push(passwordHolderArray[randomNum]);
        
    // }
    // showPassword.value = holder.join('');


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