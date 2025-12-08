import { useState } from "react";
import { Bell, Home, Plus, User } from "lucide-react";

interface Complaint {
  id: string;
  title: string;
  status: "Pendiente" | "En Proceso" | "Resuelto";
  date: string;
}

interface HomeCiudadanoWireframeProps {
  onCreateDenuncia?: () => void;
  onViewDenuncia?: () => void;
  /** Muestra el nombre del frame y las anotaciones fuera del “teléfono”. */
  showFrameMeta?: boolean;
}

export function HomeCiudadanoWireframe({
  onCreateDenuncia,
  onViewDenuncia,
  showFrameMeta = false,
}: HomeCiudadanoWireframeProps) {
  const [activeTab, setActiveTab] = useState<"inicio" | "nueva" | "perfil">(
    "inicio"
  );

  const complaints: Complaint[] = [
    {
      id: "1",
      title: "Bache en carretera",
      status: "En Proceso",
      date: "5 Dic 2024",
    },
    {
      id: "2",
      title: "Alumbrado público sin funcionar",
      status: "Pendiente",
      date: "3 Dic 2024",
    },
    {
      id: "3",
      title: "Acumulación de basura",
      status: "Resuelto",
      date: "28 Nov 2024",
    },
  ];

  const getStatusStyle = (status: string) => {
    switch (status) {
      case "Pendiente":
        return "bg-gray-200 text-gray-700";
      case "En Proceso":
        return "bg-blue-100 text-blue-700 border-blue-300";
      case "Resuelto":
        return "bg-green-100 text-green-700 border-green-300";
      default:
        return "bg-gray-200 text-gray-700";
    }
  };

  return (
    <div className="w-full h-full flex flex-col">
      {/* Frame label (fuera de la “pantalla” principal) */}
      {showFrameMeta && (
        <div className="mb-4 text-center">
          <span className="text-sm text-gray-400">
            HomeCiudadano_ComuniApp
          </span>
        </div>
      )}

      {/* Contenido principal dentro del “teléfono” */}
      <div className="flex-1 px-4 py-4">
        <div className="bg-white rounded-lg shadow-sm border-2 border-gray-300 relative overflow-hidden">
          {/* Top bar */}
          <div className="border-b-2 border-gray-300 px-4 py-4 flex items-center justify-between bg-gray-50">
            <h2 className="m-0">Inicio</h2>
            <div className="w-8 h-8 border-2 border-dashed border-gray-400 rounded flex items-center justify-center">
              <Bell className="w-4 h-4 text-gray-400" />
            </div>
          </div>

          {/* Área scrolleable de contenido (dentro de la tarjeta) */}
          <div className="p-4 pb-32">
            {/* Welcome section */}
            <div className="mb-6">
              <h1 className="mb-2">Hola, Juan Pérez</h1>
              <p className="text-gray-500 m-0">
                Estas son tus denuncias recientes
              </p>
            </div>

            {/* Section title */}
            <div className="mb-4">
              <h2 className="m-0">Mis denuncias</h2>
            </div>

            {/* Complaint cards */}
            <div className="space-y-4">
              {complaints.map((complaint) => (
                <div
                  key={complaint.id}
                  onClick={onViewDenuncia}
                  className="border-2 border-gray-300 rounded-lg p-4 bg-white hover:border-gray-400 transition-colors cursor-pointer"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="text-base m-0 mb-2">{complaint.title}</h3>
                      <span
                        className={`inline-block px-3 py-1 rounded text-xs border ${getStatusStyle(
                          complaint.status
                        )}`}
                      >
                        {complaint.status}
                      </span>
                    </div>
                    <div className="ml-3 w-6 h-6 border-2 border-gray-400 rounded flex items-center justify-center flex-shrink-0">
                      <span className="text-gray-400 text-sm">→</span>
                    </div>
                  </div>
                  <div className="text-sm text-gray-500">{complaint.date}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Floating action button */}
          <div className="absolute bottom-20 right-4">
            <button
              onClick={onCreateDenuncia}
              className="w-14 h-14 rounded-full bg-gray-800 text-white shadow-lg flex items-center justify-center hover:bg-gray-700 transition-colors border-2 border-gray-900"
            >
              <Plus className="w-6 h-6" />
            </button>
            <div className="absolute -bottom-6 right-0 text-xs text-gray-500 whitespace-nowrap">
              Crear denuncia
            </div>
          </div>

          {/* Bottom navigation bar */}
          <div className="absolute bottom-0 left-0 right-0 border-t-2 border-gray-300 bg-white">
            <div className="flex">
              {/* Tab: Inicio */}
              <button
                onClick={() => setActiveTab("inicio")}
                className={`flex-1 py-3 flex flex-col items-center justify-center transition-colors ${
                  activeTab === "inicio"
                    ? "bg-gray-800 text-white"
                    : "bg-white text-gray-600 hover:bg-gray-50"
                }`}
              >
                <Home className="w-5 h-5 mb-1" />
                <span className="text-xs">Inicio</span>
              </button>

              {/* Tab: Nueva denuncia */}
              <button
                onClick={() => {
                  setActiveTab("nueva");
                  if (onCreateDenuncia) onCreateDenuncia();
                }}
                className={`flex-1 py-3 flex flex-col items-center justify-center border-x-2 border-gray-300 transition-colors ${
                  activeTab === "nueva"
                    ? "bg-gray-800 text-white"
                    : "bg-white text-gray-600 hover:bg-gray-50"
                }`}
              >
                <Plus className="w-5 h-5 mb-1" />
                <span className="text-xs">Nueva denuncia</span>
              </button>

              {/* Tab: Perfil */}
              <button
                onClick={() => setActiveTab("perfil")}
                className={`flex-1 py-3 flex flex-col items-center justify-center transition-colors ${
                  activeTab === "perfil"
                    ? "bg-gray-800 text-white"
                    : "bg-white text-gray-600 hover:bg-gray-50"
                }`}
              >
                <User className="w-5 h-5 mb-1" />
                <span className="text-xs">Perfil</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Annotations (fuera del teléfono si showFrameMeta = true) */}
      {showFrameMeta && (
        <div className="mt-4 px-4 space-y-2 text-sm text-gray-600">
          <p className="flex items-start">
            <span className="mr-2">•</span>
            <span>
              Las tarjetas muestran las denuncias más recientes del ciudadano.
            </span>
          </p>
          <p className="flex items-start">
            <span className="mr-2">•</span>
            <span>
              El botón flotante &apos;Crear denuncia&apos; abre el formulario de
              nueva denuncia.
            </span>
          </p>
          <p className="flex items-start">
            <span className="mr-2">•</span>
            <span>
              La barra inferior permite navegar entre Inicio, Crear Denuncia y
              Perfil.
            </span>
          </p>
          <p className="flex items-start">
            <span className="mr-2">•</span>
            <span>
              Cada tarjeta es clickeable y lleva al Detalle de Denuncia.
            </span>
          </p>
        </div>
      )}
    </div>
  );
}
