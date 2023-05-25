var hotdogs = 0;
var hps = 0;
var hpc = 1;
var vendorHPS = 2;

var vendors = 0;


function updateStats() {
    document.getElementById("hotdogCounter").textContent = "Hotdogs: " + hotdogs;
}

function updateCosts() {
    document.getElementById("buyVendor").textContent = "Buy Hotdog Vendor (" + ((vendors * 12)+12) + " hotdogs)";
}

function update() {
    updateStats();
    updateCosts();
}

function addHPS() {
    hotdogs += hps;
}

function clickHotdog() {
    hotdogs += hpc;
    document.getElementById("hotdogCounter").textContent = "Hotdogs: " + hotdogs;
    updateStats();
}

function startClicker() {
    hotdogs = 0;
}

function buyVendor() {
    if (hotdogs >= (vendors*12)+12) {
        hotdogs -= 12;
        hps += vendorHPS;
        vendors += 1;
        update();
    }
}