import { ArrowLeft } from "lucide-react";

interface GestionDenunciaFuncionarioWireframeProps {
  onBack?: () => void;
  onSaveChanges?: () => void;
  onViewHistory?: () => void;
  showFrameMeta?: boolean;
}

export function GestionDenunciaFuncionarioWireframe({
  onBack,
  onSaveChanges,
  onViewHistory,
  showFrameMeta = true
}: GestionDenunciaFuncionarioWireframeProps) {
  const denuncia = {
    id: "12345",
    titulo: "Bache en carretera",
    estado: "En Proceso" as const,
    prioridad: "Alta" as const,
    fechaCreacion: "5 Dic 2024",
    ultimaActualizacion: "7 Dic 2024",
    ultimoCambioRealizadoPor: "Funcionario municipal"
  };

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
          <span className="text-sm text-gray-400">GestionDenunciaFuncionario_ComuniApp</span>
        </div>
      )}

      {/* Main content area */}
      <div className="flex-1 px-4 py-4">
        {/* Main card container */}
        <div className="bg-white rounded-lg shadow-sm border-2 border-gray-300 h-full flex flex-col">
          {/* Top bar */}
          <div className="border-b-2 border-gray-300 px-4 py-4 flex items-center bg-gray-50">
            <button
              onClick={onBack}
              className="w-8 h-8 border-2 border-gray-400 rounded flex items-center justify-center hover:bg-gray-100 transition-colors mr-3"
            >
              <ArrowLeft className="w-4 h-4 text-gray-600" />
            </button>
            <div className="flex-1">
              <h2 className="m-0">Gestión de denuncia</h2>
              <p className="text-xs text-gray-500 m-0 mt-1">ID #{denuncia.id}</p>
            </div>
          </div>

          {/* Scrollable content */}
          <div className="flex-1 overflow-auto p-4 space-y-6">
            {/* Resumen de la denuncia */}
            <div>
              <h3 className="m-0 mb-3">Resumen de la denuncia</h3>
              <div className="border-2 border-gray-300 rounded-lg p-4 bg-gray-50 space-y-3">
                <div>
                  <span className="text-sm text-gray-600 block mb-1">Título:</span>
                  <h3 className="m-0">{denuncia.titulo}</h3>
                </div>
                <div className="flex items-center gap-4">
                  <div>
                    <span className="text-sm text-gray-600 block mb-1">Estado actual:</span>
                    <span
                      className={`inline-block px-3 py-1 rounded text-xs border ${getStatusStyle(
                        denuncia.estado
                      )}`}
                    >
                      {denuncia.estado}
                    </span>
                  </div>
                  <div>
                    <span className="text-sm text-gray-600 block mb-1">Prioridad actual:</span>
                    <span className={`text-sm ${getPriorityStyle(denuncia.prioridad)}`}>
                      {denuncia.prioridad}
                    </span>
                  </div>
                </div>
                <div>
                  <span className="text-sm text-gray-600 block mb-1">Fecha de creación:</span>
                  <span className="text-sm">{denuncia.fechaCreacion}</span>
                </div>
              </div>
            </div>

            {/* Acciones del funcionario */}
            <div>
              <h3 className="m-0 mb-3">Acciones del funcionario</h3>
              <div className="space-y-4">
                {/* Estado selector */}
                <div>
                  <label className="block text-sm mb-2 text-gray-700">Estado</label>
                  <div className="h-12 border-2 border-gray-300 rounded-lg bg-white flex items-center px-3 justify-between">
                    <span className="text-sm text-gray-600">En Proceso</span>
                    <span className="text-gray-400 text-xs">▼</span>
                  </div>
                </div>

                {/* Prioridad selector */}
                <div>
                  <label className="block text-sm mb-2 text-gray-700">Prioridad</label>
                  <div className="h-12 border-2 border-gray-300 rounded-lg bg-white flex items-center px-3 justify-between">
                    <span className="text-sm text-gray-600">Alta</span>
                    <span className="text-gray-400 text-xs">▼</span>
                  </div>
                </div>

                {/* Departamento selector */}
                <div>
                  <label className="block text-sm mb-2 text-gray-700">Departamento asignado</label>
                  <div className="h-12 border-2 border-gray-300 rounded-lg bg-white flex items-center px-3 justify-between">
                    <span className="text-sm text-gray-600">Vialidad, Alumbrado, Limpieza...</span>
                    <span className="text-gray-400 text-xs">▼</span>
                  </div>
                </div>

                {/* Comentario interno */}
                <div>
                  <label className="block text-sm mb-2 text-gray-700">Comentario interno</label>
                  <div className="h-20 border-2 border-gray-300 rounded-lg bg-white p-3">
                    <span className="text-sm text-gray-400">
                      Agregar notas administrativas sobre esta denuncia...
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Resumen rápido */}
            <div>
              <h3 className="m-0 mb-3">Resumen rápido</h3>
              <div className="border-2 border-gray-200 rounded-lg p-3 bg-white space-y-2">
                <div className="flex items-start">
                  <span className="text-sm text-gray-600 min-w-40">Última actualización:</span>
                  <span className="text-sm text-gray-800">{denuncia.ultimaActualizacion}</span>
                </div>
                <div className="flex items-start">
                  <span className="text-sm text-gray-600 min-w-40">Último cambio realizado por:</span>
                  <span className="text-sm text-gray-800">{denuncia.ultimoCambioRealizadoPor}</span>
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="space-y-3 pt-2">
              <button
                onClick={onSaveChanges}
                className="w-full h-12 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
              >
                Guardar cambios
              </button>
              <button
                onClick={onViewHistory}
                className="w-full h-12 border-2 border-gray-400 text-gray-800 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Ver historial / cambios
              </button>
              <button
                onClick={onBack}
                className="w-full h-12 text-gray-600 hover:text-gray-800 transition-colors"
              >
                Volver a la lista
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Annotations */}
      {showFrameMeta && (
        <div className="mt-6 px-4 space-y-2 text-sm text-gray-600">
          <p className="flex items-start">
            <span className="mr-2">•</span>
            <span>Esta pantalla permite al funcionario gestionar el estado y la prioridad de una denuncia.</span>
          </p>
          <p className="flex items-start">
            <span className="mr-2">•</span>
            <span>Los selectores de estado, prioridad y departamento reflejan la lógica interna del sistema.</span>
          </p>
          <p className="flex items-start">
            <span className="mr-2">•</span>
            <span>El campo &apos;Comentario interno&apos; se utiliza para registrar notas administrativas.</span>
          </p>
          <p className="flex items-start">
            <span className="mr-2">•</span>
            <span>El botón &apos;Guardar cambios&apos; aplica las modificaciones a la denuncia.</span>
          </p>
        </div>
      )}
    </div>
  );
}
