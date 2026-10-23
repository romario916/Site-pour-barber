
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import Services from "./pages/Services";
import APropos from "./pages/APropos";
import Equipe from "./pages/Equipe";
import Boutique from "./pages/Boutique";
import Contact from "./pages/Contact";
import Reservation from "./pages/Reservation";
import Galerie from "./pages/Galerie";
import ProduitDetail from "./pages/ProduitDetail";
export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/a-propos" element={<APropos />} />
          <Route path="/equipe" element={<Equipe />} />
          <Route path="/galerie" element={<Galerie />} />
          <Route path="/boutique" element={<Boutique />} />
          <Route path="/boutique/:id" element={<ProduitDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/reservation" element={<Reservation />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
