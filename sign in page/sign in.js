function signIn() {
    window.location.href = "../Home/home.html"
  /* let emailInput = document.querySelector('.js-input-email')
  let passwordInput = document.querySelector('.js-input-password')
    if (emailInput.value === 'harvey@gmail.com' && passwordInput.value === 'harvey'){
      window.location.href = '../Home/home.html';
      document.querySelector('.invalid-email-text').innerHTML=''
      document.querySelector('.invalid-password-text').innerHTML=''
    }else{
      emailInput.value = ''
      passwordInput.value = ''
      document.querySelector('.invalid-email-text').innerHTML='Invalid Email'
      document.querySelector('.invalid-password-text').innerHTML='Invalid Password'
      setTimeout(()=>{
        document.querySelector('.invalid-email-text').innerHTML=''
          document.querySelector('.invalid-password-text').innerHTML=''
      },600)
    }*/
}
function onEnter(event){
    window.location.href = "../Home/home.html"
}