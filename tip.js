function tip() {
    var Bill = document.getElementById("bill_amt").value;
    var serve = document.getElementById("serve").value;
    var peep = document.getElementById("peep").value;

    // Validate
    if (Bill === "" || serve == 0) {
        alert("Please Enter A Bill Amount");
        return;
    }

    // Prevent Negative Input

    Bill.onkeydown, peep.onkeydown= function (e) {
        if (!((e.keyCode > 95 && e.keyCode < 106)
            || (e.keyCode > 47 && e.keyCode < 58)
            || e.keyCode == 8)) {
            return false;
        }
    }

    //Check if number of people less than 1
    if (peep === "" || peep <= 1) {
        peep = 1;
        document.getElementById("num").style.display = "none";
    }

    //Tip Calculation
    var total = (Bill * serve) / peep;

    //Rounding Off
    total = (total * 100) / 100;

    var totalShow = total.toFixed(2);

    //Displaying Tip

    document.getElementById("tip").innerHTML = totalShow;
}