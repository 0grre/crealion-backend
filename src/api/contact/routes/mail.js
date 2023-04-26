
module.exports = {
  routes: [
    {
      method: 'POST',
      path: '/contact/mail',
      handler: 'mail.send',
      config: {
        auth: false,
      },
    },
  ],
};
