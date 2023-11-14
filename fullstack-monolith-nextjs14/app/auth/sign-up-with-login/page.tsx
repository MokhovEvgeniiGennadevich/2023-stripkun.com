import securityFormHash, {
  SecurityFormHashRequest,
  SecurityFormHashResponse,
} from "@/utils/securityFormHash/securityFormHash";
import SignUpWithLoginForm from "./form";

export default function SignUpWithLogin() {
  // Security Form Hash
  const securityFormHashRequest: SecurityFormHashRequest = {
    formUrl: "/api",
    formFileds: null,
  };

  const securityFormHashResponse: SecurityFormHashResponse =
    securityFormHash(securityFormHashRequest);

  return (
    <div>
      <h1>Регистрация</h1>

      <SignUpWithLoginForm
        securityFormHash={securityFormHashResponse}
      />
    </div>
  );
}
