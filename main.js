let up = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let down = 'abcdefghijklmnopqrstuvwxyz';
let number =  '0123456789';
let char = '!@#$%^&*';

let generate = document.querySelector('button');
let password = document.querySelector('.password');
let copy = document.querySelector('.copy');

if(localStorage.password != null) {
    password.value=localStorage.password;
}

generate.addEventListener('click',function () {
    password.value='';
    for(let i=0;i<4;i++)
    {
        password.value += up[Math.floor(Math.random()*up.length)];
        password.value += down[Math.floor(Math.random()*down.length)];
        password.value += number[Math.floor(Math.random()*number.length)];
        password.value += char[Math.floor(Math.random()*char.length)];
    }
    localStorage.setItem('password',password.value);
});

copy.addEventListener('click',function () {
    password.select();
    document.execCommand("copy");
})