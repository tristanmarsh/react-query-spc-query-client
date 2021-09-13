import { render } from 'react-dom'
import { installApp } from './app/install_app'
import { installMockApiClient } from './api/mock_api_client'
import { createSyntheticDelay } from './api/synthetic_delay'
import './styles.css'

const delay = createSyntheticDelay(500)
const apiClient = installMockApiClient(delay)
const App = installApp(apiClient)

const rootElement = document.getElementById('root')
render(<App />, rootElement)
