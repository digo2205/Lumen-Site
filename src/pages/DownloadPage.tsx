import { useEffect } from "react";

export function DownloadModpackPage() {
  useEffect(() => {
    // URL direta do Dropbox (com ?dl=1)
    const fileUrl = "https://www.dropbox.com/scl/fi/5fyyc5ut4uki0in5n42de/Lumen-v1.5.zip?rlkey=e7cdjysnz3dpsegctsobbuahu&st=xfy64z7q&dl=1";

    // Cria um link temporário e dispara o download
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "Lumen-v1.0.zip";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-200px)] text-center">
      <h1 className="text-2xl font-semibold text-foreground mb-2">
        Baixando a modpack...
      </h1>
      <p className="text-muted-foreground">
        Se o download não começar automaticamente,{" "}
        <a
          href="https://www.dropbox.com/scl/fi/5fyyc5ut4uki0in5n42de/Lumen-v1.5.zip?rlkey=e7cdjysnz3dpsegctsobbuahu&st=xfy64z7q&dl=1"
          className="text-primary hover:underline font-medium"
        >
          clique aqui
        </a>.
      </p>
    </div>
  );
}