import { BrowserWindow, app } from 'electron'
import { WINDOW_CONFIG } from './config/window.config'
import { join } from 'path'
import { events } from './events/events'

const LOCAL_VITE_URL = process.env.VITE_DEV_SERVER_URL
let win: BrowserWindow | null
const createWindow = () => {
	win = new BrowserWindow(WINDOW_CONFIG)
	if (LOCAL_VITE_URL) win.loadURL(LOCAL_VITE_URL)
	else win.loadFile(join(__dirname, 'index.html'))
}

app.on('ready', () => {
	events()
	createWindow()
})

app.on('window-all-closed', () => {
	app.quit()
})
app.on('activate', () => {
	BrowserWindow.getAllWindows().length === 0 && createWindow()
})

export const mainWindow = () => win
