import { ArrowLeft, MessageSquare, Upload } from "lucide-react";

interface DetalleDenunciaWireframeProps {
  onBack?: () => void;
  onAddComment?: () => void;
  onAddEvidence?: () => void;
  /** Muestra el nombre del frame y las anotaciones fuera del “teléfono”. */
  showFrameMeta?: boolean;
}

export function DetalleDenunciaWireframe({
  onBack,
  onAddComment,
  onAddEvidence,
  showFrameMeta = false,
}: DetalleDenunciaWireframeProps) {
  const complaint = {
    title: "Bache en carretera",
    status: "En Proceso" as const,
    createdDate: "5 Dic 2024",
    id: "12345",
    category: "Vialidad",
    location: "Av. Revolución #245, Colonia Centro",
    reportedBy: "Juan Pérez",
    description:
      "Se ha formado un bache considerable en la carretera principal que causa daños a los vehículos y representa un peligro para los conductores. El problema se agravó después de las últimas lluvias. La profundidad aproximada es de 15 cm y tiene un diámetro de aproximadamente 80 cm.",
  };

  const updates = [
    {
      date: "7 Dic 2024",
      status: "En proceso",
      note: "Se programó inspección para el día 10 de diciembre.",
    },
    {
      date: "6 Dic 2024",
      status: "Asignado a equipo",
      note: "Se envió equipo a revisar la zona.",
    },
    {
      date: "5 Dic 2024",
      status: "Recibido",
      note: "Denuncia recibida y registrada en el sistema.",
    },
  ];

  const comments = [
    {
      author: "Municipio",
      text: "Por favor mantenga despejada la zona para acceso del equipo de reparación.",
      date: "6 Dic 2024",
    },
    {
      author: "Ciudadano",
      text: "El problema persiste después de la lluvia. El bache se está haciendo más grande.",
      date: "7 Dic 2024",
    },
  ];

  const getStatusStyle = (status: string) => {
    switch (status) {
      case "Pendiente":
        return "bg-gray-200 text-gray-700";
      case "En Proceso":
        return "bg-blue-100 text-blue-700 border-blue-300";
      case "Resuelto":
        return "bg-green-100 text-green-700 border-green-300";
      default:
        return "bg-gray-200 text-gray-700";
    }
  };

  return (
    <div className="w-full h-full flex flex-col">
      {/* Frame label (fuera de la “pantalla”) */}
      {showFrameMeta && (
        <div className="mb-4 text-center">
          <span className="text-sm text-gray-400">
            DetalleDenuncia_ComuniApp
          </span>
        </div>
      )}

      {/* Contenido principal dentro del “teléfono” */}
      <div className="flex-1 px-4 py-4">
        <div className="bg-white rounded-lg shadow-sm border-2 border-gray-300">
          {/* Top bar */}
          <div className="border-b-2 border-gray-300 px-4 py-4 flex items-center bg-gray-50">
            <button
              onClick={onBack}
              className="w-8 h-8 border-2 border-gray-400 rounded flex items-center justify-center hover:bg-gray-100 transition-colors mr-3"
            >
              <ArrowLeft className="w-4 h-4 text-gray-600" />
            </button>
            <h2 className="m-0">Detalle de denuncia</h2>
          </div>

          {/* Content */}
          <div className="p-4 space-y-6">
            {/* Complaint header */}
            <div className="pb-4 border-b-2 border-gray-200">
              <div className="flex items-start justify-between mb-3">
                <h1 className="flex-1 m-0">{complaint.title}</h1>
                <span
                  className={`inline-block px-3 py-1 rounded text-xs border ml-3 ${getStatusStyle(
                    complaint.status
                  )}`}
                >
                  {complaint.status}
                </span>
              </div>
              <p className="text-sm text-gray-500 m-0">
                Creada el {complaint.createdDate} · ID #{complaint.id}
              </p>
            </div>

            {/* Main information */}
            <div>
              <h3 className="m-0 mb-3">Información principal</h3>
              <div className="space-y-2 bg-gray-50 border-2 border-gray-200 rounded-lg p-4">
                <div className="flex">
                  <span className="text-sm min-w-32">Categoría:</span>
                  <span className="text-sm text-gray-600">
                    {complaint.category}
                  </span>
                </div>
                <div className="flex">
                  <span className="text-sm min-w-32">Ubicación:</span>
                  <span className="text-sm text-gray-600">
                    {complaint.location}
                  </span>
                </div>
                <div className="flex">
                  <span className="text-sm min-w-32">Reportada por:</span>
                  <span className="text-sm text-gray-600">
                    {complaint.reportedBy}
                  </span>
                </div>
              </div>
            </div>

            {/* Description */}
            <div>
              <h3 className="m-0 mb-3">Descripción</h3>
              <div className="border-2 border-gray-200 rounded-lg p-4 bg-white">
                <p className="text-sm text-gray-700 m-0 leading-relaxed">
                  {complaint.description}
                </p>
              </div>
            </div>

            {/* Update history */}
            <div>
              <h3 className="m-0 mb-3">Historial de actualizaciones</h3>
              <div className="space-y-3">
                {updates.map((update, index) => (
                  <div
                    key={index}
                    className="border-2 border-gray-200 rounded-lg p-3 bg-gray-50 relative pl-6"
                  >
                    <div className="absolute left-3 top-4 w-2 h-2 bg-gray-400 rounded-full" />
                    <div className="flex items-baseline justify-between mb-1">
                      <span className="text-xs text-gray-500">
                        {update.date}
                      </span>
                      <span className="text-xs px-2 py-1 bg-white border border-gray-300 rounded">
                        {update.status}
                      </span>
                    </div>
                    <p className="text-sm text-gray-700 m-0">
                      {update.note}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Comments */}
            <div>
              <h3 className="m-0 mb-3">Comentarios</h3>
              <div className="space-y-3">
                {comments.map((comment, index) => (
                  <div
                    key={index}
                    className="border-2 border-gray-200 rounded-lg p-3 bg-white"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs px-2 py-1 bg-gray-800 text-white rounded">
                        {comment.author}
                      </span>
                      <span className="text-xs text-gray-500">
                        {comment.date}
                      </span>
                    </div>
                    <p className="text-sm text-gray-700 m-0">
                      {comment.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Action buttons */}
            <div className="space-y-3 pt-4">
              <button
                onClick={onAddComment}
                className="w-full h-12 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Agregar comentario</span>
              </button>
              <button
                onClick={onAddEvidence}
                className="w-full h-12 bg-white border-2 border-gray-400 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
              >
                <Upload className="w-4 h-4" />
                <span>Agregar evidencia</span>
              </button>
              <button
                onClick={onBack}
                className="w-full h-12 text-gray-600 hover:text-gray-800 transition-colors"
              >
                Volver
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Anotaciones (fuera del teléfono si showFrameMeta = true) */}
      {showFrameMeta && (
        <div className="mt-4 px-4 space-y-2 text-sm text-gray-600">
          <p className="flex items-start">
            <span className="mr-2">•</span>
            <span>
              Esta pantalla muestra toda la información detallada de una denuncia
              específica.
            </span>
          </p>
          <p className="flex items-start">
            <span className="mr-2">•</span>
            <span>
              La sección &apos;Historial de actualizaciones&apos; resume los
              cambios de estado realizados por el municipio.
            </span>
          </p>
          <p className="flex items-start">
            <span className="mr-2">•</span>
            <span>
              El botón &apos;Agregar comentario&apos; permite al ciudadano enviar
              nueva información o feedback.
            </span>
          </p>
          <p className="flex items-start">
            <span className="mr-2">•</span>
            <span>
              El botón &apos;Agregar evidencia&apos; permite subir nuevas fotos o
              videos relacionados con el problema.
            </span>
          </p>
          <p className="flex items-start">
            <span className="mr-2">•</span>
            <span>
              El botón &apos;Volver&apos; regresa a la lista de denuncias del
              ciudadano.
            </span>
          </p>
        </div>
      )}
    </div>
  );
}
