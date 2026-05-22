import { useEffect } from "react";

export function DownloadModpackPage() {
  useEffect(() => {
    // URL direta do Dropbox (com ?dl=1)
    const fileUrl =
      "https://www.dropbox.com/";

    // Cria um link temporário e dispara o download
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "elyria-modpack-1.0.zip";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-2xl font-semibold text-gray-900 mb-2">
        Baixando a modpack...
      </h1>
      <p className="text-gray-600">
        Se o download não começar automaticamente,{" "}
        <a
          href="https://www.dropbox.com/"
          className="text-blue-600 underline"
        >
          clique aqui
        </a>.
      </p>
    </div>
  );
}
