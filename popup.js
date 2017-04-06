function duplicate() {
  chrome.tabs.executeScript({
    file: 'duplicate.js'
  }); 
}

function close() {
  chrome.tabs.executeScript({
    file: 'closeFields.js'
  }); 
}

function optOut() {
  chrome.tabs.executeScript({
    file: 'optOut.js'
  }); 
}

document.getElementById('clickDupe').addEventListener('click', duplicate);

document.getElementById('clickClose').addEventListener('click', close);

document.getElementById('clickOpt').addEventListener('click', optOut);
