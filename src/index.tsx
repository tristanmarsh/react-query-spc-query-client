import * as React from 'react'
import { render } from 'react-dom'
import { installApp } from './app/install_app'
import { installMockApiClient } from './api/mock_api_client'
import { createSyntheticDelay } from './api/synthetic_delay'
import { QueryClient, QueryClientProvider } from 'react-query'
import './styles.css'
import { ApiClient } from './api/api_client'
import { ReactQueryDevtools } from 'react-query/devtools'

export const ApiClientContext = React.createContext<ApiClient | undefined>(
  undefined
)
const ApiClientProvider = ApiClientContext.Provider

const queryClient = new QueryClient()
const delay = createSyntheticDelay(500)
const apiClient = installMockApiClient(delay)
const App = installApp(apiClient, queryClient)

const rootElement = document.getElementById('root')

render(
  <QueryClientProvider client={queryClient}>
    <ApiClientProvider value={apiClient}>
      <App />
      <ReactQueryDevtools />
    </ApiClientProvider>
  </QueryClientProvider>,
  rootElement
)
