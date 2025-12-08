interface HistorialDenunciaWireframeProps {
  onBack?: () => void;
  showFrameMeta?: boolean;
}

const events = [
  {
    title: "Estado actualizado a 'En proceso'",
    date: "07 Dic 2024",
    actor: "Funcionario municipal",
    detail: "Se asignó al área de Vialidad y Alumbrado."
  },
  {
    title: "Comentario ciudadano",
    date: "06 Dic 2024",
    actor: "Ana López",
    detail: "Se agregaron fotos adicionales del bache."
  },
  {
    title: "Denuncia creada",
    date: "05 Dic 2024",
    actor: "Ana López",
    detail: "Reporte inicial desde la app móvil."
  }
];

export function HistorialDenunciaWireframe({
  onBack,
  showFrameMeta = true
}: HistorialDenunciaWireframeProps) {
  return (
    <div className="space-y-6">
      {showFrameMeta && (
        <p className="text-sm text-gray-500">HistorialDenuncia_ComuniApp</p>
      )}

      <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
        <div className="flex items-center justify-between px-6 py-4 bg-gray-50 border-b border-gray-200">
          <div>
            <p className="text-xs uppercase tracking-wide text-gray-500 m-0">Seguimiento</p>
            <h2 className="text-xl font-semibold text-gray-900 m-0">Historial y cambios</h2>
            <p className="text-sm text-gray-600 m-0">Denuncia #12345</p>
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
          {events.map((event, index) => (
            <div
              key={`${event.title}-${index}`}
              className="p-4 border border-gray-200 rounded-lg bg-gray-50"
            >
              <div className="flex items-center justify-between gap-3 flex-wrap">
                <div>
                  <p className="text-sm text-gray-600 m-0">{event.date}</p>
                  <h3 className="text-lg font-semibold text-gray-900 m-0 mt-1">{event.title}</h3>
                </div>
                <span className="text-xs px-3 py-1 rounded-full bg-white border border-gray-300 text-gray-700">
                  {event.actor}
                </span>
              </div>
              <p className="text-sm text-gray-700 m-0 mt-3">{event.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
