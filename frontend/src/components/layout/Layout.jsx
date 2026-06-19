import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import ChatWidget from '../dashboard/ChatWidget'
import useAuth from '../../hooks/useAuth'

export default function Layout() {
  const { user } = useAuth()

  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      {user && <ChatWidget />}
    </>
  )
}
