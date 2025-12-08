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
  onViewProfile?: () => void;
  /** Muestra el nombre del frame y las anotaciones fuera del “teléfono”. */
  showFrameMeta?: boolean;
}

export function HomeCiudadanoWireframe({
  onCreateDenuncia,
  onViewDenuncia,
  onViewProfile,
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
    <div className="space-y-6">
      {showFrameMeta && (
        <p className="text-sm text-gray-500">HomeCiudadano_ComuniApp</p>
      )}

      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="inline-flex rounded-full bg-gray-200 text-gray-700 px-3 py-1 text-xs uppercase tracking-wide">
            Panel ciudadano
          </p>
          <h1 className="text-3xl font-semibold text-gray-900 mt-2 mb-2">
            Denuncias y seguimiento
          </h1>
          <p className="text-gray-600 m-0 max-w-2xl">
            Visualiza y gestiona las denuncias recientes desde un diseño listo para
            escritorio y móvil, sin marco de teléfono.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <button
            onClick={onCreateDenuncia}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            <Plus className="w-4 h-4" />
            Nueva denuncia
          </button>
          <button
            onClick={onViewDenuncia}
            className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-800 hover:bg-gray-50 transition-colors"
          >
            <Bell className="w-4 h-4" />
            Ver detalle de muestra
          </button>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setActiveTab("inicio")}
          className={`inline-flex items-center gap-2 px-3 py-2 rounded-lg border text-sm transition-colors ${
            activeTab === "inicio"
              ? "bg-gray-900 text-white border-gray-900"
              : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
          }`}
        >
          <Home className="w-4 h-4" /> Inicio
        </button>
        <button
          onClick={() => {
            setActiveTab("nueva");
            if (onCreateDenuncia) onCreateDenuncia();
          }}
          className={`inline-flex items-center gap-2 px-3 py-2 rounded-lg border text-sm transition-colors ${
            activeTab === "nueva"
              ? "bg-gray-900 text-white border-gray-900"
              : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
          }`}
        >
          <Plus className="w-4 h-4" /> Nueva denuncia
        </button>
        <button
          onClick={() => {
            setActiveTab("perfil");
            onViewProfile?.();
          }}
          className={`inline-flex items-center gap-2 px-3 py-2 rounded-lg border text-sm transition-colors ${
            activeTab === "perfil"
              ? "bg-gray-900 text-white border-gray-900"
              : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
          }`}
        >
          <User className="w-4 h-4" /> Perfil
        </button>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-4">
          {complaints.map((complaint) => (
            <article
              key={complaint.id}
              onClick={onViewDenuncia}
              className="border border-gray-200 rounded-xl bg-white p-4 shadow-sm hover:shadow-md transition-all cursor-pointer"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {complaint.title}
                  </h3>
                  <p className="text-sm text-gray-500 m-0">Creada el {complaint.date}</p>
                </div>
                <span
                  className={`inline-flex px-3 py-1 rounded-full text-xs border ${getStatusStyle(
                    complaint.status
                  )}`}
                >
                  {complaint.status}
                </span>
              </div>
              <div className="flex items-center gap-3 mt-4 text-sm text-gray-600 flex-wrap">
                <span className="inline-flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-gray-400" /> ID #{complaint.id}
                </span>
                <span className="inline-flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-gray-400" /> Seguimiento activo
                </span>
              </div>
            </article>
          ))}
        </div>

        <div className="space-y-4">
          <div className="border border-gray-200 rounded-xl bg-white p-5 shadow-sm">
            <h3 className="text-base font-semibold text-gray-900 mb-2">
              Accesos rápidos
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Navega entre las secciones más usadas sin depender de una vista móvil.
            </p>
            <div className="space-y-2">
              <button
                onClick={onCreateDenuncia}
                className="w-full h-11 rounded-lg bg-gray-900 text-white hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
              >
                <Plus className="w-4 h-4" /> Registrar nueva denuncia
              </button>
              <button
                onClick={onViewDenuncia}
                className="w-full h-11 rounded-lg border border-gray-300 text-gray-800 hover:bg-gray-50 transition-colors"
              >
                Consultar denuncias
              </button>
            </div>
          </div>

          <div className="border border-gray-200 rounded-xl bg-white p-5 shadow-sm space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 m-0">Notificaciones</p>
                <h4 className="text-lg font-semibold text-gray-900 m-0">Resumen</h4>
              </div>
              <div className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center">
                <Bell className="w-4 h-4 text-gray-600" />
              </div>
            </div>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Actualizaciones de estado de tus últimas denuncias.</li>
              <li>Respuestas de funcionarios y recordatorios de acción.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
