module.exports = ({ env }) => ({
  // ...
  email: {
    config: {
      provider: 'sendgrid',
      providerOptions: {
        apiKey: env('SENDGRID_API_KEY'),
      },
      settings: {
        defaultFrom: 'contact@crealion.art',
        defaultReplyTo: 'no-reply@crealion.art',
      },
    },
  },
  // ...
});
