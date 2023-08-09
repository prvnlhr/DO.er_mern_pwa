const { SENDER_EMAIL_ADDRESS, SEND_GRID_API_KEY } = process.env;
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(SEND_GRID_API_KEY);

const sendMail = async (to, otp) => {
  try {
    const emailData = {
      from: SENDER_EMAIL_ADDRESS,
      to: to,
      subject: `One Time Password`,
      html: `
          <div style="max-width: 700px; margin:auto; border: 10px solid #ddd; padding: 50px 20px; font-size: 110%;">
            <h2 style="text-align: center; text-transform: uppercase;color: teal;">Welcome to the DO.er.</h2>
            <p>Congratulations! You're almost set to start using DO.er.</p>
            <div>${otp}</div>
          </div>
        `,
    };
    await sgMail.send(emailData);
    console.log('OTP email sent successfully.');
  } catch (error) {
    console.error('Error sending OTP email:', error);
    throw new Error('Error sending OTP email.', error);
  }
};
module.exports = sendMail;
      