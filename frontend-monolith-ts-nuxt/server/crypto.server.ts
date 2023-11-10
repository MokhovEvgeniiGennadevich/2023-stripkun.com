import crypto from "crypto";

export default function serverCryptoHash() {
  return crypto
    .createHmac("sha512", "password")
    .update(
      "/v1/budget/getpage0limit1" + Date.now(),
      "utf-8"
    )
    .digest("hex");
}
