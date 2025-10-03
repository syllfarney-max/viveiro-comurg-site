import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const msg = {
  to: "syllfarney@hotmail.com", // pode alterar para outro e-mail de teste
  from: process.env.CONTACT_EMAIL || "no-reply@viveiro.com",
  subject: "🔍 Teste de envio de e-mail (local)",
  text: "Se você recebeu esta mensagem, o SendGrid está funcionando corretamente!",
};

sgMail
  .send(msg)
  .then(() => {
    console.log("✅ Email de teste enviado com sucesso!");
  })
  .catch((error) => {
    console.error("❌ Erro ao enviar o email:", error.response?.body || error);
  });
