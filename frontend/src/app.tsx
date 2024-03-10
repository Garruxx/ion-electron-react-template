import { useState } from 'react'
import icon from './assets/icon.png'
export const App = () => {
	const [userOption, setUserOption] = useState('')
	return (
		<div
			onClick={() => ion.showAlert('Hola desde ion').then(setUserOption)}
		>
			<img src={icon} alt="" />
			<h1>ION</h1>
			<p>{userOption != 'close' && userOption}</p>
		</div>
	)
}
