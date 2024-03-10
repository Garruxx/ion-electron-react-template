import { PluginOption, defineConfig, InlineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import electron, { ElectronSimpleOptions } from 'vite-plugin-electron/simple'
import { join } from 'path'

const build: InlineConfig['build'] = {
	outDir: join(__dirname, 'App'),
	minify: true,
}

const ELECTRON_CONFIG: ElectronSimpleOptions = {
	main: { entry: 'backend/index.ts', vite: { build } },
	preload: { input: 'backend/preload.ts', vite: { build } },
}

const plugins: PluginOption = [react(), electron(ELECTRON_CONFIG)]
export default defineConfig({ plugins, root: 'frontend', build })
