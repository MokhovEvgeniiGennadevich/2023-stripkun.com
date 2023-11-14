// generate security hash and hash_time
// for Forms

import crypto from "crypto";

export const generateHash = (url: string, time: number) => {
  if (process.server) {
    return crypto
      .createHmac("sha512", "password")
      .update(url + String(time), "utf-8")
      .digest("hex");
  }
};
