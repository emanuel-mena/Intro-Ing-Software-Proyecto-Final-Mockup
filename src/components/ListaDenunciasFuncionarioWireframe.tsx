import { ChevronLeft, ChevronRight } from "lucide-react";

interface ListaDenunciasFuncionarioWireframeProps {
  onViewDenuncia?: () => void;
  showFrameMeta?: boolean;
}

interface Denuncia {
  id: string;
  titulo: string;
  ciudadano: string;
  fecha: string;
  estado: "Pendiente" | "En Proceso" | "Resuelto";
  prioridad: "Alta" | "Media" | "Baja";
}

export function ListaDenunciasFuncionarioWireframe({ 
  onViewDenuncia,
  showFrameMeta = true 
}: ListaDenunciasFuncionarioWireframeProps) {
  const denuncias: Denuncia[] = [
    {
      id: "12345",
      titulo: "Bache en carretera",
      ciudadano: "Juan Pérez",
      fecha: "5 Dic 2024",
      estado: "En Proceso",
      prioridad: "Alta"
    },
    {
      id: "12344",
      titulo: "Alumbrado público sin funcionar",
      ciudadano: "María González",
      fecha: "4 Dic 2024",
      estado: "Pendiente",
      prioridad: "Media"
    },
    {
      id: "12343",
      titulo: "Acumulación de basura en esquina",
      ciudadano: "Carlos Ramírez",
      fecha: "3 Dic 2024",
      estado: "En Proceso",
      prioridad: "Alta"
    },
    {
      id: "12342",
      titulo: "Fuga de agua en banqueta",
      ciudadano: "Ana Martínez",
      fecha: "2 Dic 2024",
      estado: "Resuelto",
      prioridad: "Baja"
    },
    {
      id: "12341",
      titulo: "Semáforo descompuesto",
      ciudadano: "Roberto López",
      fecha: "1 Dic 2024",
      estado: "Pendiente",
      prioridad: "Alta"
    }
  ];

  const getStatusStyle = (status: string) => {
    switch (status) {
      case "Pendiente":
        return "bg-gray-200 text-gray-700 border-gray-300";
      case "En Proceso":
        return "bg-blue-100 text-blue-700 border-blue-300";
      case "Resuelto":
        return "bg-green-100 text-green-700 border-green-300";
      default:
        return "bg-gray-200 text-gray-700 border-gray-300";
    }
  };

  const getPriorityStyle = (priority: string) => {
    switch (priority) {
      case "Alta":
        return "text-red-600";
      case "Media":
        return "text-yellow-600";
      case "Baja":
        return "text-gray-600";
      default:
        return "text-gray-600";
    }
  };

  return (
    <div className="w-full h-full flex flex-col">
      {/* Frame label */}
      {showFrameMeta && (
        <div className="mb-6 text-center">
          <span className="text-sm text-gray-400">ListaDenunciasFuncionario_ComuniApp</span>
        </div>
      )}

      {/* Main content area */}
      <div className="flex-1 px-4 py-4">
        {/* Main card container */}
        <div className="bg-white rounded-lg shadow-sm border-2 border-gray-300 h-full flex flex-col">
          {/* Top bar */}
          <div className="border-b-2 border-gray-300 px-4 py-4 flex items-center justify-between bg-gray-50">
            <h2 className="m-0">Denuncias recibidas</h2>
            <div className="w-10 h-10 border-2 border-dashed border-gray-400 rounded flex items-center justify-center">
              <span className="text-xs text-gray-400">FUNC.</span>
            </div>
          </div>

          {/* Filter toolbar */}
          <div className="border-b-2 border-gray-200 px-4 py-3 bg-gray-50">
            <div className="flex gap-3">
              {/* Estado filter */}
              <div className="flex-1">
                <div className="h-10 border-2 border-gray-300 rounded bg-white flex items-center px-3 justify-between">
                  <span className="text-sm text-gray-600">Estado</span>
                  <span className="text-gray-400 text-xs">▼</span>
                </div>
              </div>

              {/* Categoría filter */}
              <div className="flex-1">
                <div className="h-10 border-2 border-gray-300 rounded bg-white flex items-center px-3 justify-between">
                  <span className="text-sm text-gray-600">Categoría</span>
                  <span className="text-gray-400 text-xs">▼</span>
                </div>
              </div>

              {/* Prioridad filter */}
              <div className="flex-1">
                <div className="h-10 border-2 border-gray-300 rounded bg-white flex items-center px-3 justify-between">
                  <span className="text-sm text-gray-600">Prioridad</span>
                  <span className="text-gray-400 text-xs">▼</span>
                </div>
              </div>
            </div>
          </div>

          {/* List of complaints */}
          <div className="flex-1 overflow-auto p-4 space-y-3">
            {denuncias.map((denuncia) => (
              <div
                key={denuncia.id}
                onClick={onViewDenuncia}
                className="border-2 border-gray-300 rounded-lg p-4 bg-white hover:border-gray-400 transition-colors cursor-pointer"
              >
                <div className="flex items-start justify-between gap-4">
                  {/* Left side - main info */}
                  <div className="flex-1 space-y-1">
                    <h3 className="text-base m-0">{denuncia.titulo}</h3>
                    <p className="text-sm text-gray-600 m-0">
                      Reportado por: {denuncia.ciudadano}
                    </p>
                    <p className="text-xs text-gray-500 m-0">{denuncia.fecha}</p>
                  </div>

                  {/* Right side - status and priority */}
                  <div className="flex flex-col items-end gap-2 flex-shrink-0">
                    <span
                      className={`inline-block px-3 py-1 rounded text-xs border ${getStatusStyle(
                        denuncia.estado
                      )}`}
                    >
                      {denuncia.estado}
                    </span>
                    <span className={`text-xs ${getPriorityStyle(denuncia.prioridad)}`}>
                      Prioridad: {denuncia.prioridad}
                    </span>
                    <div className="mt-1 w-6 h-6 border-2 border-gray-400 rounded flex items-center justify-center">
                      <span className="text-gray-400 text-sm">→</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer - pagination */}
          <div className="border-t-2 border-gray-200 px-4 py-3 bg-gray-50">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Mostrando 1–5 de 36 denuncias</span>
              <div className="flex gap-2">
                <button className="px-4 py-2 border-2 border-gray-300 rounded bg-white text-sm text-gray-600 hover:bg-gray-50 transition-colors flex items-center gap-1">
                  <ChevronLeft className="w-4 h-4" />
                  Anterior
                </button>
                <button className="px-4 py-2 border-2 border-gray-300 rounded bg-white text-sm text-gray-600 hover:bg-gray-50 transition-colors flex items-center gap-1">
                  Siguiente
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Annotations */}
      {showFrameMeta && (
        <div className="mt-6 px-4 space-y-2 text-sm text-gray-600">
          <p className="flex items-start">
            <span className="mr-2">•</span>
            <span>Esta pantalla muestra la lista de denuncias recibidas por el municipio.</span>
          </p>
          <p className="flex items-start">
            <span className="mr-2">•</span>
            <span>Los filtros permiten acotar las denuncias por estado, categoría y prioridad.</span>
          </p>
          <p className="flex items-start">
            <span className="mr-2">•</span>
            <span>Cada fila es clickeable y lleva a la pantalla de gestión detallada de la denuncia.</span>
          </p>
          <p className="flex items-start">
            <span className="mr-2">•</span>
            <span>La sección inferior puede mostrar un resumen de resultados o paginación.</span>
          </p>
        </div>
      )}
    </div>
  );
}
