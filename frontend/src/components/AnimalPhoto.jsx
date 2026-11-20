import { useState } from "react";
import placeholder from "../assets/images/paw.svg";

export default function AnimalPhoto({ src, alt, className }) {
  const [failedSource, setFailedSource] = useState(null);
  const unavailable = !src || failedSource === src;

  return (
    <img
      className={className}
      src={unavailable ? placeholder : src}
      alt={unavailable && alt ? `Photo unavailable for ${alt}` : alt}
      onError={unavailable ? undefined : () => setFailedSource(src)}
    />
  );
}
