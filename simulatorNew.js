var tQ = document.getElementById("ticket-quantity"),
  tP = document.getElementById("ticket-price"),
  monthAmount = document.getElementById("Amount-Of-Months"),
  precentOnline = document.getElementById("Precent-Online"),
  feeCheckBox = document.getElementById("transactionFees"),
  explorer = document.querySelectorAll(".explorer"),
  pilot = document.querySelectorAll(".pilot"),
  astronaut = document.querySelectorAll(".astronaut"),
  precents = document.querySelectorAll(".precent"),
  t = (100 - precentOnline.value) / 100,
  a = tFeesCalc*0.027;
  eFees = {
    monthMonth: 49,
    monthYear: 39,
    onlineFee: 0.035,
    offlineFee: 0.39,
  },
  pFees = {
    monthMonth: 129,
    monthYear: 99,
    onlineFee: 0.025,
    offlineFee: 0.19,
  },
  aFees = {
    monthMonth: 329,
    monthYear: 249,
    onlineFee: 0.015,
    offlineFee: 0,
  },
  eFeesUSD = {
    monthMonth: 53,
    monthYear: 42,
    onlineFee: 0.035,
    offlineFee: 0.53,
  },
  pFeesUSD = {
    monthMonth: 139,
    monthYear: 109,
    onlineFee: 0.025,
    offlineFee: 0.2,
  },
  aFeesUSD = {
    monthMonth: 359,
    monthYear: 269,
    onlineFee: 0.015,
    offlineFee: 0,
  },
  eFeesEur = {
    monthMonth: 46,
    monthYear: 36,
    onlineFee: 0.035,
    offlineFee: 0.45,
  },
  pFeesEur = {
    monthMonth: 119,
    monthYear: 89,
    onlineFee: 0.025,
    offlineFee: 0.17,
  },
  aFeesEur = {
    monthMonth: 309,
    monthYear: 229,
    onlineFee: 0.015,
    offlineFee: 0,
  };


function calcMonthly(planFee){
    x =  tFeesCalc(planFee)
    return ( x + tQ.value * t * planFee.offlineFee + planFee.monthMonth);
}
function calcYearly(planFee){
    x =  tFeesCalc(planFee)
    return (x + tQ.value * t * planFee.offlineFee + planFee.monthYear);
}

function tFeesCalc(planFee){
   return ($("#ticket-price").val()*$("#ticket-quantity").val()*$("#Precent-Online").val()/100*planFee.onlineFee);
}


function simulator() {
  t = (100 - precentOnline.value) / 100,
  a = ($("#ticket-price").val()*$("#ticket-quantity").val()*$("#Precent-Online").val()/100*0.027);
      
    
  if (
    (0 == tQ.value
      ? $(".calcbody").hide("500")
      : $(".calcbody").show("500"),
    1 == feeCheckBox.checked
      ? $(".chf").is(":visible")
        ? ((explorer[0].innerText = calcMonthly(eFees).toFixed(0).toLocaleString("de-CH")),
          (pilot[0].innerText =     calcMonthly(pFees).toFixed(0).toLocaleString("de-CH")),
          (astronaut[0].innerText = calcMonthly(aFees).toFixed(0).toLocaleString("de-CH")),
          (explorer[3].innerText =  calcYearly(eFees).toFixed(0).toLocaleString("de-CH")),
          (pilot[3].innerText =     calcYearly(pFees).toFixed(0).toLocaleString("de-CH")),
          (astronaut[3].innerText = calcYearly(aFees).toFixed(0).toLocaleString("de-CH")))
        : $(".usd").is(":visible")
        ? ((explorer[0].innerText = calcMonthly(eFeesUSD).toFixed(0).toLocaleString("en-En")),
          (pilot[0].innerText =     calcMonthly(pFeesUSD).toFixed(0).toLocaleString("en-En")),
          (astronaut[0].innerText = calcMonthly(aFeesUSD).toFixed(0).toLocaleString("en-En")),
          (explorer[3].innerText =  calcYearly(eFeesUSD).toFixed(0).toLocaleString("en-En")),
          (pilot[3].innerText =     calcYearly(pFeesUSD).toFixed(0).toLocaleString("en-En")),
          (astronaut[3].innerText = calcYearly(aFeesUSD).toFixed(0).toLocaleString("en-En")))
        : $(".eur").is(":visible") &&
          ((explorer[0].innerText = calcMonthly(eFeesEur).toFixed(0).toLocaleString("en-En")),
          (pilot[0].innerText =     calcMonthly(pFeesEur).toFixed(0).toLocaleString("en-En")),
          (astronaut[0].innerText = calcMonthly(aFeesEur).toFixed(0).toLocaleString("en-En")),
          (explorer[3].innerText =  calcYearly(eFeesEur).toFixed(0).toLocaleString("en-En")),
          (pilot[3].innerText =     calcYearly(pFeesEur).toFixed(0).toLocaleString("en-En")),
          (astronaut[3].innerText = calcYearly(aFeesEur).toFixed(0).toLocaleString("en-En")))

     
     : $(".chf").is(":visible")
      ? ((explorer[0].innerText =   (calcMonthly(eFees) + a ).toFixed(0).toLocaleString("de-CH")),
        (pilot[0].innerText =       (calcMonthly(pFees) + a ).toFixed(0).toLocaleString("de-CH")),
        (astronaut[0].innerText =   (calcMonthly(aFees) + a ).toFixed(0).toLocaleString("de-CH")),
        (explorer[3].innerText =    (calcYearly(eFees) + a ).toFixed(0).toLocaleString("de-CH")),
        (pilot[3].innerText =       (calcYearly(pFees) + a ).toFixed(0).toLocaleString("de-CH")),
        (astronaut[3].innerText =   (calcYearly(aFees) + a ).toFixed(0).toLocaleString("de-CH")))
      : $(".usd").is(":visible")
      ? ((explorer[0].innerText =   (calcMonthly(eFeesUSD) + a ).toFixed(0).toLocaleString("en-En")),
        (pilot[0].innerText =       (calcMonthly(pFeesUSD) + a ).toFixed(0).toLocaleString("en-En")),
        (astronaut[0].innerText =   (calcMonthly(aFeesUSD) + a ).toFixed(0).toLocaleString("en-En")),
        (explorer[3].innerText =    (calcYearly(eFeesUSD) + a ).toFixed(0).toLocaleString("en-En")),
        (pilot[3].innerText =       (calcYearly(pFeesUSD) + a ).toFixed(0).toLocaleString("en-En")),
        (astronaut[3].innerText =   (calcYearly(aFeesUSD) + a ).toFixed(0).toLocaleString("en-En")))
      : $(".eur").is(":visible") &&
        ((explorer[0].innerText =   (calcMonthly(eFeesEur) + a ).toFixed(0).toLocaleString("en-En")),
        (pilot[0].innerText =       (calcMonthly(pFeesEur) + a ).toFixed(0).toLocaleString("en-En")),
        (astronaut[0].innerText =   (calcMonthly(aFeesEur) + a ).toFixed(0).toLocaleString("en-En")),
        (explorer[3].innerText =    (calcYearly(eFeesEur) + a ).toFixed(0).toLocaleString("en-En")),
        (pilot[3].innerText =       (calcYearly(pFeesEur) + a ).toFixed(0).toLocaleString("en-En")),
        (astronaut[3].innerText =   (calcYearly(aFeesEur) + a ).toFixed(0).toLocaleString("en-En"))),
    
     
     (explorer[2].innerText =   ( (explorer[0].innerText / (tP.value * tQ.value)) * 100 ).toFixed(1)),
    (pilot[2].innerText =       ( (pilot[0].innerText / (tP.value * tQ.value)) * 100 ).toFixed(1)),
    (astronaut[2].innerText =   ( (astronaut[0].innerText / (tP.value * tQ.value)) * 100 ).toFixed(1)),
    Number(explorer[2].innerText) > 100)
  )
      
      
    for (explorer[2].innerText = "-", i = 0; i < precents.length; i++)
      precents[i].style.display = "none";
  else
    for (i = 0; i < precents.length; i++)
        precents[i].style.display = "block";
  if (Number(pilot[2].innerText) > 100)
    for (pilot[2].innerText = "-", i = 0; i < precents.length; i++)
      precents[i].style.display = "none";
  else
    for (i = 0; i < precents.length; i++)
        precents[i].style.display = "block";
  if (Number(astronaut[2].innerText) > 100)
    for (astronaut[2].innerText = "-", i = 0; i < precents.length; i++)
      precents[i].style.display = "none";
  else
    for (i = 0; i < precents.length; i++)
        precents[i].style.display = "block";
    
    
  if (
    ((explorer[1].innerText =   ( explorer[0].innerText * monthAmount.value).toFixed(0).toLocaleString("en-En")),
    (pilot[1].innerText =       ( pilot[0].innerText * monthAmount.value).toFixed(0).toLocaleString("en-En")),
    (astronaut[1].innerText =   ( astronaut[0].innerText * monthAmount.value).toFixed(0).toLocaleString("en-En")),
    (explorer[5].innerText =    ((explorer[3].innerText / (tP.value * tQ.value)) * 100).toFixed(1)),
    (pilot[5].innerText =       ((pilot[3].innerText / (tP.value * tQ.value)) * 100 ).toFixed(1)),
    (astronaut[5].innerText =   ((astronaut[3].innerText / (tP.value * tQ.value)) *  100 ).toFixed(1)),
    Number(explorer[5].innerText) > 100)
  )
      
      
    for (explorer[5].innerText = "-", i = 0; i < precents.length; i++)
      precents[i].style.display = "none";
  else
    for (i = 0; i < precents.length; i++)
        precents[i].style.display = "block";
  if (Number(pilot[5].innerText) > 100)
    for (pilot[5].innerText = "-", i = 0; i < precents.length; i++)
      precents[i].style.display = "none";
  else
    for (i = 0; i < precents.length; i++)
        precents[i].style.display = "block";
  if (Number(astronaut[5].innerText) > 100)
    for (astronaut[5].innerText = "-", i = 0; i < precents.length; i++)
      precents[i].style.display = "none";
  else
    for (i = 0; i < precents.length; i++)
        precents[i].style.display = "block";
  (explorer[4].innerText = (12 * explorer[3].innerText).toFixed(0).toLocaleString("en-En")),
    (pilot[4].innerText = (12 * pilot[3].innerText).toFixed(0).toLocaleString("en-En")),
    (astronaut[4].innerText = (12 * astronaut[3].innerText).toFixed(0).toLocaleString("en-En"));
}

$(".calcinput").change(simulator),
  $(".chfspan").click(function () {
    setTimeout(simulator, 500);
  }),
  $(".usdspan").click(function () {
    setTimeout(simulator, 500);
  }),
  $(".eurspan").click(function () {
    setTimeout(simulator, 500);
  }),
  (feeCheckBox.onchange = simulator),
  $(".curancyselector").click(function () {
    setTimeout(simulator, 500);
  });
