import { ArrowLeft, Edit2, Trash2 } from "lucide-react";

interface ConfiguracionSistemaWireframeProps {
  onBack?: () => void;
  showFrameMeta?: boolean;
}

export function ConfiguracionSistemaWireframe({
  onBack,
  showFrameMeta = true
}: ConfiguracionSistemaWireframeProps) {
  const categorias = [
    { id: 1, nombre: "Vialidad" },
    { id: 2, nombre: "Alumbrado" },
    { id: 3, nombre: "Limpieza" },
    { id: 4, nombre: "Seguridad" }
  ];

  const prioridades = [
    { id: 1, nombre: "Alta", color: "text-red-600" },
    { id: 2, nombre: "Media", color: "text-yellow-600" },
    { id: 3, nombre: "Baja", color: "text-gray-600" }
  ];

  return (
    <div className="w-full h-full flex flex-col">
      {/* Frame label */}
      {showFrameMeta && (
        <div className="mb-6 text-center">
          <span className="text-sm text-gray-400">ConfiguracionSistema_ComuniApp</span>
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
            <h2 className="m-0">Configuración del sistema</h2>
          </div>

          {/* Scrollable content */}
          <div className="flex-1 overflow-auto p-4 space-y-6">
            {/* Categorías de denuncia */}
            <div>
              <h3 className="m-0 mb-3">Categorías de denuncia</h3>
              <div className="space-y-2 mb-3">
                {categorias.map((categoria) => (
                  <div
                    key={categoria.id}
                    className="border-2 border-gray-300 rounded-lg p-3 bg-white flex items-center justify-between"
                  >
                    <span className="text-sm text-gray-700">{categoria.nombre}</span>
                    <div className="flex gap-2">
                      <button className="w-8 h-8 border-2 border-gray-300 rounded flex items-center justify-center hover:bg-gray-50 transition-colors">
                        <Edit2 className="w-4 h-4 text-gray-600" />
                      </button>
                      <button className="w-8 h-8 border-2 border-gray-300 rounded flex items-center justify-center hover:bg-gray-50 transition-colors">
                        <Trash2 className="w-4 h-4 text-gray-600" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full h-12 bg-white border-2 border-gray-400 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                Agregar categoría
              </button>
            </div>

            {/* Prioridades */}
            <div>
              <h3 className="m-0 mb-3">Prioridades</h3>
              <div className="border-2 border-gray-300 rounded-lg p-4 bg-gray-50 mb-3">
                <div className="space-y-2">
                  {prioridades.map((prioridad) => (
                    <div key={prioridad.id} className="flex items-center gap-3">
                      <div className="w-6 h-6 border-2 border-gray-400 rounded bg-white"></div>
                      <span className={`text-sm ${prioridad.color}`}>
                        {prioridad.nombre}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <button className="w-full h-12 bg-white border-2 border-gray-400 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                Editar prioridades
              </button>
            </div>

            {/* Parámetros generales */}
            <div>
              <h3 className="m-0 mb-3">Parámetros generales</h3>
              <div className="border-2 border-gray-300 rounded-lg p-4 bg-white space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-700">Tiempo objetivo de respuesta (días):</span>
                  <div className="w-16 h-10 border-2 border-gray-300 rounded bg-white flex items-center justify-center">
                    <span className="text-sm text-gray-600">3</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-700">Límite de denuncias pendientes:</span>
                  <div className="w-16 h-10 border-2 border-gray-300 rounded bg-white flex items-center justify-center">
                    <span className="text-sm text-gray-600">50</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Save button */}
            <div className="pt-2">
              <button className="w-full h-12 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors">
                Guardar configuración
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
            <span>Esta pantalla permite administrar categorías y prioridades del sistema.</span>
          </p>
          <p className="flex items-start">
            <span className="mr-2">•</span>
            <span>Las filas de categorías son placeholders para CRUD real en el futuro.</span>
          </p>
          <p className="flex items-start">
            <span className="mr-2">•</span>
            <span>El botón &apos;Guardar configuración&apos; guardaría los cambios realizados por el administrador.</span>
          </p>
        </div>
      )}
    </div>
  );
}
