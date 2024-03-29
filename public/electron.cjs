const { app, BrowserWindow } = require('electron');
const path = require('path');
require('./server.js')
// Crea la ventana principal
function createWindow() {
  const mainWindow = new BrowserWindow({ width: 1300, height: 900 });

  const isDevPromise = import('electron-is-dev');
  isDevPromise.then(({ default: isDev }) => {
    mainWindow.loadURL(isDev ? 'http://localhost:5173' : `file://${path.join(__dirname, '../build/index.html')}`);
    // Abre las herramientas de desarrollo si estamos en modo desarrollo
    // if (isDev) {
    //   mainWindow.webContents.openDevTools();
    // }
  }).catch(error => {
    console.error('Error al importar electron-is-dev:', error);
    // Trata el error aquí si es necesario
  });
  
  mainWindow.on('closed', () => mainWindow = null);
}

// Cuando la aplicación esté lista, crea la ventana principal
app.on('ready', createWindow);

// Cierra la aplicación cuando todas las ventanas estén cerradas, excepto en macOS
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// Crea una nueva ventana cuando la aplicación esté activada, si no hay ventanas abiertas
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
