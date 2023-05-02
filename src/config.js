const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  port: process.env.PORT || 3000,
  projectId: process.env.FIREBASE_PROJECT_ID || 'your-firebase-project-id',
  credentials: {
    type: process.env.FIREBASE_TYPE,
    project_id: process.env.FIREBASE_PROJECT_ID,
    private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID,
    private_key: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    client_email: process.env.FIREBASE_CLIENT_EMAIL,
    client_id: process.env.FIREBASE_CLIENT_ID,
    auth_uri: process.env.FIREBASE_AUTH_URI,
    token_uri: process.env.FIREBASE_TOKEN_URI,
    auth_provider_x509_cert_url: process.env.FIREBASE_AUTH_PROVIDER_X509_CERT_URL,
    client_x509_cert_url: process.env.FIREBASE_CLIENT_X509_CERT_URL
  },
  jwtSecret: process.env.JWT_SECRET,
  mailgunApiKey: process.env.MAILGUN_API_KEY || 'mailgunapikey',
  mailgunDomain: process.env.MAILGUN_DOMAIN || 'mailgundomain.com',
  smsApiKey: process.env.SMS_API_KEY || 'smsapikey',
  smsApiSecret: process.env.SMS_API_SECRET || 'smsapisecret'
};