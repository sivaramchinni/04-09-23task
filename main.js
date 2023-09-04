document.addEventListener("DOMContentLoaded",function(){
    const loginForm=document.getElementById("login-form");
    
    loginForm.addEventListener("submit",function(event){
        event.preventDefault();
        const enter_your_name=document.getElementById("name").value;
         const enter_your_email=document.getElementById("email").value; 
          const enter_your_password=document.getElementById("password").value;
        
        localStorage.setItem("name", enter_your_namename);  
        localStorage.setItem("email", enter_your_email);
        localStorage.setItem("password", enter_your_password);
        
        window.location.href ="index2.html";
});
    
});