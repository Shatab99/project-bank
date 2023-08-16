document.getElementById('btn-deposit').addEventListener('click', function(){
    // Get the deposit amounf
    const deposit = document.getElementById('deposit-field');
    const newdeposit= deposit.value;
    const deposittotal = document.getElementById('deposit-total');
    const predeposittotal= deposittotal.innerText;
    const currentdeposit = parseFloat(predeposittotal)+ parseFloat(newdeposit);
    deposittotal.innerText= currentdeposit;
    const balancefield = document.getElementById('Balence-field');
    const balance = balancefield.innerText;
    const newbalance = parseFloat(balance) + parseFloat(currentdeposit);
    balancefield.innerText= newbalance;
    
    // for clearing amount
    document.getElementById('deposit-field').value=' ';
})