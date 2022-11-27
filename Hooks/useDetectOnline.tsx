import { checkWindow } from "@/lib/functions/storage.lib";
import { useEffect, useState } from "react";

function useOnlineStatus() {
  const [online, setOnline] = useState<boolean>(
    checkWindow() ? window.navigator.onLine : false
  );
  useEffect(() => {
    if (checkWindow()) {
      window.addEventListener("online", () => setOnline(true));
      window.addEventListener("offline", () => setOnline(false));
    }
  }, []);

  return online;
}

export default useOnlineStatus;
