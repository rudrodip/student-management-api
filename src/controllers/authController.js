const admin = require('firebase-admin');

exports.signup = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await admin.auth().createUser({
      email,
      password,
    });

    res.status(201).json({
      message: 'User created successfully',
      data: {
        uid: user.uid,
        email: user.email,
        emailVerified: user.emailVerified,
        phoneNumber: user.phoneNumber,
        disabled: user.disabled,
      },
    });
  } catch (err) {
    console.error('Error creating new user:', err);
    res.status(500).json({
      message: 'Unable to create user',
      error: err.message,
    });
  }
};

// Signin
exports.signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const { user } = await admin.auth().signInWithEmailAndPassword(email, password);
    const token = await user.getIdToken();
    
    res.status(200).json({
      message: 'User logged in successfully',
      data: {
        token,
        uid: user.uid,
        email: user.email,
        emailVerified: user.emailVerified,
        phoneNumber: user.phoneNumber,
        disabled: user.disabled,
      },
    });
  } catch (err) {
    console.error('Error logging in user:', err);
    res.status(401).json({
      message: 'Unable to log in user',
      error: err.message,
    });
  }
};

// Forgot Password
exports.forgotPassword = async (req, res) => {
  const { email } = req.body;

  try {
    await admin.auth().sendPasswordResetEmail(email);

    res.status(200).json({
      message: 'Password reset email sent successfully',
    });
  } catch (err) {
    console.error('Error sending password reset email:', err);
    res.status(500).json({
      message: 'Unable to send password reset email',
      error: err.message,
    });
  }
};

// Reset Password
exports.resetPassword = async (req, res) => {
  const { newPassword, resetPasswordToken } = req.body;

  try {
    await admin.auth().confirmPasswordReset(resetPasswordToken, newPassword);

    res.status(200).json({
      message: 'Password reset successfully',
    });
  } catch (err) {
    console.error('Error resetting password:', err);
    res.status(500).json({
      message: 'Unable to reset password',
      error: err.message,
    });
  }
};