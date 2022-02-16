// =====================  Banking events =========================


// handling deposit amoubt
document.getElementById('deposit-submit').addEventListener('click', function(){
    const ueserDepositInput = document.getElementById('deposit-field');
    const newDepositInputText = ueserDepositInput.value;
    const newDepositInputTotal = parseFloat(newDepositInputText);
    // checking the value
    if( newDepositInputTotal <= 0 || Number.isNaN(newDepositInputTotal) ){
        alert('Please Give a number greater than 0')
    }else{
        // adding amount 
        const oldDepositAmount = document.getElementById('deposit-amount');
        // oldDepositAmount.innerText = newDepositInputTotal; <-- assign মাত্র একবারুই করা যাবে
        // updating deposit amount
        const oldDepositText = oldDepositAmount.innerText;
        const oldDepositTotal = parseInt(oldDepositText);
        const newDepositAmount = oldDepositTotal + newDepositInputTotal;
        oldDepositAmount.innerText = newDepositAmount;

        // update account balance
        const oldBalance = document.getElementById('balance-total');
        const oldBalanceTotal = parseFloat(oldBalance.innerText);
        const totalUpdatedBalance = oldBalanceTotal + newDepositAmount;
        oldBalance.innerText = totalUpdatedBalance;
        console.log(typeof newDepositInputTotal)


        // cleaning the value
        ueserDepositInput.value = '';
        

    }
})


// handling withdraw amoubt
document.getElementById('withdraw-submit').addEventListener('click', function(){
    
    const withdrawInputField = document.getElementById('withdraw-field');
    const withdrawAmountTotal = parseFloat(withdrawInputField.value);
    
    if( withdrawAmountTotal <= 0 || Number.isNaN(withdrawAmountTotal) ){
    
            alert('Please Give a number greater than 0')        
    
    }else{


        // withdraw amount
        const withdrawAmountText = document.getElementById('withdraw-amount');
        // withdrawAmountText.innerText = withdrawAmountTotal;

        // updating amount
        const oldWithDrawAmount = parseFloat( withdrawAmountText.innerText);
        const newWithdrawAmount =  oldWithDrawAmount + withdrawAmountTotal; 
        withdrawAmountText.innerText = newWithdrawAmount;

        
        // update account balance
        const oldBalance = document.getElementById('balance-total');
        const oldBalanceTotal = parseFloat(oldBalance.innerText);
        const totalUpdatedBalance = oldBalanceTotal - newWithdrawAmount;
        oldBalance.innerText = totalUpdatedBalance;



        // cleaning the value
        withdrawInputField.value = '';


    }

})

