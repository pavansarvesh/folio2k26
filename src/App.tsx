import "./App.css"
import { lazy, Suspense } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import LoadingScreen from "./components/LoadingScreen"
import ScrollToHash from './components/ScrollToHash'

const HomePage = lazy(() => import("./pages/HomePage"))
const AboutPage = lazy(() => import("./pages/AboutPage"))
const ProjectsPage = lazy(() => import("./pages/ProjectPage"))
const ConnectPage = lazy(() => import("./pages/ConnectPage"))
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"))

function App() {

  return (
    <BrowserRouter>
      <ScrollToHash />
      <Suspense fallback={<LoadingScreen />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/connect" element={<ConnectPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
