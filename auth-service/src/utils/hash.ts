import bcrypt from "bcryptjs";

/** Hash a plain password */
export const hashPassword = (password: string): Promise<string> =>
  bcrypt.hash(password, 10);

/** Compare a plain password to a hash */
export const comparePassword = (
  password: string,
  hash: string
): Promise<boolean> => bcrypt.compare(password, hash);
