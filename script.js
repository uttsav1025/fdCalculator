function calculateMaturityAmount(){
    const principal= parseFloat(document.getElementById('principalAmount').value)
    const interestRate= parseFloat(document.getElementById('interestRate').value)
    const tenure= parseFloat(document.getElementById('tenure').value)

    const maturityAmount= principal*(principal*interestRate*tenure*0.001)

    document.getElementById('result').innerText=`Maturity Amount: ${maturityAmount.toFixed(2)}`;
}

document.getElementById('calculateBtn').addEventListener('click',calculateMaturityAmount);