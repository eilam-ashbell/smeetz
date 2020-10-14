var ticketQuan = document.getElementById("ticket-quantity"),
  ticketPrice = document.getElementById("ticket-price"),
  monthAmount = document.getElementById("Amount-Of-Months"),
  precentOnline = document.getElementById("Precent-Online"),
  precentOffline = document.getElementById("Precent-Offline"),
  feeCheckBox = document.getElementById("transactionFees"),
  explorer = document.querySelectorAll(".explorer"),
  pilot = document.querySelectorAll(".pilot"),
  astronaut = document.querySelectorAll(".astronaut"),
  precents = document.querySelectorAll(".precent"),
  explorerFeeRate = {
    monthMonth: 49,
    monthYear: 39,
    onlineFee: 0.035,
    offlineFee: 0.39,
  },
  pilotFeeRate = {
    monthMonth: 129,
    monthYear: 99,
    onlineFee: 0.025,
    offlineFee: 0.19,
  },
  astronautFeeRate = {
    monthMonth: 329,
    monthYear: 249,
    onlineFee: 0.015,
    offlineFee: 0,
  },
  explorerFeeRateUsd = {
    monthMonth: 53,
    monthYear: 42,
    onlineFee: 0.035,
    offlineFee: 0.53,
  },
  pilotFeeRateUsd = {
    monthMonth: 139,
    monthYear: 109,
    onlineFee: 0.025,
    offlineFee: 0.2,
  },
  astronautFeeRateUsd = {
    monthMonth: 359,
    monthYear: 269,
    onlineFee: 0.015,
    offlineFee: 0,
  },
  explorerFeeRateEur = {
    monthMonth: 46,
    monthYear: 36,
    onlineFee: 0.035,
    offlineFee: 0.45,
  },
  pilotFeeRateEur = {
    monthMonth: 119,
    monthYear: 89,
    onlineFee: 0.025,
    offlineFee: 0.17,
  },
  astronautFeeRateEur = {
    monthMonth: 309,
    monthYear: 229,
    onlineFee: 0.015,
    offlineFee: 0,
  };
function simulator() {
  var e = precentOnline.value / 100,
    t = (100 - precentOnline.value) / 100;
  if (
    (0 == ticketQuan.value
      ? $(".calcbody").hide("500")
      : $(".calcbody").show("500"),
    1 == feeCheckBox.checked
      ? $(".chf").is(":visible")
        ? ((explorer[0].innerText =
            ticketPrice.value *
              ticketQuan.value *
              e *
              explorerFeeRate.onlineFee +
            ticketQuan.value * t * explorerFeeRate.offlineFee +
            explorerFeeRate.monthMonth),
          (pilot[0].innerText =
            ticketPrice.value * ticketQuan.value * e * pilotFeeRate.onlineFee +
            ticketQuan.value * t * pilotFeeRate.offlineFee +
            pilotFeeRate.monthMonth),
          (astronaut[0].innerText =
            ticketPrice.value *
              ticketQuan.value *
              e *
              astronautFeeRate.onlineFee +
            ticketQuan.value * t * astronautFeeRate.offlineFee +
            astronautFeeRate.monthMonth),
          (explorer[3].innerText =
            ticketPrice.value *
              ticketQuan.value *
              e *
              explorerFeeRate.onlineFee +
            ticketQuan.value * t * explorerFeeRate.offlineFee +
            explorerFeeRate.monthYear),
          (pilot[3].innerText =
            ticketPrice.value * ticketQuan.value * e * pilotFeeRate.onlineFee +
            ticketQuan.value * t * pilotFeeRate.offlineFee +
            pilotFeeRate.monthYear),
          (astronaut[3].innerText =
            ticketPrice.value *
              ticketQuan.value *
              e *
              astronautFeeRate.onlineFee +
            ticketQuan.value * t * astronautFeeRate.offlineFee +
            astronautFeeRate.monthYear))
        : $(".usd").is(":visible")
        ? ((explorer[0].innerText =
            ticketPrice.value *
              ticketQuan.value *
              e *
              explorerFeeRateUsd.onlineFee +
            ticketQuan.value * t * explorerFeeRateUsd.offlineFee +
            explorerFeeRateUsd.monthMonth),
          (pilot[0].innerText =
            ticketPrice.value *
              ticketQuan.value *
              e *
              pilotFeeRateUsd.onlineFee +
            ticketQuan.value * t * pilotFeeRateUsd.offlineFee +
            pilotFeeRateUsd.monthMonth),
          (astronaut[0].innerText =
            ticketPrice.value *
              ticketQuan.value *
              e *
              astronautFeeRateUsd.onlineFee +
            ticketQuan.value * t * astronautFeeRateUsd.offlineFee +
            astronautFeeRateUsd.monthMonth),
          (explorer[3].innerText =
            ticketPrice.value *
              ticketQuan.value *
              e *
              explorerFeeRateUsd.onlineFee +
            ticketQuan.value * t * explorerFeeRateUsd.offlineFee +
            explorerFeeRateUsd.monthYear),
          (pilot[3].innerText =
            ticketPrice.value *
              ticketQuan.value *
              e *
              pilotFeeRateUsd.onlineFee +
            ticketQuan.value * t * pilotFeeRateUsd.offlineFee +
            pilotFeeRateUsd.monthYear),
          (astronaut[3].innerText =
            ticketPrice.value *
              ticketQuan.value *
              e *
              astronautFeeRateUsd.onlineFee +
            ticketQuan.value * t * astronautFeeRateUsd.offlineFee +
            astronautFeeRateUsd.monthYear))
        : $(".eur").is(":visible") &&
          ((explorer[0].innerText =
            ticketPrice.value *
              ticketQuan.value *
              e *
              explorerFeeRateEur.onlineFee +
            ticketQuan.value * t * explorerFeeRateEur.offlineFee +
            explorerFeeRateEur.monthMonth),
          (pilot[0].innerText =
            ticketPrice.value *
              ticketQuan.value *
              e *
              pilotFeeRateEur.onlineFee +
            ticketQuan.value * t * pilotFeeRateEur.offlineFee +
            pilotFeeRateEur.monthMonth),
          (astronaut[0].innerText =
            ticketPrice.value *
              ticketQuan.value *
              e *
              astronautFeeRateEur.onlineFee +
            ticketQuan.value * t * astronautFeeRateEur.offlineFee +
            astronautFeeRateEur.monthMonth),
          (explorer[3].innerText =
            ticketPrice.value *
              ticketQuan.value *
              e *
              explorerFeeRateEur.onlineFee +
            ticketQuan.value * t * explorerFeeRateEur.offlineFee +
            explorerFeeRateEur.monthYear),
          (pilot[3].innerText =
            ticketPrice.value *
              ticketQuan.value *
              e *
              pilotFeeRateEur.onlineFee +
            ticketQuan.value * t * pilotFeeRateEur.offlineFee +
            pilotFeeRateEur.monthYear),
          (astronaut[3].innerText =
            ticketPrice.value *
              ticketQuan.value *
              e *
              astronautFeeRateEur.onlineFee +
            ticketQuan.value * t * astronautFeeRateEur.offlineFee +
            astronautFeeRateEur.monthYear))
      : $(".chf").is(":visible")
      ? ((explorer[0].innerText = (
          ticketPrice.value * ticketQuan.value * e * explorerFeeRate.onlineFee +
          ticketQuan.value * t * explorerFeeRate.offlineFee +
          explorerFeeRate.monthMonth +
          ticketPrice.value * ticketQuan.value * e * 0.027
        )
          .toFixed(0)
          .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")),
        (pilot[0].innerText = (
          ticketPrice.value * ticketQuan.value * e * pilotFeeRate.onlineFee +
          ticketQuan.value * t * pilotFeeRate.offlineFee +
          pilotFeeRate.monthMonth +
          ticketPrice.value * ticketQuan.value * e * 0.027
        )
          .toFixed(0)
          .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")),
        (astronaut[0].innerText = (
          ticketPrice.value *
            ticketQuan.value *
            e *
            astronautFeeRate.onlineFee +
          ticketQuan.value * t * astronautFeeRate.offlineFee +
          astronautFeeRate.monthMonth +
          ticketPrice.value * ticketQuan.value * e * 0.027
        )
          .toFixed(0)
          .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")),
        (explorer[3].innerText = (
          ticketPrice.value * ticketQuan.value * e * explorerFeeRate.onlineFee +
          ticketQuan.value * t * explorerFeeRate.offlineFee +
          explorerFeeRate.monthYear +
          ticketPrice.value * ticketQuan.value * e * 0.027
        )
          .toFixed(0)
          .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")),
        (pilot[3].innerText = (
          ticketPrice.value * ticketQuan.value * e * pilotFeeRate.onlineFee +
          ticketQuan.value * t * pilotFeeRate.offlineFee +
          pilotFeeRate.monthYear +
          ticketPrice.value * ticketQuan.value * e * 0.027
        )
          .toFixed(0)
          .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")),
        (astronaut[3].innerText = (
          ticketPrice.value *
            ticketQuan.value *
            e *
            astronautFeeRate.onlineFee +
          ticketQuan.value * t * astronautFeeRate.offlineFee +
          astronautFeeRate.monthYear +
          ticketPrice.value * ticketQuan.value * e * 0.027
        )
          .toFixed(0)
          .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")))
      : $(".usd").is(":visible")
      ? ((explorer[0].innerText = (
          ticketPrice.value *
            ticketQuan.value *
            e *
            explorerFeeRateUsd.onlineFee +
          ticketQuan.value * t * explorerFeeRateUsd.offlineFee +
          explorerFeeRateUsd.monthMonth +
          ticketPrice.value * ticketQuan.value * e * 0.027
        )
          .toFixed(0)
          .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")),
        (pilot[0].innerText = (
          ticketPrice.value * ticketQuan.value * e * pilotFeeRateUsd.onlineFee +
          ticketQuan.value * t * pilotFeeRateUsd.offlineFee +
          pilotFeeRateUsd.monthMonth +
          ticketPrice.value * ticketQuan.value * e * 0.027
        )
          .toFixed(0)
          .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")),
        (astronaut[0].innerText = (
          ticketPrice.value *
            ticketQuan.value *
            e *
            astronautFeeRateUsd.onlineFee +
          ticketQuan.value * t * astronautFeeRateUsd.offlineFee +
          astronautFeeRateUsd.monthMonth +
          ticketPrice.value * ticketQuan.value * e * 0.027
        )
          .toFixed(0)
          .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")),
        (explorer[3].innerText = (
          ticketPrice.value *
            ticketQuan.value *
            e *
            explorerFeeRateUsd.onlineFee +
          ticketQuan.value * t * explorerFeeRateUsd.offlineFee +
          explorerFeeRateUsd.monthYear +
          ticketPrice.value * ticketQuan.value * e * 0.027
        )
          .toFixed(0)
          .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")),
        (pilot[3].innerText = (
          ticketPrice.value * ticketQuan.value * e * pilotFeeRateUsd.onlineFee +
          ticketQuan.value * t * pilotFeeRateUsd.offlineFee +
          pilotFeeRateUsd.monthYear +
          ticketPrice.value * ticketQuan.value * e * 0.027
        )
          .toFixed(0)
          .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")),
        (astronaut[3].innerText = (
          ticketPrice.value *
            ticketQuan.value *
            e *
            astronautFeeRateUsd.onlineFee +
          ticketQuan.value * t * astronautFeeRateUsd.offlineFee +
          astronautFeeRateUsd.monthYear +
          ticketPrice.value * ticketQuan.value * e * 0.027
        )
          .toFixed(0)
          .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")))
      : $(".eur").is(":visible") &&
        ((explorer[0].innerText = (
          ticketPrice.value *
            ticketQuan.value *
            e *
            explorerFeeRateEur.onlineFee +
          ticketQuan.value * t * explorerFeeRateEur.offlineFee +
          explorerFeeRateEur.monthMonth +
          ticketPrice.value * ticketQuan.value * e * 0.027
        )
          .toFixed(0)
          .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")),
        (pilot[0].innerText = (
          ticketPrice.value * ticketQuan.value * e * pilotFeeRateEur.onlineFee +
          ticketQuan.value * t * pilotFeeRateEur.offlineFee +
          pilotFeeRateEur.monthMonth +
          ticketPrice.value * ticketQuan.value * e * 0.027
        )
          .toFixed(0)
          .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")),
        (astronaut[0].innerText = (
          ticketPrice.value *
            ticketQuan.value *
            e *
            astronautFeeRateEur.onlineFee +
          ticketQuan.value * t * astronautFeeRateEur.offlineFee +
          astronautFeeRateEur.monthMonth +
          ticketPrice.value * ticketQuan.value * e * 0.027
        )
          .toFixed(0)
          .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")),
        (explorer[3].innerText = (
          ticketPrice.value *
            ticketQuan.value *
            e *
            explorerFeeRateEur.onlineFee +
          ticketQuan.value * t * explorerFeeRateEur.offlineFee +
          explorerFeeRateEur.monthYear +
          ticketPrice.value * ticketQuan.value * e * 0.027
        )
          .toFixed(0)
          .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")),
        (pilot[3].innerText = (
          ticketPrice.value * ticketQuan.value * e * pilotFeeRateEur.onlineFee +
          ticketQuan.value * t * pilotFeeRateEur.offlineFee +
          pilotFeeRateEur.monthYear +
          ticketPrice.value * ticketQuan.value * e * 0.027
        )
          .toFixed(0)
          .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")),
        (astronaut[3].innerText = (
          ticketPrice.value *
            ticketQuan.value *
            e *
            astronautFeeRateEur.onlineFee +
          ticketQuan.value * t * astronautFeeRateEur.offlineFee +
          astronautFeeRateEur.monthYear +
          ticketPrice.value * ticketQuan.value * e * 0.027
        )
          .toFixed(0)
          .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,"))),
    (explorer[2].innerText = (
      (explorer[0].innerText.replace(",", "") /
        (ticketPrice.value * ticketQuan.value)) *
      100
    ).toFixed(1)),
    (pilot[2].innerText = (
      (pilot[0].innerText.replace(",", "") /
        (ticketPrice.value * ticketQuan.value)) *
      100
    ).toFixed(1)),
    (astronaut[2].innerText = (
      (astronaut[0].innerText.replace(",", "") /
        (ticketPrice.value * ticketQuan.value)) *
      100
    ).toFixed(1)),
    Number(explorer[2].innerText) > 100)
  )
    for (explorer[2].innerText = "-", i = 0; i < precents.length; i++)
      precents[i].style.display = "none";
  else
    for (i = 0; i < precents.length; i++) precents[i].style.display = "block";
  if (Number(pilot[2].innerText) > 100)
    for (pilot[2].innerText = "-", i = 0; i < precents.length; i++)
      precents[i].style.display = "none";
  else
    for (i = 0; i < precents.length; i++) precents[i].style.display = "block";
  if (Number(astronaut[2].innerText) > 100)
    for (astronaut[2].innerText = "-", i = 0; i < precents.length; i++)
      precents[i].style.display = "none";
  else
    for (i = 0; i < precents.length; i++) precents[i].style.display = "block";
  if (
    ((explorer[1].innerText = (
      explorer[0].innerText.replace(",", "") * monthAmount.value
    )
      .toFixed(0)
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")),
    (pilot[1].innerText = (
      pilot[0].innerText.replace(",", "") * monthAmount.value
    )
      .toFixed(0)
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")),
    (astronaut[1].innerText = (
      astronaut[0].innerText.replace(",", "") * monthAmount.value
    )
      .toFixed(0)
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")),
    (explorer[5].innerText = (
      (explorer[3].innerText.replace(",", "") /
        (ticketPrice.value * ticketQuan.value)) *
      100
    ).toFixed(1)),
    (pilot[5].innerText = (
      (pilot[3].innerText.replace(",", "") /
        (ticketPrice.value * ticketQuan.value)) *
      100
    ).toFixed(1)),
    (astronaut[5].innerText = (
      (astronaut[3].innerText.replace(",", "") /
        (ticketPrice.value * ticketQuan.value)) *
      100
    ).toFixed(1)),
    Number(explorer[5].innerText) > 100)
  )
    for (explorer[5].innerText = "-", i = 0; i < precents.length; i++)
      precents[i].style.display = "none";
  else
    for (i = 0; i < precents.length; i++) precents[i].style.display = "block";
  if (Number(pilot[5].innerText) > 100)
    for (pilot[5].innerText = "-", i = 0; i < precents.length; i++)
      precents[i].style.display = "none";
  else
    for (i = 0; i < precents.length; i++) precents[i].style.display = "block";
  if (Number(astronaut[5].innerText) > 100)
    for (astronaut[5].innerText = "-", i = 0; i < precents.length; i++)
      precents[i].style.display = "none";
  else
    for (i = 0; i < precents.length; i++) precents[i].style.display = "block";
  (explorer[4].innerText = (12 * explorer[3].innerText.replace(",", ""))
    .toFixed(0)
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")),
    (pilot[4].innerText = (12 * pilot[3].innerText.replace(",", ""))
      .toFixed(0)
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")),
    (astronaut[4].innerText = (12 * astronaut[3].innerText.replace(",", ""))
      .toFixed(0)
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,"));
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
