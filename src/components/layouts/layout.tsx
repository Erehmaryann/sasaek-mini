import { Outlet } from "react-router";

import Header from "./header";
import Footer from "./footer";
import { LanguageProvider } from "@/contexts/language-context";

function Layout() {
  return (
    <LanguageProvider>
      <div className="app-container">
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default Layout;
