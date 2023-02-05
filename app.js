const { app, BrowserWindow } =  require('electron');

let  mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 850,
    height: 660,
    webPreferences: {
      nodeIntegration: true
    }
  });

  mainWindow.loadFile('app/index.html');

  mainWindow.webContents.closeDevTools();
  mainWindow.setMenu(null);
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

