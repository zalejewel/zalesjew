const signupform = document.querySelector('#signupform');
signupform.addEventListener('submit', (e) => {
  e.preventDefault();

  //get user info
  const email = signupform.getAttribute['signup-email'].value;
  const email = signupform.getAttribute['signup-password'].value;

  AuthenticatorAssertionResponse.createUserswithEmailAndPassword(email, password).then(cred => {
    console.log(cred)
  })

});