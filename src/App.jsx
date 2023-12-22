import Home from "./pages/home/Home";
import WebDev from "./pages/web-dev/WebDev";
import LeadGen from "./pages/lead-gen/LeadGen";
import BusinessAi from "./pages/business-ai/BusinessAi";
import ContactPage from "./pages/contact/ContactPage";
import Projects from "./pages/projects/Projects";
import Project from "./pages/project/Project";
import ProjectBranding from "./pages/project/components/ProjectBranding";
import ProjectWebDev from "./pages/project/components/ProjectWebDev";
import ProjectLeadGen from "./pages/project/components/ProjectLeadGen";
import './App.css';
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";

const router = createBrowserRouter([
  { path: "*", Component: Root },
]);

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}

function Root() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/web-dev" element={<WebDev />} />
      <Route path="/lead-gen" element={<LeadGen />} />
      <Route path="/business-ai" element={<BusinessAi />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/project/:id" element={<Project />} >
        <Route path="" element={<ProjectBranding />} />
        <Route path="web-dev" element={<ProjectWebDev />} />
        <Route path="lead-gen" element={<ProjectLeadGen />} />
      </Route>
    </Routes>
  );
}