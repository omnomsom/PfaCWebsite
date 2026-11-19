import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { demoAnimals } from "../demoAnimals";

export default function Inquiry() {
  const { id, kind } = useParams();
  const animal = demoAnimals.find((profile) => profile.id === id);

  if (!animal || !["adopt", "foster"].includes(kind)) {
    return (
      <main className="container py-8">
        <h1 className="f-secondary-heading">Demo inquiry unavailable</h1>
        <Link className="underline" to="/gallery">Back to demo animals</Link>
      </main>
    );
  }

  return <InquiryForm key={id + "/" + kind} animal={animal} kind={kind} />;
}

function InquiryForm({ animal, kind }) {
  const [complete, setComplete] = useState(false);
  const title = kind === "adopt" ? "Adoption inquiry" : "Foster inquiry";

  return (
    <main className="container py-8">
      <div className="mx-auto max-w-xl rounded-xl bg-sky-50 p-6">
        <Link className="underline" to={`/animal/${animal.id}`}>Back to {animal.name}</Link>
        <h1 className="f-secondary-heading my-4">{title} for {animal.name}</h1>
        {complete ? (
          <section role="status">
            <h2 className="text-xl font-bold">Demo inquiry complete</h2>
            <p className="my-3">This sample inquiry was neither sent nor saved.</p>
            <Link className="button inline-block" to="/gallery">Browse demo animals</Link>
          </section>
        ) : (
          <>
            <p className="mb-5">Use the sample details below to try the form.</p>
            <form
              className="grid gap-4"
              onSubmit={(event) => {
                event.preventDefault();
                setComplete(true);
              }}
            >
              <label className="grid gap-1">
                Sample name
                <input className="rounded border bg-white p-2" value="Jamie Example" readOnly />
              </label>
              <label className="grid gap-1">
                Sample email
                <input className="rounded border bg-white p-2" type="email" value="jamie@example.com" readOnly />
              </label>
              <label className="grid gap-1">
                Preferred introduction
                <select className="rounded border bg-white p-2" defaultValue="meet">
                  <option value="meet">Meet at the shelter</option>
                  <option value="call">Start with a video call</option>
                </select>
              </label>
              <button className="button justify-self-start" type="submit">Preview confirmation</button>
            </form>
          </>
        )}
      </div>
    </main>
  );
}
