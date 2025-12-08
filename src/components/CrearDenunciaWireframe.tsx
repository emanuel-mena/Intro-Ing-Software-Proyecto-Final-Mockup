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
    <div className="space-y-6">
      {showFrameMeta && (
        <p className="text-sm text-gray-500">CrearDenuncia_ComuniApp</p>
      )}

      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onBack}
            className="w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-gray-700" />
          </button>
          <div>
            <p className="text-sm text-gray-500 m-0">Formulario</p>
            <h1 className="text-2xl font-semibold text-gray-900 m-0">
              Crear nueva denuncia
            </h1>
          </div>
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={onBack}
            className="px-4 py-2 rounded-lg border border-gray-300 text-gray-800 hover:bg-gray-50 transition-colors"
          >
            Cancelar
          </button>
          <button
            type="submit"
            form="crear-denuncia"
            className="px-4 py-2 rounded-lg bg-gray-900 text-white hover:bg-gray-800 transition-colors"
          >
            Enviar denuncia
          </button>
        </div>
      </div>

      <form
        id="crear-denuncia"
        onSubmit={handleSubmit}
        className="grid gap-6 lg:grid-cols-3"
      >
        <div className="lg:col-span-2 space-y-6">
          <div className="border border-gray-200 rounded-xl bg-white p-6 shadow-sm space-y-4">
            <div>
              <label className="block text-sm mb-2 text-gray-700">Título</label>
              <div className="h-12 border border-gray-300 rounded-lg bg-white flex items-center px-3">
                <span className="text-sm text-gray-400">Describe brevemente el problema</span>
              </div>
            </div>

            <div>
              <label className="block text-sm mb-2 text-gray-700">Descripción</label>
              <div className="min-h-28 border border-gray-300 rounded-lg bg-white p-3">
                <span className="text-sm text-gray-400">Proporciona más detalles...</span>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="block text-sm mb-2 text-gray-700">Categoría</label>
                <div className="h-12 border border-gray-300 rounded-lg bg-white flex items-center px-3 justify-between">
                  <span className="text-sm text-gray-400">
                    Vialidad, Alumbrado, Limpieza, Seguridad...
                  </span>
                  <span className="text-gray-400">▼</span>
                </div>
              </div>

              <div>
                <label className="block text-sm mb-2 text-gray-700">Ubicación</label>
                <div className="h-12 border border-gray-300 rounded-lg bg-white flex items-center px-3 mb-3">
                  <MapPin className="w-4 h-4 text-gray-400 mr-2" />
                  <span className="text-sm text-gray-400">Dirección o referencia</span>
                </div>
                <div className="h-32 border border-dashed border-gray-300 rounded-lg bg-gray-50 flex items-center justify-center">
                  <span className="text-sm text-gray-400">Mapa (opcional)</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border border-gray-200 rounded-xl bg-white p-6 shadow-sm space-y-3">
            <h2 className="text-lg font-semibold text-gray-900 m-0">Evidencia</h2>
            <p className="text-sm text-gray-600 m-0">
              Adjunta imágenes o videos que ayuden a identificar el problema.
            </p>
            <button
              type="button"
              className="w-full h-28 border-2 border-dashed border-gray-400 rounded-lg bg-white hover:bg-gray-50 transition-colors flex flex-col items-center justify-center"
            >
              <Upload className="w-6 h-6 text-gray-400 mb-2" />
              <span className="text-sm text-gray-600">Agregar foto o video</span>
            </button>
          </div>
        </div>

        <div className="space-y-4">
          <div className="border border-gray-200 rounded-xl bg-white p-5 shadow-sm space-y-3">
            <h3 className="text-base font-semibold text-gray-900 m-0">Consejos</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Incluye referencias claras de ubicación.</li>
              <li>Describe el impacto del problema y su urgencia.</li>
              <li>Adjunta evidencia para priorizar la atención.</li>
            </ul>
          </div>

          <div className="border border-gray-200 rounded-xl bg-white p-5 shadow-sm space-y-3">
            <h3 className="text-base font-semibold text-gray-900 m-0">Contacto</h3>
            <p className="text-sm text-gray-600 m-0">
              Recibirás actualizaciones al correo registrado y podrás seguir el avance en
              tu panel ciudadano.
            </p>
            <button
              type="submit"
              className="w-full h-11 rounded-lg bg-gray-900 text-white hover:bg-gray-800 transition-colors"
            >
              Enviar denuncia
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
