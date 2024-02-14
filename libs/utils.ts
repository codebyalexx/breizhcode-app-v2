import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function padWithLeadingZeros(number: number, length: number = 2) {
  return String(number).padStart(length, "0");
}
