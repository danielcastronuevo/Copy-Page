// - - - - - Desaparecer pantalla de carga y cargar el formulario - - - - -

const loadingScreen = document.querySelector(".loading_screen_container");
const mainContainer = document.querySelector(".main_container");
const footer = document.querySelector(".footer")

addEventListener("load", () => {
  setTimeout(() => {
    loadingScreen.style.display = `none`;
    mainContainer.style.display = `flex`;
    footer.style.display = `flex`;
  }, 2000);
});

// - - - - - - - - - - Animaciones de placeholder - - - - - - - - - -

const placeHolderMail = document.querySelector(".placeholder_mail");
const placeHolderPassword = document.querySelector(".placeholder_password");

const inputMail = document.querySelector(".input_mail");
const inputPassword = document.querySelector(".input_password");

placeHolderMail.addEventListener("click",()=>{
  inputMail.focus()
})

inputMail.addEventListener("keydown",()=>{
  setTimeout(() => {
    if (inputMail.value.length >= 1){
      inputMail.style.padding = '20px 8px 8px 8px'
      placeHolderMail.style.transform = 'translate(10px,4px)'
      placeHolderMail.style.scale = '0.8'
    }
    else{
      inputMail.style.padding = '14px 8px 14px 8px'
      placeHolderMail.style.transform = 'translate(11px,11px)'
      placeHolderMail.style.scale = '1'
    }
  }, 1);
})

placeHolderPassword.addEventListener("click",()=>{
  inputPassword.focus()
})

inputPassword.addEventListener("keydown",()=>{
  setTimeout(() => {
    if (inputPassword.value.length >= 1){
      inputPassword.style.padding = '20px 8px 8px 8px'
      inputPassword.style.borderRight = `none`
      inputPassword.style.borderRadius = `3px 0 0 3px`
      placeHolderPassword.style.transform = 'translate(10px,4px)'
      placeHolderPassword.style.scale = '0.8'
      showPasswordButton.style.display = `inline`
    }
    else{
      inputPassword.style.padding = '14px 8px 14px 8px'
      inputPassword.style.borderRight = `1px solid rgb(168,168,168)`
      inputPassword.style.borderRadius = `3px`
      placeHolderPassword.style.transform = 'translate(11px,11px)'
      placeHolderPassword.style.scale = '1'
      showPasswordButton.style.display = `none`
    }
  }, 1);
})

// - - - - - - - - - - Botón mostrar contraseña - - - - - - - - - -

const showPasswordButton = document.querySelector(".show_password_button");

showPasswordButton.addEventListener("click",(e)=>{
  e.preventDefault()
  if (showPasswordButton.innerHTML == 'Mostrar'){
    inputPassword.type = `text`
    showPasswordButton.innerHTML = 'Ocultar'
  }
  else{
    inputPassword.type = `password`
    showPasswordButton.innerHTML = 'Mostrar'
  }
})

// - - - - - - - - - - Botón Enviar - - - - - - - - - -

const botonEnviar = document.getElementById("form_submit")

botonEnviar.addEventListener("click",(e)=>{
  e.preventDefault()
})

// - - - - - - - - - - Botón Log in Facebook - - - - - - - - - -

const facebookLogInContainer = document.querySelector(".log_in_facebook_container")
const facebookIcon = document.querySelector(".facebook_icon")
const facebookText = document.querySelector(".facebook_text")

facebookLogInContainer.addEventListener("mousedown",()=>{
  facebookText.style.opacity = 0.7
  facebookIcon.style.opacity = 0.7
})

facebookLogInContainer.addEventListener("mouseup",()=>{
  facebookText.style.opacity = 1
  facebookIcon.style.opacity = 1
})

facebookLogInContainer.addEventListener("mouseout",()=>{
  facebookText.style.opacity = 1
  facebookIcon.style.opacity = 1
})

// - - - - - - - - - - Botón Olvidaste contraseña - - - - - - - - - -