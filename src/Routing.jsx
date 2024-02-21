import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { MessageForm } from './Components/MessageForm'
import { Home } from './Pages/Home'

export const Routing = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/message" element={<MessageForm />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
