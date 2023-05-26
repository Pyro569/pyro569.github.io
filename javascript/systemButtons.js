var maxed = false;

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