import crypto from "crypto";

export const useHashStore = defineStore(
  // $id
  "hash",
  () => {
    // Check if code is running on Server

      const hash_date_time = Date.now();

      // Hash Time
      const DateTime = ref(hash_date_time);

      const generateSecret = crypto
        .createHmac("sha512", "password")
        .update(
          "/v1/budget/getpage0limit1" +
            String(hash_date_time),
          "utf-8"
        )
        .digest("hex");

      // Hash
      const secret = ref(generateSecret);

    return { DateTime, secret };
  }
);
