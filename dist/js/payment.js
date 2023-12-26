//============================================================WALLET-PAYMENT-START
const wPayment1 = document.querySelector('#wallet-payment-1');
const wPayment2 = document.querySelector('#wallet-payment-2');
const wPayment3 = document.querySelector('#wallet-payment-3');
const wPayment4 = document.querySelector('#wallet-payment-4');

const wCheckbox1 = document.querySelector('#wallet-checkbox-1');
const wCheckbox2 = document.querySelector('#wallet-checkbox-2');
const wCheckbox3 = document.querySelector('#wallet-checkbox-3');
const wCheckbox4 = document.querySelector('#wallet-checkbox-4');

wCheckbox1.addEventListener('change', () => {
  if (wCheckbox1.checked) {
    wPayment1.style.display = "flex";
  } else {
    wPayment1.style.display = "none";
  }
})

wCheckbox2.addEventListener('change', () => {
  if (wCheckbox2.checked) {
    wPayment2.style.display = "flex";
  } else {
    wPayment2.style.display = "none";
  }
})

wCheckbox3.addEventListener('change', () => {
  if (wCheckbox3.checked) {
    wPayment3.style.display = "flex";
  } else {
    wPayment3.style.display = "none";
  }
})

wCheckbox4.addEventListener('change', () => {
  if (wCheckbox4.checked) {
    wPayment4.style.display = "flex";
  } else {
    wPayment4.style.display = "none";
  }
})
//============================================================WALLET-PAYMENT-END