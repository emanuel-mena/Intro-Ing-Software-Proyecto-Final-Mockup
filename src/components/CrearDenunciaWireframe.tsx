import { FormEvent } from "react";
import { ArrowLeft, MapPin, Upload } from "lucide-react";

interface CrearDenunciaWireframeProps {
  onBack?: () => void;
  onSubmit?: () => void;
  /** Muestra el nombre del frame y las anotaciones fuera del “teléfono”. */
  showFrameMeta?: boolean;
}

export function CrearDenunciaWireframe({
  onBack,
  onSubmit,
  showFrameMeta = false,
}: CrearDenunciaWireframeProps) {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit();
    }
  };

  return (
    <div className="w-full h-full flex flex-col">
      {/* Frame label (fuera de la “pantalla”) */}
      {showFrameMeta && (
        <div className="mb-4 text-center">
          <span className="text-sm text-gray-400">
            CrearDenuncia_ComuniApp
          </span>
        </div>
      )}

      {/* Contenido principal dentro del “teléfono” */}
      <div className="flex-1 px-4 py-4">
        <div className="bg-white rounded-lg shadow-sm border-2 border-gray-300">
          {/* Top bar */}
          <div className="border-b-2 border-gray-300 px-4 py-4 flex items-center bg-gray-50">
            <button
              type="button"
              onClick={onBack}
              className="w-8 h-8 border-2 border-gray-400 rounded flex items-center justify-center hover:bg-gray-100 transition-colors mr-3"
            >
              <ArrowLeft className="w-4 h-4 text-gray-600" />
            </button>
            <h2 className="m-0">Crear denuncia</h2>
          </div>

          {/* Form content */}
          <form onSubmit={handleSubmit} className="p-4 space-y-6">
            {/* Título field */}
            <div>
              <label className="block text-sm mb-2 text-gray-700">
                Título
              </label>
              <div className="h-12 border-2 border-gray-300 rounded-lg bg-white flex items-center px-3">
                <span className="text-sm text-gray-400">
                  Describe brevemente el problema
                </span>
              </div>
            </div>

            {/* Descripción field */}
            <div>
              <label className="block text-sm mb-2 text-gray-700">
                Descripción
              </label>
              <div className="h-24 border-2 border-gray-300 rounded-lg bg-white p-3">
                <span className="text-sm text-gray-400">
                  Proporciona más detalles...
                </span>
              </div>
            </div>

            {/* Categoría field */}
            <div>
              <label className="block text-sm mb-2 text-gray-700">
                Categoría
              </label>
              <div className="h-12 border-2 border-gray-300 rounded-lg bg-white flex items-center px-3 justify-between">
                <span className="text-sm text-gray-400">
                  Vialidad, Alumbrado, Limpieza, Seguridad...
                </span>
                <span className="text-gray-400">▼</span>
              </div>
            </div>

            {/* Ubicación field */}
            <div>
              <label className="block text-sm mb-2 text-gray-700">
                Ubicación
              </label>
              <div className="h-12 border-2 border-gray-300 rounded-lg bg-white flex items-center px-3 mb-3">
                <MapPin className="w-4 h-4 text-gray-400 mr-2" />
                <span className="text-sm text-gray-400">
                  Dirección o referencia
                </span>
              </div>
              {/* Map placeholder */}
              <div className="h-32 border-2 border-dashed border-gray-300 rounded-lg bg-gray-50 flex items-center justify-center">
                <span className="text-sm text-gray-400">Mapa (opcional)</span>
              </div>
            </div>

            {/* Evidencia field */}
            <div>
              <label className="block text-sm mb-2 text-gray-700">
                Evidencia
              </label>
              <button
                type="button"
                className="w-full h-24 border-2 border-dashed border-gray-400 rounded-lg bg-white hover:bg-gray-50 transition-colors flex flex-col items-center justify-center"
              >
                <Upload className="w-6 h-6 text-gray-400 mb-2" />
                <span className="text-sm text-gray-400">
                  Agregar foto o video
                </span>
              </button>
            </div>

            {/* Action buttons */}
            <div className="flex gap-3 pt-4">
              <button
                type="button"
                onClick={onBack}
                className="flex-1 h-12 bg-white border-2 border-gray-400 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="flex-1 h-12 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
              >
                Enviar denuncia
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Anotaciones (fuera del teléfono si showFrameMeta = true) */}
      {showFrameMeta && (
        <div className="mt-4 px-4 space-y-2 text-sm text-gray-600">
          <p className="flex items-start">
            <span className="mr-2">•</span>
            <span>
              El botón &apos;Enviar denuncia&apos; enviará el formulario con los
              campos obligatorios.
            </span>
          </p>
          <p className="flex items-start">
            <span className="mr-2">•</span>
            <span>
              La sección &apos;Evidencia&apos; permite adjuntar fotos o videos
              del problema.
            </span>
          </p>
          <p className="flex items-start">
            <span className="mr-2">•</span>
            <span>
              El botón &apos;Cancelar&apos; regresa a la pantalla de inicio del
              ciudadano.
            </span>
          </p>
        </div>
      )}
    </div>
  );
}
