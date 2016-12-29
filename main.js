
const { app, BrowserWindow } = require('electron')

require('electron-reload')(__dirname, {
  electron: require('electron-prebuilt')
});

let mainWindow

app.on('ready', () => {
  mainWindow = new BrowserWindow({width: 800, height: 600})
  mainWindow.loadURL(`file://${__dirname}/src/index.html`)

  // mainWindow.webContents.openDevTools()

  mainWindow.on('closed', function () {
    mainWindow = null
  })
})

app.on('window-all-closed', () => {
  if(process.platform !== 'darwin') {
    app.quit()
  }
})