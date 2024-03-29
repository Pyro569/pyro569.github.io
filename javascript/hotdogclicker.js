var hotdogs = 0;
var hps = 0;
var hpc = 1;

var vendorHPS = 2;
var storeHPS = 15;
var factoryHPS = 50;
var carnivalHPS = 75;
var powerplantHPS = 150;
var countryHPS = 250;

var vendors = 0;
var stores = 0;
var factories = 0;
var carnivals = 0;
var powerplants = 0;
var countries = 0;


function updateStats() {
    document.getElementById("hotdogCounter").textContent = "Hotdogs: " + display(hotdogs);
    hpc = Math.round((hps / 100) + 1);
    document.getElementById("hpc").textContent = "Hotdogs Per Click: " + display(hpc);
    document.getElementById("hps").textContent = "Hotdogs Per Second: " + display(hps);
}

function updateCosts() {
    document.getElementById("buyVendor").textContent = "Buy Hotdog Vendor (" + display(((vendors * 12) + 12)) + " hotdogs)";
    document.getElementById("buyStore").textContent = "Buy Hotdog Store (" + display(((stores * 150) + 150)) + " hotdogs)";
    document.getElementById("buyFactory").textContent = "Buy Hotdog Factory (" + display(((factories * 500) + 500)) + " hotdogs)";
    document.getElementById("buyCarnival").textContent = "Buy Hotdog Carnival (" + display(((carnivals * 1500) + 1500)) + " hotdogs)";
    document.getElementById("buyPowerPlant").textContent = "Buy Hotdog Power Plant (" + display(((powerplants * 5500) + 5500)) + " hotdogs)";
    document.getElementById("buyCountry").textContent = "Buy Hotdog Country (" + display(((countries * 25000) + 25000)) + " hotdogs)";
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
    document.getElementById("hotdogCounter").textContent = "Hotdogs: " + display(hotdogs);
    updateStats();
}

function startClicker() {
    hotdogs = 0;
}

function buyVendor() {
    if (hotdogs >= (vendors*12)+12) {
        hotdogs -= (vendors*12)+12;
        hps += vendorHPS;
        vendors += 1;
        update();
    }
}

function buyStore() {
    if (hotdogs >= (stores*150)+150) {
        hotdogs -= ((stores*150)+150);
        hps += storeHPS;
        stores += 1;
        update();
    }
}

function buyFactory() {
    if (hotdogs >= (factories * 500) + 500) {
        hotdogs -= ((factories * 500) + 500);
        hps += factoryHPS;
        factories += 1;
        update();
    }
}

function buyCarnival() {
    if (hotdogs >= (carnivals * 1500) + 1500) {
        hotdogs -= ((carnivals * 1500) + 1500);
        hps += carnivalHPS;
        carnivals += 1;
        update();
    }
}

function buyPowerPlant() {
    if (hotdogs >= (powerplants * 5500) + 5500) {
        hotdogs -= ((powerplants * 5500) + 5500);
        hps += powerplantHPS;
        powerplants += 1;
        update();
    }
}

function buyCountry() {
    if (hotdogs >= (countries * 25000) + 25000) {
        hotdogs -= ((countries * 25000) + 25000);
        hps += countryHPS;
        countries += 1;
        update();
    }
}

function display(number) {
		if(number < 1000000) {
    		return number;
    } else if(number   < 1000000000) {
    		return Math.round(number / 10000) / 100 + " M";
    } else if(number   < 1000000000000) {
    		return Math.round(number / 10000000) / 100 + " B";
    } else if(number   < 1000000000000000) {
    		return Math.round(number / 10000000000) / 100 + " T";
    } else if(number   < 1000000000000000000) {
    		return Math.round(number / 10000000000000) / 100 + " Quad";
    } else if(number   < 1000000000000000000000) {
    		return Math.round(number / 10000000000000000) / 100 + " Quin";
    } else if(number   < 1000000000000000000000000) {
    		return Math.round(number / 10000000000000000000) / 100 + " Sex";
    } else if(number   < 1000000000000000000000000000) {
    		return Math.round(number / 10000000000000000000000) / 100 + " Sep";
    } else if(number   < 1000000000000000000000000000000) {
    		return Math.round(number / 10000000000000000000000000) / 100 + " Oct";
    } else if(number   < 1000000000000000000000000000000000) {
    		return Math.round(number / 10000000000000000000000000000) / 100 + " Non";
    } else if(number   < 1000000000000000000000000000000000000) {
    		return Math.round(number / 10000000000000000000000000000000) / 100 + " Dec";
    } else if(number   < 1000000000000000000000000000000000000000) {
    	  return Math.round(number / 10000000000000000000000000000000000) / 100 + " Undec";
    } else if(number   < 1000000000000000000000000000000000000000000) {
    	  return Math.round(number / 10000000000000000000000000000000000000) / 100 + " Duodec";
    } else if(number   < 1000000000000000000000000000000000000000000000) {
    	  return Math.round(number / 10000000000000000000000000000000000000000) / 100 + " Tredec";
    } else if(number   < 1000000000000000000000000000000000000000000000000) {
    	  return Math.round(number / 10000000000000000000000000000000000000000000) / 100 + " Quatdec";
    } else if(number   < 1000000000000000000000000000000000000000000000000000) {
    	  return Math.round(number / 10000000000000000000000000000000000000000000000) / 100 + " Quindec";
    } else if(number   < 1000000000000000000000000000000000000000000000000000000) {
    	  return Math.round(number / 10000000000000000000000000000000000000000000000000) / 100 + " Sexdec";
    } else if(number   < 1000000000000000000000000000000000000000000000000000000000) {
    	  return Math.round(number / 10000000000000000000000000000000000000000000000000000) / 100 + " Septen";
    } else if(number   < 1000000000000000000000000000000000000000000000000000000000000) {
    	  return Math.round(number / 10000000000000000000000000000000000000000000000000000000) / 100 + " Octodec";
    } else if(number   < 1000000000000000000000000000000000000000000000000000000000000000) {
    	  return Math.round(number / 10000000000000000000000000000000000000000000000000000000000) / 100 + " Novendec";
    } else if(number   < 1000000000000000000000000000000000000000000000000000000000000000000) {
    	  return Math.round(number / 10000000000000000000000000000000000000000000000000000000000000) / 100 + " Vigin";
    } else if(number   < 1000000000000000000000000000000000000000000000000000000000000000000000) {
    	  return Math.round(number / 10000000000000000000000000000000000000000000000000000000000000000) / 100 + " Unvigin";
    } else if(number   < 1000000000000000000000000000000000000000000000000000000000000000000000000) {
    	  return Math.round(number / 10000000000000000000000000000000000000000000000000000000000000000000) / 100 + " That's A Lot of Hotdogs";
    }
}

function save() {
    makeCookie("hotdogs", hotdogs);
    makeCookie("hps", hps);
    makeCookie("hpc", hpc);
    makeCookie("vendors", vendors);
    makeCookie("stores", stores);
    makeCookie("carnivals", carnivals);
    makeCookie("powerplants", powerplants);
    makeCookie("countries", countries);
}

function load() {
    hotdogs = getCookie("hotdogs");
    hps = getCookie("hps")
    hpc = getCookie("hpc");
    vendors = getCookie("vendors");
    stores = getCookie("stores");
    carnivals = getCookie("carnivals");
    powerplants = getCookie("powerplants");
    countries = getCookie("countries");
    update();
}

function getCookie(cname) {
    var name = cname + '=';
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return '';
}

function getCookieValue(name) {
    return parseInt(getCookie(name));
}

function makeCookie(name, value) {
    document.cookie = name + "=" + value;
}