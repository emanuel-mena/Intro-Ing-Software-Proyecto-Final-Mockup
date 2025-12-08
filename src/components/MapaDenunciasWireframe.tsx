import { ArrowLeft } from "lucide-react";

interface MapaDenunciasWireframeProps {
  onBack?: () => void;
  showFrameMeta?: boolean;
}

export function MapaDenunciasWireframe({
  onBack,
  showFrameMeta = true
}: MapaDenunciasWireframeProps) {
  return (
    <div className="w-full h-full flex flex-col">
      {/* Frame label */}
      {showFrameMeta && (
        <div className="mb-6 text-center">
          <span className="text-sm text-gray-400">MapaDenuncias_ComuniApp</span>
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
            <h2 className="m-0">Mapa de denuncias</h2>
          </div>

          {/* Scrollable content */}
          <div className="flex-1 overflow-auto p-4 space-y-4">
            {/* Controles de filtro */}
            <div>
              <h3 className="m-0 mb-3 text-sm">Filtros</h3>
              <div className="flex gap-2">
                {/* Categoría filter */}
                <div className="flex-1">
                  <div className="h-10 border-2 border-gray-300 rounded bg-white flex items-center px-3 justify-between">
                    <span className="text-sm text-gray-600">Categoría</span>
                    <span className="text-gray-400 text-xs">▼</span>
                  </div>
                </div>

                {/* Estado filter */}
                <div className="flex-1">
                  <div className="h-10 border-2 border-gray-300 rounded bg-white flex items-center px-3 justify-between">
                    <span className="text-sm text-gray-600">Estado</span>
                    <span className="text-gray-400 text-xs">▼</span>
                  </div>
                </div>

                {/* Rango de fechas filter */}
                <div className="flex-1">
                  <div className="h-10 border-2 border-gray-300 rounded bg-white flex items-center px-3 justify-between">
                    <span className="text-sm text-gray-600">Fechas</span>
                    <span className="text-gray-400 text-xs">▼</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Mapa placeholder */}
            <div className="border-2 border-gray-300 rounded-lg bg-gray-50 relative overflow-hidden" style={{ minHeight: "400px" }}>
              {/* Map background */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-sm text-gray-400">Mapa con marcadores (wireframe)</span>
              </div>

              {/* Simulated markers */}
              <div className="absolute top-16 left-12 w-4 h-4 bg-red-400 rounded-full border-2 border-red-600"></div>
              <div className="absolute top-24 right-16 w-4 h-4 bg-blue-400 rounded-full border-2 border-blue-600"></div>
              <div className="absolute bottom-20 left-20 w-4 h-4 bg-green-400 rounded-full border-2 border-green-600"></div>
              <div className="absolute top-32 left-1/2 w-4 h-4 bg-red-400 rounded-full border-2 border-red-600"></div>
              <div className="absolute bottom-28 right-24 w-4 h-4 bg-blue-400 rounded-full border-2 border-blue-600"></div>
              <div className="absolute top-40 right-32 w-4 h-4 bg-green-400 rounded-full border-2 border-green-600"></div>
            </div>

            {/* Leyenda */}
            <div>
              <h3 className="m-0 mb-3 text-sm">Leyenda</h3>
              <div className="border-2 border-gray-200 rounded-lg p-3 bg-white space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full border-2 border-red-600"></div>
                  <span className="text-sm text-gray-700">Alta prioridad</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-400 rounded-full border-2 border-blue-600"></div>
                  <span className="text-sm text-gray-700">En proceso</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full border-2 border-green-600"></div>
                  <span className="text-sm text-gray-700">Resueltas</span>
                </div>
                <p className="text-xs text-gray-500 m-0 mt-2 pt-2 border-t border-gray-200">
                  Cada marcador representa una denuncia en el territorio
                </p>
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
            <span>Esta vista muestra la distribución geográfica de las denuncias.</span>
          </p>
          <p className="flex items-start">
            <span className="mr-2">•</span>
            <span>Los filtros permiten acotar las denuncias visibles en el mapa.</span>
          </p>
          <p className="flex items-start">
            <span className="mr-2">•</span>
            <span>Los marcadores representan denuncias agrupadas por ubicación o categoría.</span>
          </p>
        </div>
      )}
    </div>
  );
}
