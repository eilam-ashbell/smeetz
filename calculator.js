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
var explorerFeeRate = {monthMonth:49, monthYear:39, onlineFee: 0.035, offlineFee: 0.49};
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
  if (feeCheckBox.checked == true) {
    if($('.chf').is(':visible')) {
      //per month monthly plan
      explorer[0].innerText = explorerFeeRate.monthMonth;
      pilot[0].innerText = pilotFeeRate.monthMonth;
      astronaut[0].innerText = astronautFeeRate.monthMonth;
      //per month yearly plan
      explorer[3].innerText = explorerFeeRate.monthYear;
      pilot[3].innerText = pilotFeeRate.monthYear;
      astronaut[3].innerText = astronautFeeRate.monthYear;      
    } else if ($('.usd').is(':visible')) {
       //per month monthly plan
      explorer[0].innerText = explorerFeeRateUsd.monthMonth;
      pilot[0].innerText = pilotFeeRateUsd.monthMonth;
      astronaut[0].innerText = astronautFeeRateUsd.monthMonth;
      //per month yearly plan
      explorer[3].innerText = explorerFeeRateUsd.monthYear;
      pilot[3].innerText = pilotFeeRateUsd.monthYear;
      astronaut[3].innerText = astronautFeeRateUsd.monthYear;      
    } else if ($('.eur').is(':visible')) {
       //per month monthly plan
      explorer[0].innerText = explorerFeeRateEur.monthMonth;
      pilot[0].innerText = pilotFeeRateEur.monthMonth;
      astronaut[0].innerText = astronautFeeRateEur.monthMonth;
      //per month yearly plan
      explorer[3].innerText = explorerFeeRateEur.monthYear;
      pilot[3].innerText = pilotFeeRateEur.monthYear;
      astronaut[3].innerText = astronautFeeRateEur.monthYear;      
    }
  }  else {
       if($('.chf').is(':visible')) {
        //per month monthly plan
        explorer[0].innerText = (((ticketPrice.value*ticketQuan.value)*explorerFeeRate.onlineFee*onlineFee)+(ticketQuan.value*offlineFee*explorerFeeRate.offlineFee)+explorerFeeRate.monthMonth).toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
        pilot[0].innerText = (((ticketPrice.value*ticketQuan.value)*pilotFeeRate.onlineFee*onlineFee)+(ticketQuan.value*offlineFee*pilotFeeRate.offlineFee)+pilotFeeRate.monthMonth).toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
        astronaut[0].innerText = (((ticketPrice.value*ticketQuan.value)*astronautFeeRate.onlineFee*onlineFee)+(ticketQuan.value*offlineFee*astronautFeeRate.offlineFee)+astronautFeeRate.monthMonth).toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
        //per month yearly plan
        explorer[3].innerText = (((ticketPrice.value*ticketQuan.value)*explorerFeeRate.onlineFee*onlineFee)+(ticketQuan.value*offlineFee*explorerFeeRate.offlineFee)+explorerFeeRate.monthYear).toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
        pilot[3].innerText = (((ticketPrice.value*ticketQuan.value)*pilotFeeRate.onlineFee*onlineFee)+(ticketQuan.value*offlineFee*pilotFeeRate.offlineFee)+pilotFeeRate.monthYear).toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
        astronaut[3].innerText = (((ticketPrice.value*ticketQuan.value)*astronautFeeRate.onlineFee*onlineFee)+(ticketQuan.value*offlineFee*astronautFeeRate.offlineFee)+astronautFeeRate.monthYear).toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
      } else if ($('.usd').is(':visible')) {
        //per month monthly plan
        explorer[0].innerText = (((ticketPrice.value*ticketQuan.value)*explorerFeeRateUsd.onlineFee*onlineFee)+(ticketQuan.value*offlineFee*explorerFeeRateUsd.offlineFee)+explorerFeeRateUsd.monthMonth).toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
        pilot[0].innerText = (((ticketPrice.value*ticketQuan.value)*pilotFeeRateUsd.onlineFee*onlineFee)+(ticketQuan.value*offlineFee*pilotFeeRateUsd.offlineFee)+pilotFeeRateUsd.monthMonth).toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
        astronaut[0].innerText = (((ticketPrice.value*ticketQuan.value)*astronautFeeRateUsd.onlineFee*onlineFee)+(ticketQuan.value*offlineFee*astronautFeeRateUsd.offlineFee)+astronautFeeRateUsd.monthMonth).toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
        //per month yearly plan
        explorer[3].innerText = (((ticketPrice.value*ticketQuan.value)*explorerFeeRateUsd.onlineFee*onlineFee)+(ticketQuan.value*offlineFee*explorerFeeRateUsd.offlineFee)+explorerFeeRateUsd.monthYear).toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
        pilot[3].innerText = (((ticketPrice.value*ticketQuan.value)*pilotFeeRateUsd.onlineFee*onlineFee)+(ticketQuan.value*offlineFee*pilotFeeRateUsd.offlineFee)+pilotFeeRateUsd.monthYear).toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
        astronaut[3].innerText = (((ticketPrice.value*ticketQuan.value)*astronautFeeRateUsd.onlineFee*onlineFee)+(ticketQuan.value*offlineFee*astronautFeeRateUsd.offlineFee)+astronautFeeRateUsd.monthYear).toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
      } else if ($('.eur').is(':visible')) {
        //per month monthly plan
        explorer[0].innerText = (((ticketPrice.value*ticketQuan.value)*explorerFeeRateEur.onlineFee*onlineFee)+(ticketQuan.value*offlineFee*explorerFeeRateEur.offlineFee)+explorerFeeRateEur.monthMonth).toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
        pilot[0].innerText = (((ticketPrice.value*ticketQuan.value)*pilotFeeRateEur.onlineFee*onlineFee)+(ticketQuan.value*offlineFee*pilotFeeRateEur.offlineFee)+pilotFeeRateEur.monthMonth).toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
        astronaut[0].innerText = (((ticketPrice.value*ticketQuan.value)*astronautFeeRateEur.onlineFee*onlineFee)+(ticketQuan.value*offlineFee*astronautFeeRateEur.offlineFee)+astronautFeeRateEur.monthMonth).toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
        //per month yearly plan
        explorer[3].innerText = (((ticketPrice.value*ticketQuan.value)*explorerFeeRateEur.onlineFee*onlineFee)+(ticketQuan.value*offlineFee*explorerFeeRateEur.offlineFee)+explorerFeeRateEur.monthYear).toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
        pilot[3].innerText = (((ticketPrice.value*ticketQuan.value)*pilotFeeRateEur.onlineFee*onlineFee)+(ticketQuan.value*offlineFee*pilotFeeRateEur.offlineFee)+pilotFeeRateEur.monthYear).toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
        astronaut[3].innerText = (((ticketPrice.value*ticketQuan.value)*astronautFeeRateEur.onlineFee*onlineFee)+(ticketQuan.value*offlineFee*astronautFeeRateEur.offlineFee)+astronautFeeRateEur.monthYear).toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
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
  //selected months
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
  //year
  explorer[4].innerText = (explorer[3].innerText.replace(',' , '')*12).toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  pilot[4].innerText = (pilot[3].innerText.replace(',' , '')*12).toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  astronaut[4].innerText = (astronaut[3].innerText.replace(',' , '')*12).toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
 } 
 //simulatorEnd
