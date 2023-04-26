'use strict';

/**
 * A set of functions called "actions" for `mail`
 */

module.exports = {
  exampleAction: async (ctx, next) => {
    try {
      ctx.body = 'ok';
    } catch (err) {
      ctx.body = err;
    }
  },

  send: async (ctx)  => {

    const body = ctx.request.body;
    const {name, email, subject, message} = body;
    const sendmail = await strapi.plugins['email'].services.email.send({
      to: 'contact@crealion.art',
      from: 'contact@crealion.art',
      replyTo: email,
      subject: subject,
      text: message,
      html: '<h1>Nouveau message de '+ name +'</h1>\n' +
        '<ul>\n' +
        '    <li>Nom: '+ name +'</li>\n' +
        '    <li>Email: '+ email +'</li>\n' +
        '    <li>Sujet: '+ subject +'</li>\n' +
        '    <li>Message: '+ message +'</li>\n' +
        '</ul>',
    })

    try {
      ctx.body = sendmail ?? 'ok';
    } catch (err) {
      ctx.body = err;
    }
  }
};
