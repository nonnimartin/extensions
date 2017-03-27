function closeIt() {
  chrome.tabs.executeScript({
    file: 'closeFields.js'
  }); 
}
document.getElementById('clickme').addEventListener('click', closeIt);
