import { Map, Settings } from "lucide-react";

interface DashboardAdminWireframeProps {
  onViewMap?: () => void;
  onOpenConfig?: () => void;
  onManageUsers?: () => void;
  showFrameMeta?: boolean;
}

export function DashboardAdminWireframe({
  onViewMap,
  onOpenConfig,
  onManageUsers,
  showFrameMeta = true
}: DashboardAdminWireframeProps) {
  const kpis = [
    {
      title: "Denuncias pendientes",
      value: "24"
    },
    {
      title: "Denuncias resueltas",
      value: "128"
    },
    {
      title: "Tiempo de respuesta promedio",
      value: "3.5 días"
    }
  ];

  return (
    <div className="w-full h-full flex flex-col">
      {/* Frame label */}
      {showFrameMeta && (
        <div className="mb-6 text-center">
          <span className="text-sm text-gray-400">DashboardAdmin_ComuniApp</span>
        </div>
      )}

      {/* Main content area */}
      <div className="flex-1 px-4 py-4">
        {/* Main card container */}
        <div className="bg-white rounded-lg shadow-sm border-2 border-gray-300 h-full flex flex-col">
          {/* Top bar */}
          <div className="border-b-2 border-gray-300 px-4 py-4 flex items-center justify-between bg-gray-50">
            <h2 className="m-0">Panel administrativo</h2>
            <div className="w-10 h-10 border-2 border-dashed border-gray-400 rounded flex items-center justify-center">
              <span className="text-xs text-gray-400">ADMIN</span>
            </div>
          </div>

          {/* Scrollable content */}
          <div className="flex-1 overflow-auto p-4 space-y-6">
            {/* KPIs principales */}
            <div>
              <h3 className="m-0 mb-3">Indicadores principales</h3>
              <div className="grid grid-cols-2 gap-3">
                {kpis.map((kpi, index) => (
                  <div
                    key={index}
                    className="border-2 border-gray-300 rounded-lg p-4 bg-gray-50"
                  >
                    <p className="text-xs text-gray-600 m-0 mb-2">{kpi.title}</p>
                    <p className="text-2xl m-0 text-gray-800">{kpi.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Gráficos */}
            <div>
              <h3 className="m-0 mb-3">Resumen por categoría</h3>
              <div className="space-y-3">
                {/* Bar chart placeholder */}
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 bg-gray-50 flex items-center justify-center">
                  <span className="text-sm text-gray-400">Gráfico de barras (wireframe)</span>
                </div>

                {/* Trend chart placeholder */}
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 bg-gray-50 flex items-center justify-center">
                  <span className="text-sm text-gray-400">Tendencia semanal (wireframe)</span>
                </div>
              </div>
            </div>

            {/* Accesos rápidos */}
            <div>
              <h3 className="m-0 mb-3">Accesos rápidos</h3>
            <div className="space-y-3">
              <button
                onClick={onViewMap}
                  className="w-full h-12 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors flex items-center justify-center gap-2"
                >
                  <Map className="w-4 h-4" />
                  <span>Ver mapa de denuncias</span>
                </button>
              <button
                onClick={onOpenConfig}
                className="w-full h-12 bg-white border-2 border-gray-400 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
              >
                <Settings className="w-4 h-4" />
                <span>Configuración del sistema</span>
              </button>
              <button
                onClick={onManageUsers}
                className="w-full h-12 bg-white border-2 border-gray-400 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
              >
                <span className="text-lg leading-none">👥</span>
                <span>Usuarios y permisos</span>
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
            <span>Este panel resume el estado general de las denuncias en el sistema.</span>
          </p>
          <p className="flex items-start">
            <span className="mr-2">•</span>
            <span>Las tarjetas superiores muestran indicadores clave (KPI).</span>
          </p>
          <p className="flex items-start">
            <span className="mr-2">•</span>
            <span>La sección de gráficos es un placeholder para visualizaciones más detalladas.</span>
          </p>
          <p className="flex items-start">
            <span className="mr-2">•</span>
            <span>Los accesos rápidos permiten ir al mapa de denuncias y a la configuración.</span>
          </p>
        </div>
      )}
    </div>
  );
}
