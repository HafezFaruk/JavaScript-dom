document.getElementById('deposit-button').addEventListener('click', function () {
    const depositInput = document.getElementById('deposit-input');
    const newDepositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText);
     // update deposit total
    const depositTotal = document.getElementById('deposit-total');
    const previousdepositText = depositTotal.innerText;
    const previouseDpositAmount = parseFloat(previousdepositText);
    const newDepositTotal = previouseDpositAmount + newDepositAmount;
    depositTotal.innerText = newDepositTotal;
    // update account balance 
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;

    depositInput.value = '';
})

