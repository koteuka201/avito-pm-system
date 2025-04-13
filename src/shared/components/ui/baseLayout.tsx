import { Outlet } from "react-router-dom"
import { Header } from "@widgets/header"

export const BaseLayout=()=>{
  
  return(
    <div className="p-4">
      <Header />
      <main className="mt-5">
        <Outlet />
      </main>
    </div>
  ) 
}