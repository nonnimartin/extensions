function execute() {
  chrome.tabs.executeScript({
    file: 'duplicate.js'
  }); 
}
document.getElementById('clickme').addEventListener('click', execute);
