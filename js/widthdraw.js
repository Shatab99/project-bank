document.getElementById('btn-widthdraw').addEventListener('click', function () {
    const widthdrawfield = document.getElementById('widthdraw-field');
    const widthdraw = widthdrawfield.value;
    const widthdrawtotal = document.getElementById('widthdraw-total');
    const prewidthdraw = widthdrawtotal.innerText;
    const currentwidthdraw = parseFloat(prewidthdraw) + parseFloat(widthdraw);
    widthdrawtotal.innerText = currentwidthdraw;

    const balancefield = document.getElementById('Balence-field');
    const balance = balancefield.innerText;
    const newbalance = parseFloat(balance) - parseFloat(currentwidthdraw)
    balancefield.innerText = newbalance;
    //    clear amount 
    widthdrawfield.value = ' ';
})