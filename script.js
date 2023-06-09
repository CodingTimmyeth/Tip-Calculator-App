const preBill = document.getElementById('pre-bill');
const numberOfPeople = document.getElementById('number-of-people');
const buttons = document.querySelectorAll('.tip-grid>button');
const customTip = document.getElementById('custom')
const getBill = document.getElementById('get-bill')

// Error Messages
const errMsg = document.getElementById('error-msg1')
const errMsg2 = document.getElementById('error-msg2')
const errMsg3 = document.getElementById('error-msg3')

// Display Total
const totalTipAmount = document.getElementById('tip-price')
const totalBill = document.getElementById('price')

let validPreBill = null;
let validNumOfPeople = null;
let validBtn = null;

// First Step - Error Handling
// Checks if inputs have a valid numbers and greater than 0
function validInputs(input, errorMsg) {
    // Check if inputs are not empty and are more than 0
    if (input.value === '') {
        input.style.borderColor = 'red'
        errorMsg.innerText = "Cannot Be Blank"
        return null
    } else if (input.value <= 0) {
        input.style.borderColor = 'red'
        errorMsg.innerText = "Please Enter a Value Greater than 0"
        return null
    } else {
        input.style.borderColor = 'transparent'
        errorMsg.innerText = ''

        return Number(input.value)
    }

}
// Dislays the error messages and sets the variables to the user's input
preBill.addEventListener('input', () => {
    validPreBill = validInputs(preBill, errMsg);
});
numberOfPeople.addEventListener('input', () => {
    validNumOfPeople = validInputs(numberOfPeople, errMsg3);
});
customTip.addEventListener('input', () => {
    validBtn = Number(validInputs(customTip, errMsg2)) / 100;
});


// Second Step - Error Handling for Buttons
if (customTip.value === '') {
    const select = buttons.forEach((button) => {
        button.addEventListener('click', () => {
            validBtn = Number(button.value) / 100
            customTip.value = '';
            buttons.forEach((btn) => {
                btn.classList.remove('active')
            })
            button.classList.add('active')
        })
    })
}

getBill.addEventListener('click', () => {
    validInputs(preBill, errMsg)
    validInputs(numberOfPeople, errMsg3)



    console.log("Valid preBill:", validPreBill);
    console.log("Valid numOfPeople:", validNumOfPeople);
    console.log("Valid button selection:", validBtn);

    // Calculations 
    // Tip Amount Per Person
    const preTipAmount = validPreBill * validBtn
    const tipAmountPerPerson = preTipAmount / validNumOfPeople
    const roundedByHundreds = tipAmountPerPerson.toString().slice(0, 4)
    const convertBackToNumber = Number(roundedByHundreds)

    totalTipAmount.innerText = `$${convertBackToNumber}`

    //  Total Per Person
    const firstStep = convertBackToNumber * validNumOfPeople
    const secondStep = validPreBill + firstStep
    const thirdStep = secondStep / validNumOfPeople
    const roundedByHundred = thirdStep.toString().slice(0, 4)

    const convesion = Number(roundedByHundred)

    totalBill.textContent = `$${convesion}`

});



// getBill.addEventListener('click', () => {

//     const preBillNumber = Number(preBill.value)
//     const numberOfPeopleNum = Number(numberOfPeople.value)

//     // console.log(errorHandling());
//     const errorCheck = errorHandling()

//     const tipAmount = calculateTipTotal(errorCheck, preBillNumber, numberOfPeopleNum, selectedTip)
//     calculateTotalAmount(tipAmount, preBillNumber, numberOfPeopleNum)
// })

// function calculateTipTotal(valid, preBill, numberOfPeople, tipAmount) {
//     if (valid) {
//         const preTipAmount = preBill * tipAmount
//         const tipAmountPerPerson = preTipAmount / numberOfPeople
//         const roundedByHundreds = tipAmountPerPerson.toString().slice(0, 4)
//         const convertBackToNumber = Number(roundedByHundreds)

//         totalTipAmount.textContent = `$${convertBackToNumber}`

//         return convertBackToNumber
//     }
// }

// function calculateTotalAmount(cb, preBill, numberOfPeople) {

//     const firstStep = cb * numberOfPeople
//     const secondStep = preBill + firstStep
//     const thirdStep = secondStep / numberOfPeople
//     const roundedByHundreds = thirdStep.toString().slice(0, 4)

//     const convesion = Number(roundedByHundreds)

//     totalBill.textContent = `$${convesion}`
// }