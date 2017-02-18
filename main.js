const { app, BrowserWindow, globalShortcut } = require('electron')

let mainWindow

const createWindow = () => {
  mainWindow = new BrowserWindow({width: 1000, height: 800})
  mainWindow.loadURL(`file://${__dirname}/src/index.html`)

  // mainWindow.webContents.openDevTools()

  // Register a 'CommandOrControl+S' shortcut listener.
  const ret = globalShortcut.register('CommandOrControl+S', () => {
    console.log('CommandOrControl+S is pressed')
    mainWindow && mainWindow.webContents.send('saveTodos', null);
  })

  if (!ret) {
    console.log('registration failed')
  }

  // Check whether a shortcut is registered.
  console.log(globalShortcut.isRegistered('CommandOrControl+S'))

  mainWindow.on('closed', function () {
    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if(process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})