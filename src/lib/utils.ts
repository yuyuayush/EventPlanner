import { type ClassValue, clsx } from "clsx"
import { json } from "stream/consumers"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export const handleError =(error:unknown) =>{
  console.log(error)
  throw new Error (typeof error === 'string' ? error : JSON.stringify(error));
}