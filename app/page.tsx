/**
 * page.tsx — Página principal del portafolio
 * Ensambla los tres paneles: sidebar izquierdo, contenido central y sidebar derecho.
 */

import LeftSidebar from './components/organisms/LeftSidebar';
import RightSidebar from './components/organisms/RightSidebar';
import ProfileSection from './components/organisms/ProfileSection';
import KnowledgeSection from './components/organisms/KnowledgeSection';
import EducationSection from './components/organisms/EducationSection';
import PortfolioSection from './components/organisms/PortfolioSection';
import Footer from './components/organisms/Footer';

export default function Home() {
  return (
    /*
     * Contenedor principal: 3 columnas
     * - col 1: sidebar izquierdo (fijo, w-64)
     * - col 2: contenido central (scroll vertical, flexible)
     * - col 3: sidebar derecho (fijo, w-16)
     */
    <div className="flex min-h-screen" style={{ backgroundColor: 'var(--color-bg-main)' }}>

      {/* ── Sidebar Izquierdo (sticky) ────────────────────── */}
      <div className="sticky top-0 h-screen overflow-y-auto hidden md:block">
        <LeftSidebar />
      </div>

      {/* ── Contenido Central (scroll vertical) ───────────── */}
      <main className="flex-1 overflow-y-auto p-6 min-w-0">
        <ProfileSection />
        <KnowledgeSection />
        <EducationSection />
        <PortfolioSection />
        <Footer />
      </main>

      {/* ── Sidebar Derecho (sticky) ──────────────────────── */}
      <div className="sticky top-0 h-screen hidden lg:block">
        <RightSidebar />
      </div>

    </div>
  );
}
