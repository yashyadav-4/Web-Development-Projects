
AOS.init({ offset:200, duration:1200 });

const loginForm=document.querySelector('#loginForm');
const registerForm=document.querySelector('#registerForm');

//login form
if(loginForm){
  loginForm.addEventListener('submit',e=>{
    e.preventDefault();
    const email=document.querySelector('#loginEmail').value.trim();
    const password=document.querySelector('#loginPassword').value.trim();

    if(email===""||password===""){
      alert("Please fill in all fields.");
      return;
    }

    const savedUser=JSON.parse(localStorage.getItem('userData'));

    if(savedUser && savedUser.email===email && savedUser.password===password){
      alert(`Welcome back, ${savedUser.name}!`);
      window.location.href="index.html";
    } else {
      alert("Invalid credentials. Please register first or check your details.");
    }
  });
}

//registration form
if(registerForm){
  registerForm.addEventListener('submit',e=>{
    e.preventDefault();
    const name=document.querySelector('#registerName').value.trim();
    const email=document.querySelector('#registerEmail').value.trim();
    const password=document.querySelector('#registerPassword').value.trim();

    if(name===""||email===""||password===""){
      alert("Please fill in all fields.");
      return;
    }

    const userData={name,email,password};
    localStorage.setItem('userData',JSON.stringify(userData));

    alert(`Account created successfully, ${name}! You can now log in.`);
    registerForm.reset();
    window.location.href="login.html";
  });
}
