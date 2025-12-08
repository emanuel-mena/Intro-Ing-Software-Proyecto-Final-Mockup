import { useMemo, useState } from "react";
import { ConfiguracionSistemaWireframe } from "./components/ConfiguracionSistemaWireframe";
import { CrearDenunciaWireframe } from "./components/CrearDenunciaWireframe";
import { DashboardAdminWireframe } from "./components/DashboardAdminWireframe";
import { DetalleDenunciaWireframe } from "./components/DetalleDenunciaWireframe";
import { GestionDenunciaFuncionarioWireframe } from "./components/GestionDenunciaFuncionarioWireframe";
import { HistorialDenunciaWireframe } from "./components/HistorialDenunciaWireframe";
import { HomeCiudadanoWireframe } from "./components/HomeCiudadanoWireframe";
import { ListaDenunciasFuncionarioWireframe } from "./components/ListaDenunciasFuncionarioWireframe";
import { LoginWireframe } from "./components/LoginWireframe";
import { MapaDenunciasWireframe } from "./components/MapaDenunciasWireframe";
import { PerfilCiudadanoWireframe } from "./components/PerfilCiudadanoWireframe";
import { UsuariosPermisosWireframe } from "./components/UsuariosPermisosWireframe";

type Screen =
  | "login"
  | "ciudadanoHome"
  | "ciudadanoCrear"
  | "ciudadanoDetalle"
  | "ciudadanoPerfil"
  | "funcionarioLista"
  | "funcionarioGestion"
  | "funcionarioHistorial"
  | "adminDashboard"
  | "mapa"
  | "config"
  | "adminUsuarios";

type Role = "ciudadano" | "funcionario" | "administrador" | null;

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>("login");
  const [role, setRole] = useState<Role>(null);

  const goTo = (screen: Screen) => setCurrentScreen(screen);

  const navigation = useMemo(
    () => [
      {
        label: "Login / Registro",
        items: [{ id: "login" as const, label: "Ingreso" }]
      },
      {
        label: "Ciudadano",
        items: [
          { id: "ciudadanoHome" as const, label: "Home ciudadano" },
          { id: "ciudadanoCrear" as const, label: "Crear denuncia" },
          { id: "ciudadanoDetalle" as const, label: "Detalle denuncia" },
          { id: "ciudadanoPerfil" as const, label: "Perfil" }
        ]
      },
      {
        label: "Funcionario",
        items: [
          { id: "funcionarioLista" as const, label: "Lista de denuncias" },
          { id: "funcionarioGestion" as const, label: "Gestión de denuncia" },
          { id: "funcionarioHistorial" as const, label: "Historial / cambios" }
        ]
      },
      {
        label: "Administrador",
        items: [
          { id: "adminDashboard" as const, label: "Dashboard" },
          { id: "mapa" as const, label: "Mapa de denuncias" },
          { id: "config" as const, label: "Configuración" },
          { id: "adminUsuarios" as const, label: "Usuarios / permisos" }
        ]
      }
    ],
    []
  );

  const handleLogin = (selectedRole: Exclude<Role, null>) => {
    setRole(selectedRole);
    if (selectedRole === "ciudadano") goTo("ciudadanoHome");
    if (selectedRole === "funcionario") goTo("funcionarioLista");
    if (selectedRole === "administrador") goTo("adminDashboard");
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case "login":
        return (
          <LoginWireframe
            showFrameMeta={false}
            onLogin={handleLogin}
            onRegister={() => alert("Registro ilustrativo (demo)")}
          />
        );

      case "ciudadanoHome":
        return (
          <HomeCiudadanoWireframe
            showFrameMeta={false}
            onCreateDenuncia={() => goTo("ciudadanoCrear")}
            onViewDenuncia={() => goTo("ciudadanoDetalle")}
            onViewProfile={() => goTo("ciudadanoPerfil")}
          />
        );

      case "ciudadanoCrear":
        return (
          <CrearDenunciaWireframe
            showFrameMeta={false}
            onBack={() => goTo("ciudadanoHome")}
            onSubmit={() => {
              alert("Denuncia enviada (demo)");
              goTo("ciudadanoHome");
            }}
          />
        );

      case "ciudadanoDetalle":
        return (
          <DetalleDenunciaWireframe
            showFrameMeta={false}
            onBack={() => goTo("ciudadanoHome")}
            onAddComment={() => alert("Agregar comentario (demo)")}
            onAddEvidence={() => alert("Agregar evidencia (demo)")}
          />
        );

      case "ciudadanoPerfil":
        return (
          <PerfilCiudadanoWireframe
            showFrameMeta={false}
            onBack={() => goTo("ciudadanoHome")}
          />
        );

      case "funcionarioLista":
        return (
          <ListaDenunciasFuncionarioWireframe
            showFrameMeta={false}
            onViewDenuncia={() => goTo("funcionarioGestion")}
          />
        );

      case "funcionarioGestion":
        return (
          <GestionDenunciaFuncionarioWireframe
            showFrameMeta={false}
            onBack={() => goTo("funcionarioLista")}
            onSaveChanges={() => {
              alert("Cambios guardados (demo)");
              goTo("funcionarioLista");
            }}
            onViewHistory={() => goTo("funcionarioHistorial")}
          />
        );

      case "funcionarioHistorial":
        return (
          <HistorialDenunciaWireframe
            showFrameMeta={false}
            onBack={() => goTo("funcionarioGestion")}
          />
        );

      case "adminDashboard":
        return (
          <DashboardAdminWireframe
            showFrameMeta={false}
            onViewMap={() => goTo("mapa")}
            onOpenConfig={() => goTo("config")}
            onManageUsers={() => goTo("adminUsuarios")}
          />
        );

      case "mapa":
        return (
          <MapaDenunciasWireframe
            showFrameMeta={false}
            onBack={() => goTo("adminDashboard")}
          />
        );

      case "config":
        return (
          <ConfiguracionSistemaWireframe
            showFrameMeta={false}
            onBack={() => goTo("adminDashboard")}
          />
        );

      case "adminUsuarios":
        return (
          <UsuariosPermisosWireframe
            showFrameMeta={false}
            onBack={() => goTo("adminDashboard")}
          />
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-neutral-100">
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-wrap items-center gap-4 justify-between">
          <div>
            <p className="text-xs uppercase tracking-wide text-gray-500 m-0">Prototipo</p>
            <h1 className="text-lg font-semibold text-gray-900 m-0">ComuniApp</h1>
            <p className="text-xs text-gray-500 m-0">
              Acceso actual: {role ? role.charAt(0).toUpperCase() + role.slice(1) : "no autenticado"}
            </p>
          </div>
          <nav className="flex flex-wrap gap-3 items-center text-sm">
            {navigation.map((section) => (
              <div key={section.label} className="flex items-center gap-2">
                <span className="text-gray-500 font-medium whitespace-nowrap">
                  {section.label}
                </span>
                <div className="flex flex-wrap gap-2">
                  {section.items.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => goTo(item.id)}
                      className={`px-3 py-2 rounded-lg border transition-colors ${
                        currentScreen === item.id
                          ? "bg-gray-900 text-white border-gray-900"
                          : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">{renderScreen()}</main>
    </div>
  );
}
