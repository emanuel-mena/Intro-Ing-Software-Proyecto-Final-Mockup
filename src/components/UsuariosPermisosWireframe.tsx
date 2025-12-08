interface UsuariosPermisosWireframeProps {
  onBack?: () => void;
  showFrameMeta?: boolean;
}

const users = [
  { name: "Ana López", role: "Ciudadano", status: "Activo" },
  { name: "Carlos Rivera", role: "Funcionario", status: "Activo" },
  { name: "María Gómez", role: "Administrador", status: "Suspendido" }
];

export function UsuariosPermisosWireframe({
  onBack,
  showFrameMeta = true
}: UsuariosPermisosWireframeProps) {
  return (
    <div className="space-y-6">
      {showFrameMeta && (
        <p className="text-sm text-gray-500">UsuariosPermisos_ComuniApp</p>
      )}

      <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
        <div className="flex items-center justify-between px-6 py-4 bg-gray-50 border-b border-gray-200">
          <div>
            <p className="text-xs uppercase tracking-wide text-gray-500 m-0">Administración</p>
            <h2 className="text-xl font-semibold text-gray-900 m-0">Usuarios y permisos</h2>
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

        <div className="p-6 space-y-4">
          <div className="flex flex-wrap gap-3">
            <button className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors">
              Crear usuario
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-800 hover:bg-gray-50 transition-colors">
              Importar desde CSV
            </button>
          </div>

          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <table className="w-full text-left">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-2 text-sm text-gray-600">Nombre</th>
                  <th className="px-4 py-2 text-sm text-gray-600">Rol</th>
                  <th className="px-4 py-2 text-sm text-gray-600">Estado</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.name} className="border-t border-gray-100">
                    <td className="px-4 py-2 text-gray-900">{user.name}</td>
                    <td className="px-4 py-2 text-gray-700">{user.role}</td>
                    <td className="px-4 py-2">
                      <span className="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-800 border border-gray-200">
                        {user.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
