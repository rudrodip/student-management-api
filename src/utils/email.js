const Sib = require('sib-api-v3-sdk')
require('dotenv').config()

const client = Sib.ApiClient.instance
const apiKey = client.authentications['api-key']
apiKey.apiKey = process.env.SENDINBLUE_API_KEY

const tranEmailApi = new Sib.TransactionalEmailsApi()
const sender = {
    email: 'official.rudrodipsarker@gmail.com',
    name: 'Rajshahi College',
}

// const receivers = [
//       {
//           email: '<email_address',
//       },
//   ]

const send_email = (subject, text, html = '', receivers) => {
  tranEmailApi
    .sendTransacEmail({
        sender,
        to: receivers,
        subject: subject,
        textContent: text,
        htmlContent: html,
    })
    .then(console.log)
    .catch(console.log)
}

module.exports = send_email