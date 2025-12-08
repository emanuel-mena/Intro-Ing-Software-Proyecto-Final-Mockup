import { useState } from "react";

type Role = "ciudadano" | "funcionario" | "administrador";

interface LoginWireframeProps {
  onLogin?: (role: Role) => void;
  onRegister?: () => void;
  /** Muestra el nombre del frame y las anotaciones fuera de la “pantalla”. */
  showFrameMeta?: boolean;
}

export function LoginWireframe({
  onLogin,
  onRegister,
  showFrameMeta = false,
}: LoginWireframeProps) {
  const [selectedRole, setSelectedRole] = useState<Role>("ciudadano");

  return (
    <div className="space-y-8">
      {showFrameMeta && (
        <p className="text-sm text-gray-500">LoginRegistro_ComuniApp</p>
      )}

      <div className="grid gap-8 lg:grid-cols-2 items-center">
        <div className="space-y-4">
          <p className="inline-flex rounded-full bg-gray-200 text-gray-700 px-3 py-1 text-xs uppercase tracking-wide">
            Acceso a la plataforma
          </p>
          <h1 className="text-3xl font-semibold text-gray-900 leading-tight">
            Bienvenido a ComuniApp
          </h1>
          <p className="text-gray-600 leading-relaxed">
            Inicia sesión para crear y dar seguimiento a denuncias ciudadanas. Elige tu
            rol para ajustar las acciones y navegación disponibles.
          </p>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-start gap-2">
              <span className="mt-1 h-2 w-2 rounded-full bg-gray-700" />
              <span>
                Usuarios ciudadanos pueden crear, consultar y comentar denuncias.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-2 w-2 rounded-full bg-gray-700" />
              <span>Funcionarios gestionan el avance y comparten actualizaciones.</span>
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 border-2 border-dashed border-gray-400 rounded-lg flex items-center justify-center">
                <span className="text-xs text-gray-400">LOGO</span>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-900 m-0">Iniciar sesión</h2>
                <p className="text-sm text-gray-500 m-0">
                  Ingresa tus credenciales para continuar
                </p>
              </div>
            </div>
            <div className="hidden md:flex border border-gray-200 rounded-lg overflow-hidden text-sm">
              {["ciudadano", "funcionario", "administrador"].map((role) => (
                <button
                  key={role}
                  onClick={() => setSelectedRole(role as Role)}
                  className={`px-3 py-2 transition-colors ${
                    selectedRole === role
                      ? "bg-gray-900 text-white"
                      : "bg-white text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {role.charAt(0).toUpperCase() + role.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            <div>
              <label className="block text-sm mb-2 text-gray-700">Correo electrónico</label>
              <div className="h-12 border border-gray-300 rounded-lg bg-white flex items-center px-3">
                <span className="text-sm text-gray-400">email@ejemplo.com</span>
              </div>
            </div>

            <div>
              <label className="block text-sm mb-2 text-gray-700">Contraseña</label>
              <div className="h-12 border border-gray-300 rounded-lg bg-white flex items-center px-3">
                <span className="text-sm text-gray-400">••••••••</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <button
              onClick={() => onLogin?.(selectedRole)}
              className="w-full h-12 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              Ingresar
            </button>
            <button
              onClick={onRegister}
              className="w-full h-12 bg-white border border-gray-300 text-gray-800 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Registrarse
            </button>
          </div>

          <div className="flex items-center justify-between text-sm text-gray-600 flex-wrap gap-3">
            <div className="flex items-center gap-2">
              <span className="text-gray-500">Rol seleccionado:</span>
              <span className="font-medium text-gray-900 capitalize">{selectedRole}</span>
            </div>
            <a href="#" className="underline hover:text-gray-800">
              ¿Olvidaste tu contraseña?
            </a>
          </div>

          <div className="md:hidden">
            <p className="text-sm text-gray-600 mb-2">Elige tu rol</p>
            <div className="grid grid-cols-2 gap-3">
              {["ciudadano", "funcionario", "administrador"].map((role) => (
                <button
                  key={role}
                  onClick={() => setSelectedRole(role as Role)}
                  className={`h-12 rounded-lg border transition-colors ${
                    selectedRole === role
                      ? "bg-gray-900 text-white border-gray-900"
                      : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                  }`}
                >
                  {role.charAt(0).toUpperCase() + role.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
