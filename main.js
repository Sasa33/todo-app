const { app, BrowserWindow, globalShortcut } = require('electron')

require('electron-reload')(__dirname, {
  electron: require('electron-prebuilt')
});

let mainWindow

app.on('ready', () => {
  mainWindow = new BrowserWindow({width: 800, height: 600})
  mainWindow.loadURL(`file://${__dirname}/src/index.html`)

  mainWindow.webContents.openDevTools()

  // Register a 'CommandOrControl+S' shortcut listener.
  const ret = globalShortcut.register('CommandOrControl+S', () => {
    console.log('CommandOrControl+S is pressed')
    mainWindow.webContents.send('saveTodos', null);
  })

  if (!ret) {
    console.log('registration failed')
  }

  // Check whether a shortcut is registered.
  console.log(globalShortcut.isRegistered('CommandOrControl+S'))

  mainWindow.on('closed', function () {
    mainWindow = null
  })
})

app.on('window-all-closed', () => {
  if(process.platform !== 'darwin') {
    app.quit()
  }
})