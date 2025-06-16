import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

// Minor change to trigger re-processing
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}