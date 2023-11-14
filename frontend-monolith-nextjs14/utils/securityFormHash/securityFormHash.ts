import crypto from "crypto";

export interface SecurityFormHashRequest {
  formUrl: string;
  formFileds: string[] | null;
}

interface SecurityFormHashResponse {
  formHash: string;
  formTimeStamp: number;
}

const securityFormHashKey =
  process.env.SECURITY_FORM_HASH_KEY;

if (!securityFormHashKey) {
  throw new Error("SECURITY_FORM_HASH_KEY is not set");
}

/**
 * Generates a security form hash based on the provided request.
 *
 * @param {SecurityFormHashRequest} request - The request object containing the necessary information to generate the hash.
 * @return {SecurityFormHashResponse} - The response object containing the generated form hash and timestamp.
 */

const securityFormHash = (
  request: SecurityFormHashRequest
): SecurityFormHashResponse => {
  // formTimeStamp
  const formTimeStamp = Date.now();

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
      formUrl + String(formTimeStamp) + formFileds,
      "utf-8"
    )
    .digest("hex");

  return { formHash, formTimeStamp };
};

export default securityFormHash;
