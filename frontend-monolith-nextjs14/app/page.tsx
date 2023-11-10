import crypto from "crypto";

export default function HomePage() {
  const hash = crypto
    .createHmac("sha512", "password")
    .update(
      "/v1/budget/getpage0limit1" + String(Date.now()),
      "utf-8"
    )
    .digest("hex");

  return (
    <div>
      <h1>Home</h1>

      <p>Hash: {hash}</p>
    </div>
  );
}
