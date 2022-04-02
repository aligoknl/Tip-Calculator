



function fivePercent() {
    let bill= parseFloat(document.getElementById("bill-input").value);
    let person= parseFloat(document.getElementById("people-input").value);
    document.getElementById("result-amount").innerText= "$"+ ((bill * 0.05) / person).toFixed(2);
    document.getElementById("result-total").innerText = "$"+ ((bill / person) + (bill * 0.05 / person)).toFixed(2);
}

function tenPercent() {
    let bill= parseFloat(document.getElementById("bill-input").value);
    let person= parseFloat(document.getElementById("people-input").value);
    document.getElementById("result-amount").innerText = "$"+  ((bill * 0.1) / person).toFixed(2);
    document.getElementById("result-total").innerText = "$"+ ((bill / person) + (bill * 0.1 / person)).toFixed(2);
}

function fifteenPercent() {
    let bill= parseFloat(document.getElementById("bill-input").value);
    let person= parseFloat(document.getElementById("people-input").value);
    document.getElementById("result-amount").innerText = "$"+ ((bill * 0.15) / person).toFixed(2);
    document.getElementById("result-total").innerText = "$"+ ((bill / person) + (bill * 0.15 / person)).toFixed(2);
}

function twentyPercent() {
    let bill= parseFloat(document.getElementById("bill-input").value);
    let person= parseFloat(document.getElementById("people-input").value);
    document.getElementById("result-amount").innerText = "$"+ ((bill * 0.2) / person).toFixed(2);
    document.getElementById("result-total").innerText = "$"+ ((bill / person) + (bill * 0.2 / person)).toFixed(2);
}

function twentyfivePercent() {
    let bill= parseFloat(document.getElementById("bill-input").value);
    let person= parseFloat(document.getElementById("people-input").value);
    document.getElementById("result-amount").innerText = "$"+ ((bill * 0.25 / person)).toFixed(2);
    document.getElementById("result-total").innerText = "$"+ ((bill / person) + (bill * 0.25 / person)).toFixed(2);
}

function customfunc() {
    let bill= parseFloat(document.getElementById("bill-input").value);
    let person= parseFloat(document.getElementById("people-input").value);
    let customEl = parseFloat(document.getElementById("custom").value);
    document.getElementById("result-amount").innerText = "$"+ ((bill * (customEl * 0.01) / person)).toFixed(2);
    document.getElementById("result-total").innerText = "$"+ ((bill / person) + (bill * (customEl * 0.01) / person)).toFixed(2);
}

function resetfunc() {
    document.getElementById("bill-input").value="";
    document.getElementById("people-input").value="";
    document.getElementById("result-amount").innerText="$0.00";
    document.getElementById("result-total").innerText="$0.00";
    
}