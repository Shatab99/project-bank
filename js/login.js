document.getElementById('btn-submit').addEventListener('click', function(){
    const email = document.getElementById('email-field').value;
    const pass = document.getElementById('pass-field').value;
    if(email == 'shatab@gmail.com' && pass == '1999shatab'){
        window.location.href='bank.html';
    }
    else{
        document.write('<h1>404 Error . Not Found!!</h1>');
    }
})