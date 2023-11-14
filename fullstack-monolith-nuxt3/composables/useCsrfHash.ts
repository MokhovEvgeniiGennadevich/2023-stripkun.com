import type { SecurityFormHashRequest, SecurityFormHashResponse, SecurityFormHash } from "~/plugins/securityFormHash.server";

export const useCsrfHash = (request: SecurityFormHashRequest) => {
  return {
    csrfHash: useState(() => { 
      const app = useNuxtApp() 
      return (app.$securityFormHash as SecurityFormHash)(request) as SecurityFormHashResponse;
    })
  }
};
