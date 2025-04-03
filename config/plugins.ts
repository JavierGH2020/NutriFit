export default ({ env }) => ({
  email: {
    config: {
      provider: "nodemailer",
      providerOptions: {
        host: env("SMTP_HOST", "smtp.gmail.com"),
        port: env.int("SMTP_PORT", 587),
        auth: {
          user: env("SMTP_USER"),
          pass: env("SMTP_PASS"),
        },
      },
      settings: {
        defaultFrom: env("DEFAULT_FROM_EMAIL", "no-reply@nutrifit.com"),
        defaultReplyTo: env("DEFAULT_REPLY_TO", "support@nutrifit.com"),
      },
    },
  },
});