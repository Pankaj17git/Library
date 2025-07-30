import { Route, Routes } from "react-router"
import RegisterForm from "./pages/Register"
import LoginForm from "./pages/Login"
import StudentDashboard from "./pages/student/StudentDashboard"


function App() {

  return (
    <>
      <Routes>
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/" element={<LoginForm />} />
        <Route path="/studentDashboard" element={<StudentDashboard/>}/>
      </Routes>
    </>
  )
}

export default App
