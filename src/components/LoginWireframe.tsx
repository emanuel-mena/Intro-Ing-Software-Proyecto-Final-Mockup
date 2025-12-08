import { useState } from "react";

interface LoginWireframeProps {
  onLogin?: () => void;
  /** Muestra el nombre del frame y las anotaciones fuera de la “pantalla”. */
  showFrameMeta?: boolean;
}

export function LoginWireframe({
  onLogin,
  showFrameMeta = false,
}: LoginWireframeProps) {
  const [selectedRole, setSelectedRole] = useState<"ciudadano" | "funcionario">(
    "ciudadano"
  );

  return (
    <div className="w-full h-full flex flex-col">
      {/* Frame label (fuera de la “pantalla” del teléfono) */}
      {showFrameMeta && (
        <div className="mb-4 text-center">
          <span className="text-sm text-gray-400">LoginRegistro_ComuniApp</span>
        </div>
      )}

      {/* Contenido principal de la pantalla */}
      <div className="flex-1">
        <div className="w-full h-full px-4 py-6">
          <div className="bg-white rounded-lg shadow-sm border-2 border-gray-300 p-6">
            {/* Logo placeholder */}
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 border-2 border-dashed border-gray-400 rounded-lg flex items-center justify-center">
                <span className="text-xs text-gray-400">LOGO</span>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-center mb-3">Iniciar sesión</h1>

            {/* Subtitle */}
            <p className="text-center text-gray-500 mb-6">
              Bienvenido a ComuniApp
            </p>

            {/* Form card */}
            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              {/* Email input */}
              <div className="mb-4">
                <label className="block text-sm mb-2 text-gray-700">
                  Correo electrónico
                </label>
                <div className="h-12 border-2 border-gray-300 rounded-lg bg-white flex items-center px-3">
                  <span className="text-sm text-gray-400">
                    email@ejemplo.com
                  </span>
                </div>
              </div>

              {/* Password input */}
              <div>
                <label className="block text-sm mb-2 text-gray-700">
                  Contraseña
                </label>
                <div className="h-12 border-2 border-gray-300 rounded-lg bg-white flex items-center px-3">
                  <span className="text-sm text-gray-400">••••••••</span>
                </div>
              </div>
            </div>

            {/* Primary button - Ingresar */}
            <button
              onClick={onLogin}
              className="w-full h-12 bg-gray-800 text-white rounded-lg mb-6 hover:bg-gray-700 transition-colors"
            >
              Ingresar
            </button>

            {/* Separator */}
            <div className="flex items-center mb-4">
              <div className="flex-1 border-t border-gray-300" />
              <span className="px-4 text-sm text-gray-500">
                ¿No tienes cuenta?
              </span>
              <div className="flex-1 border-t border-gray-300" />
            </div>

            {/* Secondary button - Registrarse */}
            <button className="w-full h-12 bg-white border-2 border-gray-400 text-gray-700 rounded-lg mb-6 hover:bg-gray-50 transition-colors">
              Registrarse
            </button>

            {/* Role selector toggle */}
            <div className="mb-6">
              <div className="flex border-2 border-gray-300 rounded-lg overflow-hidden">
                <button
                  onClick={() => setSelectedRole("ciudadano")}
                  className={`flex-1 h-12 transition-colors ${
                    selectedRole === "ciudadano"
                      ? "bg-gray-800 text-white"
                      : "bg-white text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  Ciudadano
                </button>
                <button
                  onClick={() => setSelectedRole("funcionario")}
                  className={`flex-1 h-12 transition-colors ${
                    selectedRole === "funcionario"
                      ? "bg-gray-800 text-white"
                      : "bg-white text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  Funcionario
                </button>
              </div>
            </div>

            {/* Forgot password link */}
            <div className="text-center mb-2">
              <a
                href="#"
                className="text-sm text-gray-600 underline hover:text-gray-800"
              >
                ¿Olvidaste tu contraseña?
              </a>
            </div>

            {/* Footer placeholder */}
            <div className="border-t-2 border-dashed border-gray-300 pt-4 mt-4">
              <div className="h-8 bg-gray-100 rounded flex items-center justify-center">
                <span className="text-xs text-gray-400">
                  Footer - Texto legal
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Annotations (también fuera del “teléfono” si showFrameMeta = true) */}
      {showFrameMeta && (
        <div className="mt-4 px-4 space-y-2 text-sm text-gray-600">
          <p className="flex items-start">
            <span className="mr-2">•</span>
            <span>
              El botón &apos;Ingresar&apos; valida el correo y contraseña.
            </span>
          </p>
          <p className="flex items-start">
            <span className="mr-2">•</span>
            <span>
              El botón &apos;Registrarse&apos; abre la pantalla de registro.
            </span>
          </p>
          <p className="flex items-start">
            <span className="mr-2">•</span>
            <span>
              El selector define si el usuario es Ciudadano o Funcionario.
            </span>
          </p>
          <p className="flex items-start">
            <span className="mr-2">•</span>
            <span>
              El enlace &apos;¿Olvidaste tu contraseña?&apos; lleva al flujo de
              recuperación.
            </span>
          </p>
        </div>
      )}
    </div>
  );
}
