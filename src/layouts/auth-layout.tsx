import { Outlet } from "react-router-dom"

const AuthenticationLayout = () => {
  return (
     <div className='w-screen h-screen overflow-hidden flex items-center justify-center relative'>
      
      <img src="https://wallpaperaccess.com/full/4213570.png" className="absolute w-full h-full object-cover opacity-10"  alt="img" />

      <Outlet/>

     
    </div>
  )
}

export default AuthenticationLayout
