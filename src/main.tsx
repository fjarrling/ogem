import ReactDOM from 'react-dom/client'
import App from './App'
import '@/styles/index.css'
import '@/styles/main.scss'


const rootElement = document.getElementById('root')
if (!rootElement) throw new Error('Root element not found')

ReactDOM.createRoot(rootElement).render(
    <App />
)