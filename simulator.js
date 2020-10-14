/*calculator simulator*/
var ticketQuan = document.getElementById("ticket-quantity");
var ticketPrice = document.getElementById("ticket-price");
var monthAmount = document.getElementById("Amount-Of-Months");
var precentOnline = document.getElementById("Precent-Online");
var precentOffline = document.getElementById("Precent-Offline");
var feeCheckBox = document.getElementById("transactionFees");
var explorer = document.querySelectorAll(".explorer");
var pilot = document.querySelectorAll(".pilot");
var astronaut = document.querySelectorAll(".astronaut");
var precents = document.querySelectorAll(".precent");
var explorerFeeRate = {monthMonth:49, monthYear:39, onlineFee: 0.035, offlineFee: 0.39};
var pilotFeeRate = {monthMonth:129, monthYear:99, onlineFee: 0.025, offlineFee: 0.19};
var astronautFeeRate = {monthMonth:329, monthYear:249, onlineFee: 0.015, offlineFee: 0};
var explorerFeeRateUsd = {monthMonth:53, monthYear:42, onlineFee: 0.035, offlineFee: 0.53};
var pilotFeeRateUsd = {monthMonth:139, monthYear:109, onlineFee: 0.025, offlineFee: 0.2};
var astronautFeeRateUsd = {monthMonth:359, monthYear:269, onlineFee: 0.015, offlineFee: 0};
var explorerFeeRateEur = {monthMonth:46, monthYear:36, onlineFee: 0.035, offlineFee: 0.45};
var pilotFeeRateEur = {monthMonth:119, monthYear:89, onlineFee: 0.025, offlineFee: 0.17};
var astronautFeeRateEur = {monthMonth:309, monthYear:229, onlineFee: 0.015, offlineFee: 0};
$('.calcinput').change(simulator);
$('.chfspan').click(  function() {
    setTimeout(simulator,500);});
$('.usdspan').click(  function() {
    setTimeout(simulator,500);});
$('.eurspan').click(  function() {
    setTimeout(simulator,500);});
feeCheckBox.onchange = simulator;
$(".curancyselector").click(
  function() {
    setTimeout(simulator,500);});



function simulator() {
  var onlineFee = precentOnline.value/100;
  var offlineFee = (100-precentOnline.value)/100;
 
  
  //calc animation
    if (ticketQuan.value == 0) {
      $(".calcbody").hide("500");
    } else {
      $(".calcbody").show("500");
    }
  
  
  if (feeCheckBox.checked == true) { //costumer pays fees
    if($('.chf').is(':visible')) {
      //monthly plan cost in CHF
      explorer[0].innerText = ((ticketPrice.value*ticketQuan.value*onlineFee*explorerFeeRate.onlineFee)+(ticketQuan.value*offlineFee*explorerFeeRate.offlineFee)+(explorerFeeRate.monthMonth));
      pilot[0].innerText = ((ticketPrice.value*ticketQuan.value*onlineFee*pilotFeeRate.onlineFee)+(ticketQuan.value*offlineFee*pilotFeeRate.offlineFee)+(pilotFeeRate.monthMonth));
      astronaut[0].innerText = ((ticketPrice.value*ticketQuan.value*onlineFee*astronautFeeRate.onlineFee)+(ticketQuan.value*offlineFee*astronautFeeRate.offlineFee)+(astronautFeeRate.monthMonth));
      //yearly plan cost per month in CHF
      explorer[3].innerText = ((ticketPrice.value*ticketQuan.value*onlineFee*explorerFeeRate.onlineFee)+(ticketQuan.value*offlineFee*explorerFeeRate.offlineFee)+(explorerFeeRate.monthYear));
      pilot[3].innerText = ((ticketPrice.value*ticketQuan.value*onlineFee*pilotFeeRate.onlineFee)+(ticketQuan.value*offlineFee*pilotFeeRate.offlineFee)+(pilotFeeRate.monthYear));
      astronaut[3].innerText = ((ticketPrice.value*ticketQuan.value*onlineFee*astronautFeeRate.onlineFee)+(ticketQuan.value*offlineFee*astronautFeeRate.offlineFee)+(astronautFeeRate.monthYear));      
   
    
    } else if ($('.usd').is(':visible')) {
      //monthly plan cost in USD
      explorer[0].innerText = ((ticketPrice.value*ticketQuan.value*onlineFee*explorerFeeRateUsd.onlineFee)+(ticketQuan.value*offlineFee*explorerFeeRateUsd.offlineFee)+(explorerFeeRateUsd.monthMonth));
      pilot[0].innerText = ((ticketPrice.value*ticketQuan.value*onlineFee*pilotFeeRateUsd.onlineFee)+(ticketQuan.value*offlineFee*pilotFeeRateUsd.offlineFee)+(pilotFeeRateUsd.monthMonth));
      astronaut[0].innerText = ((ticketPrice.value*ticketQuan.value*onlineFee*astronautFeeRateUsd.onlineFee)+(ticketQuan.value*offlineFee*astronautFeeRateUsd.offlineFee)+(astronautFeeRateUsd.monthMonth));
      //yearly plan cost per month in USD
      explorer[3].innerText = ((ticketPrice.value*ticketQuan.value*onlineFee*explorerFeeRateUsd.onlineFee)+(ticketQuan.value*offlineFee*explorerFeeRateUsd.offlineFee)+(explorerFeeRateUsd.monthYear));
      pilot[3].innerText = ((ticketPrice.value*ticketQuan.value*onlineFee*pilotFeeRateUsd.onlineFee)+(ticketQuan.value*offlineFee*pilotFeeRateUsd.offlineFee)+(pilotFeeRateUsd.monthYear));
      astronaut[3].innerText = ((ticketPrice.value*ticketQuan.value*onlineFee*astronautFeeRateUsd.onlineFee)+(ticketQuan.value*offlineFee*astronautFeeRateUsd.offlineFee)+(astronautFeeRateUsd.monthYear));      
  
    
    } else if ($('.eur').is(':visible')) {
      //monthly plan cost in EUR
       explorer[0].innerText = ((ticketPrice.value*ticketQuan.value*onlineFee*explorerFeeRateEur.onlineFee)+(ticketQuan.value*offlineFee*explorerFeeRateEur.offlineFee)+(explorerFeeRateEur.monthMonth));
      pilot[0].innerText = ((ticketPrice.value*ticketQuan.value*onlineFee*pilotFeeRateEur.onlineFee)+(ticketQuan.value*offlineFee*pilotFeeRateEur.offlineFee)+(pilotFeeRateEur.monthMonth));
      astronaut[0].innerText = ((ticketPrice.value*ticketQuan.value*onlineFee*astronautFeeRateEur.onlineFee)+(ticketQuan.value*offlineFee*astronautFeeRateEur.offlineFee)+(astronautFeeRateEur.monthMonth));
      //yearly plan cost per month in EUR
      explorer[3].innerText = ((ticketPrice.value*ticketQuan.value*onlineFee*explorerFeeRateEur.onlineFee)+(ticketQuan.value*offlineFee*explorerFeeRateEur.offlineFee)+(explorerFeeRateEur.monthYear));
      pilot[3].innerText = ((ticketPrice.value*ticketQuan.value*onlineFee*pilotFeeRateEur.onlineFee)+(ticketQuan.value*offlineFee*pilotFeeRateEur.offlineFee)+(pilotFeeRateEur.monthYear));
      astronaut[3].innerText = ((ticketPrice.value*ticketQuan.value*onlineFee*astronautFeeRateEur.onlineFee)+(ticketQuan.value*offlineFee*astronautFeeRateEur.offlineFee)+(astronautFeeRateEur.monthYear));      
    }
  
  
  }  else { // costumer doesnt pay fees
       if($('.chf').is(':visible')) {
      //monthly plan cost in CHF
        explorer[0].innerText = ((ticketPrice.value*ticketQuan.value*onlineFee*explorerFeeRate.onlineFee)+(ticketQuan.value*offlineFee*explorerFeeRate.offlineFee)+(explorerFeeRate.monthMonth)+(ticketPrice.value*ticketQuan.value*onlineFee*0.027)).toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
        pilot[0].innerText = ((ticketPrice.value*ticketQuan.value*onlineFee*pilotFeeRate.onlineFee)+(ticketQuan.value*offlineFee*pilotFeeRate.offlineFee)+(pilotFeeRate.monthMonth)+(ticketPrice.value*ticketQuan.value*onlineFee*0.027)).toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
        astronaut[0].innerText = ((ticketPrice.value*ticketQuan.value*onlineFee*astronautFeeRate.onlineFee)+(ticketQuan.value*offlineFee*astronautFeeRate.offlineFee)+(astronautFeeRate.monthMonth)+(ticketPrice.value*ticketQuan.value*onlineFee*0.027)).toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
      //yearly plan cost per month in CHF
        explorer[3].innerText = ((ticketPrice.value*ticketQuan.value*onlineFee*explorerFeeRate.onlineFee)+(ticketQuan.value*offlineFee*explorerFeeRate.offlineFee)+(explorerFeeRate.monthYear)+(ticketPrice.value*ticketQuan.value*onlineFee*0.027)).toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
        pilot[3].innerText = ((ticketPrice.value*ticketQuan.value*onlineFee*pilotFeeRate.onlineFee)+(ticketQuan.value*offlineFee*pilotFeeRate.offlineFee)+(pilotFeeRate.monthYear)+(ticketPrice.value*ticketQuan.value*onlineFee*0.027)).toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
        astronaut[3].innerText = ((ticketPrice.value*ticketQuan.value*onlineFee*astronautFeeRate.onlineFee)+(ticketQuan.value*offlineFee*astronautFeeRate.offlineFee)+(astronautFeeRate.monthYear)+(ticketPrice.value*ticketQuan.value*onlineFee*0.027)).toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
      
       
       } else if ($('.usd').is(':visible')) {
      //monthly plan cost in USD
        explorer[0].innerText = ((ticketPrice.value*ticketQuan.value*onlineFee*explorerFeeRateUsd.onlineFee)+(ticketQuan.value*offlineFee*explorerFeeRateUsd.offlineFee)+(explorerFeeRateUsd.monthMonth)+(ticketPrice.value*ticketQuan.value*onlineFee*0.027)).toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
        pilot[0].innerText = ((ticketPrice.value*ticketQuan.value*onlineFee*pilotFeeRateUsd.onlineFee)+(ticketQuan.value*offlineFee*pilotFeeRateUsd.offlineFee)+(pilotFeeRateUsd.monthMonth)+(ticketPrice.value*ticketQuan.value*onlineFee*0.027)).toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
        astronaut[0].innerText = ((ticketPrice.value*ticketQuan.value*onlineFee*astronautFeeRateUsd.onlineFee)+(ticketQuan.value*offlineFee*astronautFeeRateUsd.offlineFee)+(astronautFeeRateUsd.monthMonth)+(ticketPrice.value*ticketQuan.value*onlineFee*0.027)).toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
      //yearly plan cost per month in USD
        explorer[3].innerText = ((ticketPrice.value*ticketQuan.value*onlineFee*explorerFeeRateUsd.onlineFee)+(ticketQuan.value*offlineFee*explorerFeeRateUsd.offlineFee)+(explorerFeeRateUsd.monthYear)+(ticketPrice.value*ticketQuan.value*onlineFee*0.027)).toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
        pilot[3].innerText = ((ticketPrice.value*ticketQuan.value*onlineFee*pilotFeeRateUsd.onlineFee)+(ticketQuan.value*offlineFee*pilotFeeRateUsd.offlineFee)+(pilotFeeRateUsd.monthYear)+(ticketPrice.value*ticketQuan.value*onlineFee*0.027)).toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
        astronaut[3].innerText = ((ticketPrice.value*ticketQuan.value*onlineFee*astronautFeeRateUsd.onlineFee)+(ticketQuan.value*offlineFee*astronautFeeRateUsd.offlineFee)+(astronautFeeRateUsd.monthYear)+(ticketPrice.value*ticketQuan.value*onlineFee*0.027)).toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
      
      
      } else if ($('.eur').is(':visible')) {
      //monthly plan cost in EUR
        explorer[0].innerText = ((ticketPrice.value*ticketQuan.value*onlineFee*explorerFeeRateEur.onlineFee)+(ticketQuan.value*offlineFee*explorerFeeRateEur.offlineFee)+(explorerFeeRateEur.monthMonth)+(ticketPrice.value*ticketQuan.value*onlineFee*0.027)).toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
        pilot[0].innerText = ((ticketPrice.value*ticketQuan.value*onlineFee*pilotFeeRateEur.onlineFee)+(ticketQuan.value*offlineFee*pilotFeeRateEur.offlineFee)+(pilotFeeRateEur.monthMonth)+(ticketPrice.value*ticketQuan.value*onlineFee*0.027)).toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
        astronaut[0].innerText = ((ticketPrice.value*ticketQuan.value*onlineFee*astronautFeeRateEur.onlineFee)+(ticketQuan.value*offlineFee*astronautFeeRateEur.offlineFee)+(astronautFeeRateEur.monthMonth)+(ticketPrice.value*ticketQuan.value*onlineFee*0.027)).toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
      //yearly plan cost per month in EUR
        explorer[3].innerText = ((ticketPrice.value*ticketQuan.value*onlineFee*explorerFeeRateEur.onlineFee)+(ticketQuan.value*offlineFee*explorerFeeRateEur.offlineFee)+(explorerFeeRateEur.monthYear)+(ticketPrice.value*ticketQuan.value*onlineFee*0.027)).toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
        pilot[3].innerText = ((ticketPrice.value*ticketQuan.value*onlineFee*pilotFeeRateEur.onlineFee)+(ticketQuan.value*offlineFee*pilotFeeRateEur.offlineFee)+(pilotFeeRateEur.monthYear)+(ticketPrice.value*ticketQuan.value*onlineFee*0.027)).toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
        astronaut[3].innerText = ((ticketPrice.value*ticketQuan.value*onlineFee*astronautFeeRateEur.onlineFee)+(ticketQuan.value*offlineFee*astronautFeeRateEur.offlineFee)+(astronautFeeRateEur.monthYear)+(ticketPrice.value*ticketQuan.value*onlineFee*0.027)).toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
      }
  }
  
  
	//% monthly
  explorer[2].innerText = ((explorer[0].innerText.replace(',' , '')/(ticketPrice.value*ticketQuan.value))*100).toFixed(1);
  pilot[2].innerText = ((pilot[0].innerText.replace(',' , '')/(ticketPrice.value*ticketQuan.value))*100).toFixed(1);
  astronaut[2].innerText = ((astronaut[0].innerText.replace(',' , '')/(ticketPrice.value*ticketQuan.value))*100).toFixed(1);
  if (Number(explorer[2].innerText) > 100)  {
    explorer[2].innerText = '-'
    for (i=0; i<precents.length; i++){
       precents[i].style.display = "none";
    }
  } else {
      for (i=0; i<precents.length; i++){
        precents[i].style.display = "block";
      }
  }
  if (Number(pilot[2].innerText) > 100)  {
    pilot[2].innerText = '-'
    for (i=0; i<precents.length; i++){
       precents[i].style.display = "none";
    }
  } else {
      for (i=0; i<precents.length; i++){
        precents[i].style.display = "block";
      }
  }
  if (Number(astronaut[2].innerText) > 100)  {
    astronaut[2].innerText = '-'
    for (i=0; i<precents.length; i++){
       precents[i].style.display = "none";
    }
  } else {
      for (i=0; i<precents.length; i++){
        precents[i].style.display = "block";
      }
  }
 
  //cost for selected months
  explorer[1].innerText = (explorer[0].innerText.replace(',' , '')*monthAmount.value).toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  pilot[1].innerText = (pilot[0].innerText.replace(',' , '')*monthAmount.value).toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  astronaut[1].innerText = (astronaut[0].innerText.replace(',' , '')*monthAmount.value).toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');

  
  //% annually
  explorer[5].innerText = ((explorer[3].innerText.replace(',' , '')/(ticketPrice.value*ticketQuan.value))*100).toFixed(1);
  pilot[5].innerText = ((pilot[3].innerText.replace(',' , '')/(ticketPrice.value*ticketQuan.value))*100).toFixed(1);
  astronaut[5].innerText = ((astronaut[3].innerText.replace(',' , '')/(ticketPrice.value*ticketQuan.value))*100).toFixed(1);
  if (Number(explorer[5].innerText) > 100) {
    explorer[5].innerText = '-'
    for (i=0; i<precents.length; i++){
       precents[i].style.display = "none";
    }
  } else {
      for (i=0; i<precents.length; i++){
        precents[i].style.display = "block";
      }
  }
  if (Number(pilot[5].innerText) > 100)  {
    pilot[5].innerText = '-'
    for (i=0; i<precents.length; i++){
       precents[i].style.display = "none";
    }
  } else {
      for (i=0; i<precents.length; i++){
        precents[i].style.display = "block";
      }
  }
  if (Number(astronaut[5].innerText) > 100) {
    astronaut[5].innerText = '-'
    for (i=0; i<precents.length; i++){
       precents[i].style.display = "none";
    }
  } else {
      for (i=0; i<precents.length; i++){
        precents[i].style.display = "block";
      }

  }
  // cost per year
  explorer[4].innerText = (explorer[3].innerText.replace(',' , '')*12).toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  pilot[4].innerText = (pilot[3].innerText.replace(',' , '')*12).toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  astronaut[4].innerText = (astronaut[3].innerText.replace(',' , '')*12).toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}
 //simulatorEnd
