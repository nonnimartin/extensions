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

document.getElementById('clickme').addEventListener('click', duplicate);

document.getElementById('clickme2').addEventListener('click', close);
