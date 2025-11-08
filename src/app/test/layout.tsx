"use client";
import { useEffect, useRef, useState, ReactNode } from "react";
import TestTemplate from "@templates/TestTemplate";
import { Location, LocationContext } from "@lib/contexts/location";



type TestLayoutProps = {
  children: ReactNode
};

const useController = () => {
  const [location, setLocation] = useState<Location>(null);
  const [error, setError] = useState<string | null>(null);
  const isMounted = useRef(false)

  useEffect(() => {
    isMounted.current = true;

    const fetchIpLocation = async () => {
      try {
        const res = await fetch("https://ipapi.co/json/");
        if (!res.ok) {
          setLocation(null)
        }
        
        const data = await res.json();
        if (data && data.latitude && data.longitude) {
          setLocation({ lat: Number(data.latitude), lon: Number(data.longitude), city: data.city });
        } else {
          setLocation(null)
        }
      } catch {
        setError("Erreur lors de la récupération de la position par IP")
      }
    };

    fetchIpLocation()

    return () => {
      isMounted.current = false;
    };
  }, []);

  return { location, error };
};

const view = ({
  location,
  error,
  children,
}: ReturnType<typeof useController> & { children: ReactNode }) => {
  return (
    <LocationContext.Provider value={location}>
      <TestTemplate>{children}</TestTemplate>
    </LocationContext.Provider>
  );
};

export default function TestLayout({ children }: Readonly<TestLayoutProps>) {
  const controller = useController();
  return view({ ...controller, children });
}