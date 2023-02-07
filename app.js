// @ts-nocheck
const { app, BrowserWindow } = require('electron');
const packageJson = require('./package.json');
const fs = require("fs");

let mainWindow;

function createWindow() {
mainWindow = new BrowserWindow({
width: 860,
height: 680,
resizable: false,
webPreferences: {
nodeIntegration: true
}
});

mainWindow.loadFile('app/index.html');

// Disable dev tools
mainWindow.webContents.closeDevTools();
// Remove the menu bar
mainWindow.setMenu(null);
// Set menu bar visibility to false
mainWindow.setMenuBarVisibility(false);

mainWindow.on('closed', function () {
mainWindow = null
});
}

app.on('ready', createWindow);

app.on('window-all-closed', function () {
if (process.platform !== 'darwin') app.quit();
});

app.on('activate', function () {
if (mainWindow === null) createWindow();
});

app.on('browser-window-created', (event, window) => {
// Disable dev tools
window.webContents.closeDevTools();
// Remove the menu bar
window.setMenu(null);
// Set menu bar visibility to false
window.setMenuBarVisibility(false);
});

// update the version number in the package.json file
packageJson.version = process.env.npm_package_version;

// write the updated packageJson object to the package.json file
fs.writeFileSync('./package.json', JSON.stringify(packageJson), function (err) {
if (err) throw err;
console.log('Version number updated in package.json');
});

// read the index.html file
fs.readFile('./app/index.html', 'utf8', function (err, data) {
if (err) throw err;

// find the span element with the id "version" and update its text content
const updatedData = data.replace(/<span id="version">.*<\/span>/, `<span id="version">${packageJson.version}</span>`);


// write the updated index.html file
fs.writeFileSync('./app/index.html', updatedData, function (err) {
  if (err) throw err;
  console.log('Version number updated in index.html');
});
})