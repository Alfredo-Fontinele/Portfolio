import { PageNotFound } from "../pages/page-not-found";
import { Routes, Route } from "react-router-dom";
import { Projects } from "../pages/projects";
import { Contact } from "../pages/contact";
import { About } from "../pages/about";
import { Home } from "../pages/home";

export const RoutesGlobal = () => (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<PageNotFound />} />
    </Routes>
);
