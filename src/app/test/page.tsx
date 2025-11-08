"use client";
import { ReactNode, useContext } from "react";
import { LocationContext } from "@lib/contexts/location";

const useController = ({ children }: { children: ReactNode }) => {
  const location = useContext(LocationContext);
  return {
    location,
    children
  };
}

const view = ({ location, children }: ReturnType<typeof useController>) => {
  return (
    <section aria-labelledby="test-title" className="prose">
      <h2 id="test-title" className="text-2xl font-semibold">
        Test
      </h2>
      <p>
        Vous êtes localisé à : {location ? `${location.city}` : "Localisation non disponible"}
      </p>
    </section>
  )
}

const Page = ({ children }: { children: ReactNode }) => view(useController({children}));
export default Page