import securityFormHash from "@/utils/securityFormHash/securityFormHash";

export default function AboutPage() {
  const securityFormHashRequest = {
    formUrl: "/api",
    formFileds: null,
  };

  const securityFormHashResponse = securityFormHash(
    securityFormHashRequest
  );

  return (
    <div>
      <h1>О проекте Финансовый стриптиз</h1>

      <p>Версия: {securityFormHashResponse.formHash}</p>
      <p>
        Версия: {securityFormHashResponse.formTimeStamp}
      </p>

      <p>
        Проект разрабатывался с целью учёта личных доходов и
        расходов
      </p>
    </div>
  );
}
