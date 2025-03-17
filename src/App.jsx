import { BrowserRouter } from 'react-router'
import { ToastContainer } from 'react-toastify'
import AppRoutes from './routes/routes'

function App() {

  return (

    <BrowserRouter>
      <ToastContainer />
      <AppRoutes />
    </BrowserRouter>

  )
}

export default App
