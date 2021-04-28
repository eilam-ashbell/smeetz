var tQ = document.getElementById("ticket-quantity"),
    tP = document.getElementById("ticket-price"),
    monthAmount = document.getElementById("Amount-Of-Months"),
    precentOnline = document.getElementById("Precent-Online"),
    feeCheckBox = document.getElementById("transactionFees"),
    explorer = document.querySelectorAll(".explorer"),
    pilot = document.querySelectorAll(".pilot"),
    astronaut = document.querySelectorAll(".astronaut"),
    precents = document.querySelectorAll(".precent"),
    tFeesCalc, t, a,
    plan = {
        explorerM: 0,
        pilotM: 0,
        astronautM: 0,
        explorerY: 0,
        pilotY: 0,
        astronautY: 0
    },
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
        offlineFee: 0.53
    },
    pFeesUSD = {
        monthMonth: 139,
        monthYear: 109,
        onlineFee: 0.025,
        offlineFee: 0.2
    },
    aFeesUSD = {
        monthMonth: 359,
        monthYear: 269,
        onlineFee: 0.015,
        offlineFee: 0
    },
    eFeesEur = {
        monthMonth: 46,
        monthYear: 36,
        onlineFee: 0.035,
        offlineFee: 0.45
    },
    pFeesEur = {
        monthMonth: 119,
        monthYear: 89,
        onlineFee: 0.025,
        offlineFee: 0.17
    },
    aFeesEur = {
        monthMonth: 309,
        monthYear: 229,
        onlineFee: 0.015,
        offlineFee: 0
    },
    eFeesGBP = {
        monthMonth: 39,
        monthYear: 31,
        onlineFee: 0.035,
        offlineFee: 0.31
    },
    pFeesGBP = {
        monthMonth: 102,
        monthYear: 79,
        onlineFee: 0.025,
        offlineFee: 0.15
    },
    aFeesGBP = {
        monthMonth: 259,
        monthYear: 197,
        onlineFee: 0.015,
        offlineFee: 0
    };

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
    $(".gbpspan").click(function () {
        setTimeout(simulator, 500);
    }),
    (feeCheckBox.onchange = simulator),
    $(".curancyselector").click(function () {
        setTimeout(simulator, 500);
    });

function firstCalc() {
    if ($(".chf").is(":visible")) {
        plan.explorerM = calcMonthly(eFees),
            plan.pilotM = calcMonthly(pFees),
            plan.astronautM = calcMonthly(aFees),
            plan.explorerY = calcYearly(eFees),
            plan.pilotY = calcYearly(pFees),
            plan.astronautY = calcYearly(aFees);
    } else if ($(".usd").is(":visible")) {
        plan.explorerM = calcMonthly(eFeesUSD),
            plan.pilotM = calcMonthly(pFeesUSD),
            plan.astronautM = calcMonthly(aFeesUSD),
            plan.explorerY = calcYearly(eFeesUSD),
            plan.pilotY = calcYearly(pFeesUSD),
            plan.astronautY = calcYearly(aFeesUSD);
    } else if ($(".gbp").is(":visible")) {
        plan.explorerM = calcMonthly(eFeesGBP),
            plan.pilotM = calcMonthly(pFeesGBP),
            plan.astronautM = calcMonthly(aFeesGBP),
            plan.explorerY = calcYearly(eFeesGBP),
            plan.pilotY = calcYearly(pFeesGBP),
            plan.astronautY = calcYearly(aFeesGBP);
    } else {
        plan.explorerM = calcMonthly(eFeesEur),
            plan.pilotM = calcMonthly(pFeesEur),
            plan.astronautM = calcMonthly(aFeesEur),
            plan.explorerY = calcYearly(eFeesEur),
            plan.pilotY = calcYearly(pFeesEur),
            plan.astronautY = calcYearly(aFeesEur);
    };
    if (feeCheckBox.checked == true) {
        plan.explorerM = (plan.explorerM + a),
            plan.pilotM = (plan.pilotM + a),
            plan.astronautM = (plan.astronautM + a),
            plan.explorerY = (plan.explorerY + a),
            plan.pilotY = (plan.pilotY + a),
            plan.astronautY = (plan.astronautY + a);
    };
};

function calcMonthly(planFee) {
    return (tFeesCalc * planFee.onlineFee + tQ.value * t * planFee.offlineFee + planFee.monthMonth);
};

function calcYearly(planFee) {
    return (tFeesCalc * planFee.onlineFee + tQ.value * t * planFee.offlineFee + planFee.monthYear);
};

function formatCHF(selectPlan) {
    return (new Intl.NumberFormat('de-CH', {
        style: 'currency',
        currency: 'CHF', 
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(selectPlan));
};

function formatUSD(selectPlan) {
    return (new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(selectPlan));
};

function formatEUR(selectPlan) {
    return (new Intl.NumberFormat('en-EN', {
        style: 'currency',
        currency: 'EUR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(selectPlan));
};

function formatGBP(selectPlan) {
    return (new Intl.NumberFormat('en-EN', {
        style: 'currency',
        currency: 'GBP',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(selectPlan));
};

function formatPrecents(selectPlan) {
    return (new Intl.NumberFormat('en-EN', {
        style: 'percent',
        minimumFractionDigits: 1
    }).format(selectPlan));
};

function simulator() {
    t = (100 - precentOnline.value) / 100,
        tFeesCalc = $("#ticket-price").val() * $("#ticket-quantity").val() * $("#Precent-Online").val() / 100,
        a = tFeesCalc * 0.027;
    firstCalc()
    if (
        (0 == tQ.value || 0 == tP.value || 0 == precentOnline.value ? $(".calcbody").hide("500") : $(".calcbody").show("500")),
        $(".chf").is(":visible") ?
        ((explorer[0].innerText = formatCHF(plan.explorerM)),
            (pilot[0].innerText = formatCHF(plan.pilotM)),
            (astronaut[0].innerText = formatCHF(plan.astronautM)),
            (explorer[3].innerText = formatCHF(plan.explorerY)),
            (pilot[3].innerText = formatCHF(plan.pilotY)),
            (astronaut[3].innerText = formatCHF(plan.astronautY)),
            (explorer[1].innerHTML = formatCHF(plan.explorerM * monthAmount.value)),
            (pilot[1].innerHTML = formatCHF(plan.pilotM * monthAmount.value)),
            (astronaut[1].innerHTML = formatCHF(plan.astronautM * monthAmount.value)),
            (explorer[4].innerHTML = formatCHF(plan.explorerY * 12)),
            (pilot[4].innerHTML = formatCHF(plan.pilotY * 12)),
            (astronaut[4].innerHTML = formatCHF(plan.astronautY * 12))) :
        $(".usd").is(":visible") ?
        ((explorer[0].innerText = formatUSD(plan.explorerM)),
            (pilot[0].innerText = formatUSD(plan.pilotM)),
            (astronaut[0].innerText = formatUSD(plan.astronautM)),
            (explorer[3].innerText = formatUSD(plan.explorerY)),
            (pilot[3].innerText = formatUSD(plan.pilotY)),
            (astronaut[3].innerText = formatUSD(plan.astronautY)),
            (explorer[1].innerHTML = formatUSD(plan.explorerM * monthAmount.value)),
            (pilot[1].innerHTML = formatUSD(plan.pilotM * monthAmount.value)),
            (astronaut[1].innerHTML = formatUSD(plan.astronautM * monthAmount.value)),
            (explorer[4].innerHTML = formatUSD(plan.explorerY * 12)),
            (pilot[4].innerHTML = formatUSD(plan.pilotY * 12)),
            (astronaut[4].innerHTML = formatUSD(plan.astronautY * 12))) :
        $(".gbp").is(":visible") ?
        ((explorer[0].innerText = formatGBP(plan.explorerM)),
            (pilot[0].innerText = formatGBP(plan.pilotM)),
            (astronaut[0].innerText = formatGBP(plan.astronautM)),
            (explorer[3].innerText = formatGBP(plan.explorerY)),
            (pilot[3].innerText = formatGBP(plan.pilotY)),
            (astronaut[3].innerText = formatGBP(plan.astronautY)),
            (explorer[1].innerHTML = formatGBP(plan.explorerM * monthAmount.value)),
            (pilot[1].innerHTML = formatGBP(plan.pilotM * monthAmount.value)),
            (astronaut[1].innerHTML = formatGBP(plan.astronautM * monthAmount.value)),
            (explorer[4].innerHTML = formatGBP(plan.explorerY * 12)),
            (pilot[4].innerHTML = formatGBP(plan.pilotY * 12)),
            (astronaut[4].innerHTML = formatGBP(plan.astronautY * 12))) :
        $(".eur").is(":visible") &&
        ((explorer[0].innerText = formatEUR(plan.explorerM)),
            (pilot[0].innerText = formatEUR(plan.pilotM)),
            (astronaut[0].innerText = formatEUR(plan.astronautM)),
            (explorer[3].innerText = formatEUR(plan.explorerY)),
            (pilot[3].innerText = formatEUR(plan.pilotY)),
            (astronaut[3].innerText = formatEUR(plan.astronautY)),
            (explorer[1].innerHTML = formatEUR(plan.explorerM * monthAmount.value)),
            (pilot[1].innerHTML = formatEUR(plan.pilotM * monthAmount.value)),
            (astronaut[1].innerHTML = formatEUR(plan.astronautM * monthAmount.value)),
            (explorer[4].innerHTML = formatEUR(plan.explorerY * 12)),
            (pilot[4].innerHTML = formatEUR(plan.pilotY * 12)),
            (astronaut[4].innerHTML = formatEUR(plan.astronautY * 12))))
        explorer[2].innerText = (formatPrecents((plan.explorerM / (tP.value * tQ.value)))),
        pilot[2].innerText = (formatPrecents((plan.pilotM / (tP.value * tQ.value)))),
        astronaut[2].innerText = (formatPrecents((plan.astronautM / (tP.value * tQ.value)))),
        explorer[5].innerText = (formatPrecents((plan.explorerY / (tP.value * tQ.value)))),
        pilot[5].innerText = (formatPrecents((plan.pilotY / (tP.value * tQ.value)))),
        astronaut[5].innerText = (formatPrecents((plan.astronautY / (tP.value * tQ.value))));

}
