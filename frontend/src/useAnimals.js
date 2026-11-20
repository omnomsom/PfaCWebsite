import { useEffect, useState } from "react";
import { api } from "./api";

const hostedPhotoFolders = new Map([
  ["654cba99b5d23d6ec8cd4460", "leela"],
  ["654cbc04b5d23d6ec8cd446c", "jack"],
]);

function withHostedPhotos(animal) {
  const folder = hostedPhotoFolders.get(animal._id);
  const hasStoredReplacement = animal.photos?.some(
    (photo) => photo && !/^https:\/\/[^/]+\.fbcdn\.net\//i.test(photo),
  );

  if (!folder || hasStoredReplacement) return animal;

  return {
    ...animal,
    photos: [1, 2, 3, 4].map((number) => `/photos/${folder}/${folder}-${number}.jpg`),
  };
}

export function useAnimals(path = "/animals") {
  const [result, setResult] = useState({ path, status: "loading" });

  useEffect(() => {
    const controller = new AbortController();

    api.get(path, { signal: controller.signal }).then(
      ({ data }) => {
        if (!controller.signal.aborted) {
          const animals = Array.isArray(data) ? data.map(withHostedPhotos) : withHostedPhotos(data);
          setResult({ path, status: "ready", data: animals });
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
