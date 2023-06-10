var maxed = false;

function testJS() {
  alert("JavaScript does indeed work");
 }

function shrek() {
  alert("Shrek");
}

function home() {
  window.location = "index.html";
  console.log("Returning to homepage");
}

function redirect(page) {
  window.location.href = page;
}

function openTextFile(page) {
  window.parent.document.getElementById('textFrame').style.display = "block";
  window.parent.document.getElementById('textFrame').setAttribute('src', page);
  console.log('Opened text file ' + page + ' on desktop');
}

function closeApp() {
  window.parent.document.getElementById('textFrame').style.display = "none";
  window.parent.document.getElementById('operationButtons').style.display = "none";
  console.log('closing app');
}

function maximizeApp() {
    if (maxed == false) {
        maxed = true;
        window.parent.document.getElementById('textFrame').style.width = window.parent.width;
        window.parent.document.getElementById('textFrame').style.height = window.parent.height;
    } else {
        maxed = false;
        window.parent.document.getElementById('textFrame').style.width = window.parent.width/4;
        window.parent.document.getElementById('textFrame').style.height = window.parent.height / 4;
    }
}

function openGame(page) {
  window.parent.document.getElementById('textFrame').style.display = "block";
  window.parent.document.getElementById('textFrame').setAttribute('src', page);
  console.log('Opened game ' + page + ' on desktop');
}

function openGameFullscreen(page) {
  window.parent.location.href = page;
}

function internetExplorer(){
  document.getElementById('textFrame').style.display = "block";
  window.parent.document.getElementById('textFrame').setAttribute('src', "https://www.google.com/custom?q=");
}