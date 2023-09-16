$(document).ready(function () {
    document.getElementById("ctl00_MainContent_btnDoIt").addEventListener("click", function () {
    var CardData = {
        CardNumber: document.getElementById("ctl00_MainContent_txtCardNum").value,
        year: document.getElementById("ctl00_MainContent_dlYYYY").value,
        Month: document.getElementById("ctl00_MainContent_dlMM").value,
        ccv2: document.getElementById("ctl00_MainContent_txtCVV2").value,
        MainContact: document.getElementById("ctl00_MainContent_txtID").value
    }
    alert("Card Number : " + CardData.CardNumber + "\n" + "year : " + CardData.year + "\n" + "Month : " + CardData.Month + "\n" + "ccv2 : " + CardData.ccv2 + "\n" + "MainContact : " + CardData.MainContact);
}, false);
});
