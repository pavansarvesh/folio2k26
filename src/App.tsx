import "./App.css";
import { lazy, Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LoadingScreen from "./components/LoadingScreen";
import ScrollToHash from "./components/ScrollToHash";

const HomePage = lazy(() => import("./pages/HomePage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ProjectsPage = lazy(() => import("./pages/ProjectsPage"));
const ProjectPage = lazy(() => import("./pages/ProjectPage"));
const SocialsPage = lazy(() => import("./pages/SocialsPage"));
const ResumePage = lazy(() => import("./pages/ResumePage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));
const BlogsPage = lazy(() => import("./pages/BlogsPage"));
const BlogPostPage = lazy(() => import("./pages/BlogPostPage"));

function App() {
	return (
		<BrowserRouter>
			<ScrollToHash />
			<Suspense fallback={<LoadingScreen />}>
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/about' element={<AboutPage />} />
					<Route path='/resume' element={<ResumePage />} />
					<Route path='/projects' element={<ProjectsPage />} />
					<Route path='/projects/:slug' element={<ProjectPage />} />
					<Route path='/blogs' element={<BlogsPage />} />
					<Route path='/blogs/:slug' element={<BlogPostPage />} />
					<Route path='/contacts' element={<SocialsPage />} />
					<Route
						path='/socials'
						element={<Navigate to='/contacts' replace />}
					/>
					<Route path='*' element={<NotFoundPage />} />
				</Routes>
			</Suspense>
		</BrowserRouter>
	);
}

export default App;
