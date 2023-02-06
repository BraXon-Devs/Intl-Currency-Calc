const { app, BrowserWindow } = require('electron');

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
  // mainWindow.webContents.openDevTools();
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
