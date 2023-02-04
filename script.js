(function () {
  const wageInput = document.getElementById("wageInput");
  const tipInput = document.getElementById("tipInput");
  const hoursInput = document.getElementById("hoursInput");
  const calcBtn = document.getElementById("calcBtn");
  const displayWage = document.querySelector(".display-wage");
  let realWage = "";

  const moneyFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  function calculateRealWage(wage, tips, hours) {
    return moneyFormatter.format((wage * hours + tips) / hours);
  }

  calcBtn.addEventListener("click", function () {
    let wage = parseFloat(wageInput.value);
    let tips = parseFloat(tipInput.value);
    let hours = parseFloat(hoursInput.value);
    wageInput.value = "";
    tipInput.value = "";
    hoursInput.value = "";

    if (Number.isNaN(wage) || Number.isNaN(tips) || Number.isNaN(hours)) {
      alert("Input must be a number value");
      return;
    } else {
      realWage = calculateRealWage(wage, tips, hours);
      displayWage.innerHTML = `${realWage}/hr.`;
    }
  });
})();
