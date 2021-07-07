const version = chrome.app.getDetails().version;
document.getElementById('version-id').innerHTML = `v${version}`;