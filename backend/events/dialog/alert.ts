import { ipcMain, dialog } from 'electron'

export type ShowAlert = (message: string) => Promise<string>
export const showAlertHandle = () => {
	ipcMain.handle('alert', (_, message: string) => {
		const buttons = ['HOLA!', 'Hello world 😎', 'Ok', 'close']
		const userOption = dialog.showMessageBoxSync({
			message,
			buttons,
		})
		return buttons[userOption]
	})
}
