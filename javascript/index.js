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
  document.getElementById('textFrame').style.display = "block";
  document.getElementById('textFrame').setAttribute('src', page);
  document.getElementById('operationButtons').style.display = "block";
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