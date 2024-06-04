import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { z } from "zod";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// export const validateUserId = z.object({
//   userid: z.string()
// });
// export const validateDelete = z.object({
//   userid:z.string(),
//   productid:z.string()
// })
// export const validatePOST = z.object({
//   userid:z.string(),
//   productid:z.string(),
//   quantity:z.number()
// })


interface UserIdData {
  userid: string;
}

interface DeleteData extends UserIdData {
  productid: string;
}

interface PostData extends DeleteData {
  quantity: number;
}

const validateUserId = (data: UserIdData): boolean => {
  if (typeof data.userid !== 'string') {
    throw new Error("Invalid userid");
  }
  return true;
};

const validateDelete = (data: DeleteData): boolean => {
  if (typeof data.userid !== 'string' || typeof data.productid !== 'string') {
    throw new Error("Invalid userid or productid");
  }
  return true;
};

const validatePOST = (data: PostData): boolean => {
  if (typeof data.userid !== 'string' || typeof data.productid !== 'string' || typeof data.quantity !== 'number') {
    throw new Error("Invalid userid, productid or quantity");
  }
  return true;
};

export { 
  validateUserId, 
  validateDelete, 
  validatePOST 
};
