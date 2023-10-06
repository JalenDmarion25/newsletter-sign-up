const mainContainer = document.getElementById('flex_container');
const infoContain = document.getElementById('flex_info');
const imgContain = document.getElementById('flex_img');
const successContainer = document.getElementById('success_container');

const invalidEmail = document.getElementById('invalid_email');
const emailInput = document.getElementById('mail_addy');
const confirmedEmail = document.getElementById('confirmed_email');

const submitButton = document.getElementById('submit_btn');
const dismissButton = document.getElementById('dismiss_button');


function emailSuccess(){
    mainContainer.style.display = 'none';
}


function emailValidate(email){
    const emailCheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailCheck.test(email);
}

submitButton.addEventListener('click', (e) =>{
    e.preventDefault();
    const email = emailInput.value.trim();

    if(emailValidate(email)){
        emailSuccess();
        confirmedEmail.innerText = email;
        successContainer.style.display = 'block';

    }else{
        invalidEmail.style.display = 'block';
        emailInput.classList.add('active');
        console.log('working???')
    }
})

dismissButton.addEventListener('click', function(){
    location.reload(); 
});


