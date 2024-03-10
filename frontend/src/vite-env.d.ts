/// <reference types="vite/client" />
import type { Events } from '../../backend/preload'

declare global {
	const ion: Events
}
