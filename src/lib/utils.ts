import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import * as z from 'zod';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const validateUserId = z.object({
  userid: z.string().nonempty("User ID cannot be empty")
});


export const validatePOST = z.object({
  userid: z.string(),
  productid: z.string(),
  quantity: z.number()
});


export const validateDelete = z.object({
  userid:z.string(),
  productid :z.string()
})