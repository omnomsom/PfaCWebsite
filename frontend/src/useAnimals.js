import { useEffect, useState } from "react";
import { api } from "./api";

const hostedPhotoSets = new Map([
  ["654cba99b5d23d6ec8cd4460", { folder: "leela", count: 4 }],
  ["654cbc04b5d23d6ec8cd446c", { folder: "jack", count: 4 }],
  ["654cbdecb20aec82d8ab6e48", { folder: "zorro", count: 5 }],
  ["654cc27cb20aec82d8ab6e4e", { folder: "frodo", count: 4 }],
  ["654cc334b20aec82d8ab6e52", { folder: "hero", count: 3 }],
]);

function withHostedPhotos(animal) {
  const hostedPhotos = hostedPhotoSets.get(animal._id);
  if (!hostedPhotos) return animal;

  const hasStoredReplacement = animal.photos?.some(
    (photo) => photo && !/^https:\/\/[^/]+\.fbcdn\.net\//i.test(photo),
  );

  if (hasStoredReplacement) return animal;

  const { folder, count } = hostedPhotos;

  return {
    ...animal,
    photos: Array.from(
      { length: count },
      (_, index) => `/photos/${folder}/${folder}-${index + 1}.jpg`,
    ),
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
