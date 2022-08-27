let input1 = document.getElementById("inp1");
let input2 = document.getElementById("inp2");
let input3 = document.getElementById("inp3");
let input4 = document.getElementById("inp4");
let error = document.getElementById("error");
let span1 = document.getElementById("span1");
let span2 = document.getElementById("span2");
let span0 = document.getElementById("span0");
let span00 = document.getElementById("span00");

function getSum() {
  if (input1.value && input2.value && input3.value && input4.value) {
    let sum =
      parseFloat(input1.value) +
      parseFloat(input2.value) +
      parseFloat(input3.value) +
      parseFloat(input4.value);
    error.style.display = "none";
    return sum;
  } else {
    error.style.display = "block";
  }
}
function sum1(x) {
  if (
    input1.value !== "" ||
    input1.value !== null ||
    input2.value !== "" ||
    input2.value !== null ||
    input3.value !== "" ||
    input3.value !== null ||
    input4.value !== "" ||
    input4.value !== null
  ) {
    let sum = getSum() * 0.3;
    if (!isNaN(sum)) {
      span00.innerHTML = "Brex Card";
      span0.innerHTML = `${sum}$`;
      sum4();
      sum5();
    }
  }
}
function sum2(x) {
  if (
    input1.value !== "" ||
    input1.value !== null ||
    input2.value !== "" ||
    input2.value !== null ||
    input3.value !== "" ||
    input3.value !== null ||
    input4.value !== "" ||
    input4.value !== null
  ) {
    let sum = getSum() * 2.9;
    if (!isNaN(sum)) {
      span00.innerHTML = "Stripe Card";
      span0.innerHTML = `${sum}$`;
      sum4();
      sum5();
    }
  }
}
function sum3(x) {
  if (
    input1.value !== "" ||
    input1.value !== null ||
    input2.value !== "" ||
    input2.value !== null ||
    input3.value !== "" ||
    input3.value !== null ||
    input4.value !== "" ||
    input4.value !== null
  ) {
    let sum = getSum() * 1.3;
    if (!isNaN(sum)) {
      span00.innerHTML = "Amex Card";
      span0.innerHTML = `${sum}$`;
      sum4();
      sum5();
    }
  }
}

function sum4() {
  let sum = getSum() * 1.1;
  console.log(sum);
  span1.innerText = `${sum}$`;
}

function sum5() {
  let sum = getSum() * 1.2;
  span2.innerText = `${sum}$`;
}

function clear1(x) {
  input1.value = "";
  input2.value = "";
  input3.value = "";
  input4.value = "";
  span00.innerHTML = "";
  span0.innerHTML = "";
  span1.innerText = `0$`;
  span2.innerText = `0$`;
}
