const { app, BrowserWindow, ipcMain, shell } = require('electron');
const path = require('path');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1280,
    height: 800,
    minWidth: 360,
    minHeight: 500,
    title: "F1 Pit Wall",
    frame: false,             // Completely frameless app!
    transparent: false,
    autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  mainWindow.loadFile('index.html');

  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    shell.openExternal(url);
    return { action: 'deny' };
  });
}

app.whenReady().then(() => {
  createWindow();
  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});

// App Controls
ipcMain.on('app-close', () => app.quit());
ipcMain.on('app-minimize', () => mainWindow.minimize());
ipcMain.on('app-maximize', () => {
  if (mainWindow.isMaximized()) mainWindow.unmaximize();
  else mainWindow.maximize();
});

// Morphing Window Controls
ipcMain.on('morph-to-widget', () => {
  mainWindow.unmaximize(); // ensure we have precise control
  mainWindow.setSize(360, 480);
  mainWindow.setAlwaysOnTop(true);
});

ipcMain.on('morph-to-dash', () => {
  mainWindow.setSize(1280, 800);
  mainWindow.setAlwaysOnTop(false);
  mainWindow.center();
});
