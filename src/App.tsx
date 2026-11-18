import { Outlet, Route, Routes } from "react-router-dom";
import Header from "./components/sections/Header";
import Footer from "./components/sections/Footer";
import BackToTop from "./components/BackToTop";
import HomePage from "./pages/HomePage";
import ResumePage from "./pages/ResumePage";
import { primaryButton } from "./components/projects/styles";
import "./index.css";

// Shared frame for every page: skip link, header, page content, footer and the back-to-top button.
function Layout() {
    return (
        <div id="top" className="font-sans text-body antialiased">
            {/* First stop for keyboard users; hidden until it has focus. */}
            <a href="#main" className={`sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-40 ${primaryButton}`}>
                Skip to content
            </a>
            <Header />
            <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-5 pt-4 pb-16 md:px-8">
                <main id="main" className="flex scroll-mt-20 flex-col gap-12">
                    <Outlet />
                </main>
                <Footer />
            </div>
            <BackToTop />
        </div>
    );
}

function App() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path="resume" element={<ResumePage />} />
                <Route path="*" element={<HomePage />} />
            </Route>
        </Routes>
    );
}

export default App;
