const { app, BrowserWindow } = require('electron/main')
const path = require('node:path')

let scale = 1;
function createWindow() {
  const win = new BrowserWindow({
    titleBarStyle: "hidden",
    width: 232 * scale,
    height: 322 * scale,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    },
    resizable: false,
  })

  win.loadFile('index.html')
}

app.whenReady().then(() => {

  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})