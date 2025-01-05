// This function is to show the dropdowns when they click accont or mobile number
function toggleContent(contentId) {
  var content = document.getElementById(contentId);
  var buttons = document.getElementsByClassName("button");
  var contents = document.getElementsByClassName("content");
  
  for (var i = 0; i < contents.length; i++) {
    contents[i].classList.remove("show");
  }
  
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("active");
  }
  
  content.classList.add("show");
  var button = document.querySelector('button[data-id="' + contentId + '"]');
  button.classList.add("active");
}

// This function is for the password show and hide tool
const passwordInput = document.getElementById('password');
const togglePassword = document.getElementById('togglePassword');

togglePassword.addEventListener('click', ()=>{
if(passwordInput.type === 'password'){
  passwordInput.type = 'text';
  togglePassword.innerHTML = '<i class="far fa-eye"></i>';
}else{
  passwordInput.type = 'password';
  togglePassword.innerHTML = '<i class="far fa-eye-slash"></i>';
}
});