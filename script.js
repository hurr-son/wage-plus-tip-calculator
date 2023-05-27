(function () {
     const wageInput = document.getElementById("wageInput");
     const tipInput = document.getElementById("tipInput");
     const hoursInput = document.getElementById("hoursInput");
     const calcBtn = document.getElementById("calcBtn");
     const displayWage = document.querySelector(".display-wage");
     const displayTotalEarnings = document.querySelector(
       ".display-total-earnings"
     );
     const displayTaxedEarnings = document.querySelector(".display-taxed-earnings");
     let realWage = "";
     let totalEarnings = "";
   
     const moneyFormatter = new Intl.NumberFormat("en-US", {
       style: "currency",
       currency: "USD",
     });
   
     function calculateRealWage(wage, tips, hours) {
       return (wage * hours + tips) / hours;
     }
   
     function calculateTotalEarnings(wage, tips, hours) {
       return wage * hours + tips;
     }

     function calculateTaxedEarnings(earnings, taxMultiplier) {
          return earnings * taxMultiplier
     }
   
     calcBtn.addEventListener("click", function () {
       let wage = parseFloat(wageInput.value);
       let tips = parseFloat(tipInput.value);
       let hours = parseFloat(hoursInput.value);
   
       if (Number.isNaN(wage) || Number.isNaN(tips) || Number.isNaN(hours)) {
         alert("Input must be a number value");
         return;
       } else {
         realWage = moneyFormatter.format(calculateRealWage(wage, tips, hours));
         totalEarnings = moneyFormatter.format(
           calculateTotalEarnings(wage, tips, hours)
         );
         taxedEarnings = moneyFormatter.format(calculateTaxedEarnings(calculateTotalEarnings(wage, tips, hours), 0.84))
         displayWage.innerHTML = `${realWage}/hr.`;
         displayTotalEarnings.innerHTML = `Total Earnings: ${totalEarnings}`;
         displayTaxedEarnings.innerHTML = `Take Home: ${taxedEarnings}`;
       }
     });
   })();