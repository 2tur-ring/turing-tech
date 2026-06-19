import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import ProtectedRoute from './components/auth/ProtectedRoute'
import DashboardLayout from './components/dashboard/DashboardLayout'
import Home from './pages/public/Home'
import About from './pages/public/About'
import Services from './pages/public/Services'
import Products from './pages/public/Products'
import ProductDetail from './pages/public/ProductDetail'
import ProductRoadmap from './pages/public/ProductRoadmap'
import Blog from './pages/public/Blog'
import Resources from './pages/public/Resources'
import Downloads from './pages/public/Downloads'
import Support from './pages/public/Support'
import Careers from './pages/public/Careers'
import Contact from './pages/public/Contact'
import Setores from './pages/public/Setores'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import DashboardOverview from './pages/dashboard/Overview'
import DashboardProfile from './pages/dashboard/Profile'
import DashboardDownloads from './pages/dashboard/DashboardDownloads'
import DashboardLicenses from './pages/dashboard/DashboardLicenses'
import DashboardTickets from './pages/dashboard/DashboardTickets'
import DashboardInvoices from './pages/dashboard/DashboardInvoices'
import ERPLayout from './components/dashboard/ERPLayout'
import ERPOverview from './pages/erp/ERPOverview'
import Vendas from './pages/erp/Vendas'
import Financas from './pages/erp/Financas'
import Stock from './pages/erp/Stock'
import Compras from './pages/erp/Compras'
import RH from './pages/erp/RH'
import CRM from './pages/erp/CRM'
import Contabilidade from './pages/erp/Contabilidade'
import SmartAI from './pages/erp/SmartAI'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/roadmap" element={<ProductRoadmap />} />
        <Route path="/products/:slug" element={<ProductDetail />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/downloads" element={<Downloads />} />
        <Route path="/support" element={<Support />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/setores" element={<Setores />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
      <Route element={<ProtectedRoute><DashboardLayout /></ProtectedRoute>}>
        <Route path="/dashboard" element={<DashboardOverview />} />
        <Route path="/dashboard/perfil" element={<DashboardProfile />} />
        <Route path="/dashboard/downloads" element={<DashboardDownloads />} />
        <Route path="/dashboard/licencas" element={<DashboardLicenses />} />
        <Route path="/dashboard/tickets" element={<DashboardTickets />} />
        <Route path="/dashboard/faturas" element={<DashboardInvoices />} />
      </Route>
      <Route element={<ProtectedRoute><ERPLayout /></ProtectedRoute>}>
        <Route path="/erp" element={<ERPOverview />} />
        <Route path="/erp/vendas" element={<Vendas />} />
        <Route path="/erp/financas" element={<Financas />} />
        <Route path="/erp/stock" element={<Stock />} />
        <Route path="/erp/compras" element={<Compras />} />
        <Route path="/erp/rh" element={<RH />} />
        <Route path="/erp/clientes" element={<CRM />} />
        <Route path="/erp/contabilidade" element={<Contabilidade />} />
        <Route path="/erp/smart-ai" element={<SmartAI />} />
      </Route>
    </Routes>
  )
}
