import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import MainLayout from "./layout/MainLayout"
import StaySearchResult from "./pages/stays/StaySearchResult"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/results" element={<StaySearchResult/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
