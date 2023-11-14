import crypto from "crypto";

export interface SecurityFormHashRequest {
  formUrl: string;
  formFileds: string[] | null;
}

export interface SecurityFormHashResponse {
  hash: string;
  timestamp: string;
}

const securityFormHashKey =
  process.env.SECURITY_FORM_HASH_KEY;

if (!securityFormHashKey) {
  throw new Error("SECURITY_FORM_HASH_KEY is not set");
}

const securityFormHash = (
  request: SecurityFormHashRequest
): SecurityFormHashResponse => {
  // formTimeStamp
  const formTimeStamp = Date.now();
  const formTimeStampString = String(formTimeStamp);

  // formUrl
  const formUrl = request.formUrl;

  // formFileds
  let formFileds: string = "";
  if (request.formFileds) {
    formFileds = request.formFileds.join("&");
  }

  // Generate hash
  const formHash = crypto
    .createHmac("sha512", securityFormHashKey)
    .update(
      formUrl + formTimeStampString + formFileds,
      "utf-8"
    )
    .digest("hex");

  return {
    hash: formHash,
    timestamp: formTimeStampString,
  };
};

export default securityFormHash;
