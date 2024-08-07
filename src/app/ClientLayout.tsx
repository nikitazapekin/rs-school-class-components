 
import Providers from "../redux/Provider"
import MainLayout from "./components/MainLayout"
import React from "react"
export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return <>
  <Providers>
  <MainLayout>

  {children}
  </MainLayout>
  </Providers>

  </>
}

 