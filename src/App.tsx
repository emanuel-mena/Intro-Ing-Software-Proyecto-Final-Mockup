import { useState } from "react";
import { LoginWireframe } from "./components/LoginWireframe";
import { HomeCiudadanoWireframe } from "./components/HomeCiudadanoWireframe";
import { CrearDenunciaWireframe } from "./components/CrearDenunciaWireframe";
import { DetalleDenunciaWireframe } from "./components/DetalleDenunciaWireframe";

type Screen = "login" | "home" | "crear" | "detalle";

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>("login");

  const goTo = (screen: Screen) => setCurrentScreen(screen);

  const renderScreen = () => {
    switch (currentScreen) {
      case "login":
        return (
          <LoginWireframe
            showFrameMeta={false}
            onLogin={() => goTo("home")}
          />
        );

      case "home":
        return (
          <HomeCiudadanoWireframe
            showFrameMeta={false}
            onCreateDenuncia={() => goTo("crear")}
            onViewDenuncia={() => goTo("detalle")}
          />
        );

      case "crear":
        return (
          <CrearDenunciaWireframe
            showFrameMeta={false}
            onBack={() => goTo("home")}
            onSubmit={() => {
              alert("Denuncia enviada (demo)");
              goTo("home");
            }}
          />
        );

      case "detalle":
        return (
          <DetalleDenunciaWireframe
            showFrameMeta={false}
            onBack={() => goTo("home")}
            onAddComment={() => alert("Agregar comentario (demo)")}
            onAddEvidence={() => alert("Agregar evidencia (demo)")}
          />
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-neutral-100 flex flex-col items-center justify-center p-4">
      {/* “Teléfono” */}
      <div className="w-full max-w-sm h-[720px] bg-neutral-50 border border-gray-300 rounded-3xl shadow-xl overflow-hidden">
        <div className="w-full h-full overflow-y-auto">
          {renderScreen()}
        </div>
      </div>

      {/* Navegación rápida / debug (fuera del teléfono) */}
      <div className="mt-4 text-center space-x-2 text-xs text-blue-600">
        <button onClick={() => goTo("login")} className="underline">
          Login
        </button>
        <button onClick={() => goTo("home")} className="underline">
          Home ciudadano
        </button>
        <button onClick={() => goTo("crear")} className="underline">
          Crear denuncia
        </button>
        <button onClick={() => goTo("detalle")} className="underline">
          Detalle denuncia
        </button>
      </div>
    </div>
  );
}
