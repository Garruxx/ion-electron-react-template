import { BrowserWindowConstructorOptions } from 'electron'
import { join } from 'path'

export const WINDOW_CONFIG: BrowserWindowConstructorOptions = {
	width: 1280,
	height: 768,
	minWidth: 800,
	minHeight: 600,
	titleBarStyle: 'hidden',
	icon: join(__dirname, '../icon.png'),
	titleBarOverlay: {
		color: '#0d051a',
		symbolColor: '#4D4752',
		height: 32,
	},

	webPreferences: {
		preload: join(__dirname, './preload.js'),
	},
}
