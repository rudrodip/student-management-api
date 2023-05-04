const firebaseAdmin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json');
const config = require('./config');
const app = require('./app');

firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert(serviceAccount),
  projectId: config.projectId
});

app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});
