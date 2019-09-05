// local storage 

localStorage.setItem('name','makara');
localStorage.setItem('password','123');
localStorage.setItem('email','makara.deu@gmail.cm');

// console.warn(localStorage.getItem('email'));
// localStorage.removeItem('name');
// console.log(localStorage.length);

// session 

// sessionStorage.setItem('names','Makara');
// sessionStorage.setItem('password','123');
// console.log(sessionStorage.getItem('names'));

// cookies

// document.cookie = "firsname = Makara";

// condition of login

const login = () =>{
    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;
    const localUser = localStorage.getItem('name');
    const localPass = localStorage.getItem('password');
    if(username == localUser && password == localPass){
        // $.notify("Login success!", "success");
        swal("Good job!", "You clicked the button!", "success");
    }else{
        // $.notify("Login fail!" , "error");
        swal("Error!", "You clicked the button!", "error");
    }
}
const bntLogin = document.querySelector('#submit');
bntLogin.addEventListener('click', login);