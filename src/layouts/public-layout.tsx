import { Header } from "@/components/header"
import Footer from "@/components/footer"
import { Outlet } from "react-router-dom"
import AuthHandler from "@/handlers/auth-handler"

export const PublicLayout = () => {
  return (
    <div className='w-full'>
      <AuthHandler />
      <Header />

      <Outlet/>

      <Footer />
    </div>
  )
}


