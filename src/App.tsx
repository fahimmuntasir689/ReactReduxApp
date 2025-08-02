import { Link, Outlet } from "react-router"


function App() {


  return (
    <>
      <div className="flex gap-10">
        <Link to='/'>Home</Link>
        <Link to='/tasks'>Tasks</Link>
        <Link to='/users'>Users</Link>
      </div>
      <Outlet></Outlet>
    </>
  )
}

export default App
