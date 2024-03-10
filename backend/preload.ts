import { contextBridge, ipcRenderer } from 'electron'
import { ShowAlert } from './events/dialog/alert'
interface Events {
	showAlert: ShowAlert
}
const events: Events = {
	showAlert: (message) => ipcRenderer.invoke('alert', message),
}

contextBridge.exposeInMainWorld('ion', events)
export type { Events }
