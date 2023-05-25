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
  document.getElementById('textFrame').setAttribute('data', page);
  console.log('Opened text file ' + page + ' on desktop');
}