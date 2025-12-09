import { UserCircle } from "lucide-react";

interface PerfilCiudadanoWireframeProps {
  onBack?: () => void;
  showFrameMeta?: boolean;
}

export function PerfilCiudadanoWireframe({
  onBack,
  showFrameMeta = true
}: PerfilCiudadanoWireframeProps) {
  return (
    <div className="space-y-6">
      {showFrameMeta && (
        <p className="text-sm text-gray-500">PerfilCiudadano_ComuniApp</p>
      )}

      <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
        <div className="flex items-center justify-between px-6 py-4 bg-gray-50 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <UserCircle className="w-10 h-10 text-gray-500" />
            <div>
              <p className="text-xs uppercase tracking-wide text-gray-500 m-0">Ciudadano</p>
              <h2 className="text-xl font-semibold text-gray-900 m-0">Mi perfil</h2>
            </div>
          </div>
          {onBack && (
            <button
              onClick={onBack}
              className="px-3 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Volver
            </button>
          )}
        </div>

        <div className="p-6 space-y-6">
          <section className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <p className="text-sm text-gray-600 m-0">Nombre completo</p>
              <div className="h-12 border border-gray-200 rounded-lg bg-gray-50 flex items-center px-3 text-gray-800">
                Ana López</div>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-gray-600 m-0">Correo electrónico</p>
              <div className="h-12 border border-gray-200 rounded-lg bg-gray-50 flex items-center px-3 text-gray-800">
                ana.lopez@email.com
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-gray-600 m-0">Teléfono</p>
              <div className="h-12 border border-gray-200 rounded-lg bg-gray-50 flex items-center px-3 text-gray-800">
                +52 55 1234 5678
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-gray-600 m-0">Municipio</p>
              <div className="h-12 border border-gray-200 rounded-lg bg-gray-50 flex items-center px-3 text-gray-800">
                San José
              </div>
            </div>
          </section>

          <section className="space-y-3">
            <p className="text-sm text-gray-600 m-0">Preferencias</p>
            <div className="grid gap-3 md:grid-cols-2">
              <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg bg-gray-50">
                <input type="checkbox" checked readOnly className="accent-gray-800" />
                <span>Recibir notificaciones por correo</span>
              </label>
              <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg bg-gray-50">
                <input type="checkbox" className="accent-gray-800" readOnly />
                <span>Compartir ubicación automáticamente</span>
              </label>
            </div>
          </section>

          <div className="flex flex-wrap gap-3">
            <button className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors">
              Actualizar perfil
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-800 hover:bg-gray-50 transition-colors">
              Cambiar contraseña
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
