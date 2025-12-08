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
    <div className="space-y-6">
      {showFrameMeta && (
        <p className="text-sm text-gray-500">DetalleDenuncia_ComuniApp</p>
      )}

      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-gray-700" />
          </button>
          <div>
            <p className="text-sm text-gray-500 m-0">Detalle</p>
            <h1 className="text-2xl font-semibold text-gray-900 m-0">
              Información de denuncia
            </h1>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={onAddComment}
            className="px-4 py-2 rounded-lg bg-gray-900 text-white hover:bg-gray-800 transition-colors flex items-center gap-2"
          >
            <MessageSquare className="w-4 h-4" />
            Agregar comentario
          </button>
          <button
            onClick={onAddEvidence}
            className="px-4 py-2 rounded-lg border border-gray-300 text-gray-800 hover:bg-gray-50 transition-colors flex items-center gap-2"
          >
            <Upload className="w-4 h-4" />
            Agregar evidencia
          </button>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <div className="border border-gray-200 rounded-xl bg-white p-6 shadow-sm space-y-4">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h2 className="text-xl font-semibold text-gray-900 m-0">
                  {complaint.title}
                </h2>
                <p className="text-sm text-gray-500 m-0">
                  Creada el {complaint.createdDate} · ID #{complaint.id}
                </p>
              </div>
              <span
                className={`inline-flex px-3 py-1 rounded-full text-xs border ${getStatusStyle(
                  complaint.status
                )}`}
              >
                {complaint.status}
              </span>
            </div>

            <div className="grid gap-3 md:grid-cols-2">
              <div className="p-4 rounded-lg border border-gray-200 bg-gray-50 space-y-2">
                <p className="text-xs text-gray-500 m-0">Categoría</p>
                <p className="text-sm text-gray-800 m-0">{complaint.category}</p>
              </div>
              <div className="p-4 rounded-lg border border-gray-200 bg-gray-50 space-y-2">
                <p className="text-xs text-gray-500 m-0">Reportada por</p>
                <p className="text-sm text-gray-800 m-0">{complaint.reportedBy}</p>
              </div>
              <div className="p-4 rounded-lg border border-gray-200 bg-gray-50 space-y-2 md:col-span-2">
                <p className="text-xs text-gray-500 m-0">Ubicación</p>
                <p className="text-sm text-gray-800 m-0">{complaint.location}</p>
              </div>
            </div>

            <div>
              <h3 className="text-base font-semibold text-gray-900 mb-2">Descripción</h3>
              <div className="border border-gray-200 rounded-lg p-4 bg-white">
                <p className="text-sm text-gray-700 m-0 leading-relaxed">
                  {complaint.description}
                </p>
              </div>
            </div>
          </div>

          <div className="border border-gray-200 rounded-xl bg-white p-6 shadow-sm space-y-4">
            <h3 className="text-base font-semibold text-gray-900 m-0">
              Historial de actualizaciones
            </h3>
            <div className="space-y-3">
              {updates.map((update, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg p-3 bg-gray-50"
                >
                  <div className="flex items-baseline justify-between mb-1">
                    <span className="text-xs text-gray-500">{update.date}</span>
                    <span className="text-xs px-2 py-1 bg-white border border-gray-300 rounded">
                      {update.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-700 m-0">{update.note}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="border border-gray-200 rounded-xl bg-white p-6 shadow-sm space-y-3">
            <h3 className="text-base font-semibold text-gray-900 m-0">Comentarios</h3>
            <div className="space-y-3">
              {comments.map((comment, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg p-3 bg-white"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs px-2 py-1 bg-gray-900 text-white rounded">
                      {comment.author}
                    </span>
                    <span className="text-xs text-gray-500">{comment.date}</span>
                  </div>
                  <p className="text-sm text-gray-700 m-0">{comment.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="border border-gray-200 rounded-xl bg-white p-5 shadow-sm space-y-3">
            <h3 className="text-base font-semibold text-gray-900 m-0">Acciones</h3>
            <p className="text-sm text-gray-600 m-0">
              Envía comentarios o agrega evidencia adicional para acelerar la atención.
            </p>
            <button
              onClick={onAddComment}
              className="w-full h-11 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" /> Agregar comentario
            </button>
            <button
              onClick={onAddEvidence}
              className="w-full h-11 bg-white border border-gray-300 text-gray-800 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
            >
              <Upload className="w-4 h-4" /> Subir evidencia
            </button>
            <button
              onClick={onBack}
              className="w-full h-11 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Volver al listado
            </button>
          </div>

          <div className="border border-gray-200 rounded-xl bg-white p-5 shadow-sm space-y-3">
            <h3 className="text-base font-semibold text-gray-900 m-0">Estado y comunicación</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Recibe alertas de cambios de estado en tu correo.</li>
              <li>Coordina con funcionarios desde la sección de comentarios.</li>
              <li>Sigue el progreso sin necesidad de una vista móvil simulada.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
