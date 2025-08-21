import { Routes, Route} from "react-router-dom"
import Navbar from "./general/navbar";
import Homepage from "./Pages/homepage";


function App() {

  return (
    <>

      <Routes>
        <Route index element={<Homepage/>} />
      </Routes>
    </>
  )
}

export default App
