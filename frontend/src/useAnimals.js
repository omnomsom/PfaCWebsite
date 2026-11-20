import { useEffect, useState } from "react";
import { api } from "./api";

export function useAnimals(path = "/animals") {
  const [result, setResult] = useState({ path, status: "loading" });

  useEffect(() => {
    const controller = new AbortController();

    api.get(path, { signal: controller.signal }).then(
      ({ data }) => {
        if (!controller.signal.aborted) {
          setResult({ path, status: "ready", data });
        }
      },
      (error) => {
        if (!controller.signal.aborted) {
          const status = error.response?.status === 404 ? "missing" : "error";
          setResult({ path, status });
        }
      },
    );

    return () => controller.abort();
  }, [path]);

  return result.path === path ? result : { status: "loading" };
}
