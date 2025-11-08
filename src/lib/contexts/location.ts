import { createContext } from "react";

export type Location = {
    lat: number,
    lon: number,
    city: string,
} | null;
export const LocationContext = createContext<Location>(null);