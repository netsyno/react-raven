import { useEffect } from "react";
import RavenJS from "raven-js";

export default function useRaven(dsn, config = {}) {
  useEffect(() => {
    RavenJS.config(dsn, config).install();
    return () => {
      RavenJS.uninstall();
    };
  }, [dsn, config]);
  return null;
}
