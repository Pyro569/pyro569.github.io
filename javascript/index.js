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
  document.getElementById('textFrame').style.display = "none";
  document.getElementById('operationButtons').style.display = "none";
  console.log('closing app');
}

function maximizeApp() {
  
}

function openGame(page) {
  document.getElementById('textFrame').style.display = "block";
  document.getElementById('textFrame').setAttribute('src', page);
  console.log('Opened game ' + page + ' on desktop');
}