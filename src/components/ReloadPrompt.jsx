import React from "react";

import { useRegisterSW } from "virtual:pwa-register/react";

function ReloadPrompt() {
  const {
    offlineReady: [offlineReady, setOfflineReady],
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW({
    onRegistered(r) {
      // eslint-disable-next-line prefer-template
      console.log("SW Registered: " + r);
    },
    onRegisterError(error) {
      console.log("SW registration error", error);
    },
  });

  const close = () => {
    setOfflineReady(false);
    setNeedRefresh(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {(offlineReady || needRefresh) && (
        <div className="bg-white shadow-lg rounded-xl p-4 w-72 sm:w-80 border border-gray-200 flex flex-col gap-3 animate-fadeIn">
          <div className="text-gray-800 text-sm font-medium">
            {offlineReady ? (
              <span>✅ App lista para trabajar sin conexión.</span>
            ) : (
              <span>
                🔄 Nuevo contenido disponible. Haz clic en{" "}
                <strong>Recargar</strong>.
              </span>
            )}
          </div>
          <div className="flex justify-end gap-2">
            {needRefresh && (
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-3 py-1.5 rounded-lg transition-colors"
                onClick={() => updateServiceWorker(true)}
              >
                Reload
              </button>
            )}
            <button
              className="bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm px-3 py-1.5 rounded-lg transition-colors"
              onClick={() => close()}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ReloadPrompt;
