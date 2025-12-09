// src/WireframeExporter.tsx
import { useRef } from "react";
import * as htmlToImage from "html-to-image";
import { LoginWireframe } from "./components/LoginWireframe";
import { HomeCiudadanoWireframe } from "./components/HomeCiudadanoWireframe";
import { CrearDenunciaWireframe } from "./components/CrearDenunciaWireframe";
import { DetalleDenunciaWireframe } from "./components/DetalleDenunciaWireframe";
// cuando tengas las otras, las agregás igual:
// import { ListaDenunciasFuncionarioWireframe } from "./components/ListaDenunciasFuncionarioWireframe";
// import { GestionDenunciaFuncionarioWireframe } from "./components/GestionDenunciaFuncionarioWireframe";
// import { DashboardAdminWireframe } from "./components/DashboardAdminWireframe";
// import { MapaDenunciasWireframe } from "./components/MapaDenunciasWireframe";
// import { ConfiguracionSistemaWireframe } from "./components/ConfiguracionSistemaWireframe";

type ScreenId =
  | "login"
  | "home"
  | "crear"
  | "detalle";
// | "listaFuncionario"
// | "gestionFuncionario"
// | "dashboardAdmin"
// | "mapa"
// | "config";

interface ExportCardProps {
  id: ScreenId;
  title: string;
  children: React.ReactNode;
}

function ExportCard({ id, title, children }: ExportCardProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  const handleDownload = async () => {
    if (!ref.current) return;
    try {
      const dataUrl = await htmlToImage.toPng(ref.current, {
        // Aseguramos tamaño constante (match con tu “teléfono”)
        width: 375,
        height: 720,
      });

      const link = document.createElement("a");
      link.download = `${id}.png`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error("Error al generar la imagen:", err);
      alert("Ocurrió un error al generar la imagen 😢. Revisa la consola.");
    }
  };

  return (
    <div className="flex flex-col items-center gap-3 border rounded-xl p-4 bg-white shadow-sm">
      <h2 className="text-sm font-semibold text-gray-700">{title}</h2>

      {/* Teléfono con tamaño fijo – este es el que se captura */}
      <div
        ref={ref}
        className="w-[375px] h-[720px] bg-neutral-50 border border-gray-300 m- shadow-xl overflow-hidden"
      >
        {/* Contenido scrolleable dentro del teléfono */}
        <div className="w-full h-full overflow-hidden">
          {/* Cada wireframe respeta w-full h-full y NO muestra meta */}
          {children}
        </div>
      </div>

      <button
        onClick={handleDownload}
        className="px-3 py-1.5 text-xs rounded-lg bg-gray-800 text-white hover:bg-gray-700 transition-colors"
      >
        Descargar PNG
      </button>
    </div>
  );
}

export default function WireframeExporter() {
  return (
    <div className="min-h-screen bg-neutral-100 p-6">
      <h1 className="text-lg font-semibold text-gray-800 mb-4">
        Exportador de Wireframes – ComuniApp
      </h1>
      <p className="text-sm text-gray-600 mb-6">
        Cada tarjeta genera una imagen PNG del wireframe con tamaño fijo
        (375x720 px), lista para insertar en el documento.
      </p>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <ExportCard id="login" title="Login – Ciudadano / Funcionario">
          <LoginWireframe showFrameMeta={false} />
        </ExportCard>

        <ExportCard id="home" title="Home – Ciudadano">
          <HomeCiudadanoWireframe showFrameMeta={false} />
        </ExportCard>

        <ExportCard id="crear" title="Crear denuncia – Ciudadano">
          <CrearDenunciaWireframe showFrameMeta={false} />
        </ExportCard>

        <ExportCard id="detalle" title="Detalle de denuncia – Ciudadano">
          <DetalleDenunciaWireframe showFrameMeta={false} />
        </ExportCard>

        {/*
        Cuando tengas las demás pantallas, solo las agregás así:

        <ExportCard id="listaFuncionario" title="Lista de denuncias – Funcionario">
          <ListaDenunciasFuncionarioWireframe showFrameMeta={false} />
        </ExportCard>

        <ExportCard id="gestionFuncionario" title="Gestión de denuncia – Funcionario">
          <GestionDenunciaFuncionarioWireframe showFrameMeta={false} />
        </ExportCard>

        <ExportCard id="dashboardAdmin" title="Dashboard – Administrador">
          <DashboardAdminWireframe showFrameMeta={false} />
        </ExportCard>

        <ExportCard id="mapa" title="Mapa de denuncias – Administrador">
          <MapaDenunciasWireframe showFrameMeta={false} />
        </ExportCard>

        <ExportCard id="config" title="Configuración del sistema – Administrador">
          <ConfiguracionSistemaWireframe showFrameMeta={false} />
        </ExportCard>
        */}
      </div>
    </div>
  );
}
