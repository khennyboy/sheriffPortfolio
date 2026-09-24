import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const FROM_ADDRESS = "Portfolio Contact <onboarding@resend.dev>";

const emailWrapper = (title, bodyContent) => `
  <div style="background:#f4f4f7; padding:16px 8px; font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; width:100%; box-sizing:border-box;">
    <table role="presentation" border="0" cellpadding="0" cellspacing="0" style="max-width:520px; width:100%; margin:0 auto; background:#ffffff; border-radius:12px; overflow:hidden; border-collapse:collapse;">
      <tr>
        <td style="background:#7c3aed; padding:20px 24px;">
          <h1 style="margin:0; color:#ffffff; font-size:20px; font-weight:600;">${title}</h1>
        </td>
      </tr>
      <tr>
        <td style="padding:24px 16px;">
          ${bodyContent}
        </td>
      </tr>
      <tr>
        <td style="padding:16px 24px; background:#fafafa; border-top:1px solid #eeeeee;">
          <p style="margin:0; font-size:12px; color:#999999; text-align:center;">Portfolio Notification · Automated Email</p>
        </td>
      </tr>
    </table>
  </div>
`;

export const sendContactEmail = async ({ name, email, message }) => {
    const body = `
    <p style="font-size:15px; color:#333333; margin:0 0 16px 0;">📩 You have a new message from your portfolio contact form:</p>
    
    <table role="presentation" border="0" cellpadding="0" cellspacing="0" style="width:100%; font-size:14px; color:#333333; margin:16px 0; border-collapse:collapse;">
      <tr>
        <td style="padding:6px 0; color:#888888; width:30%; vertical-align:top;">Name</td>
        <td style="padding:6px 0; text-align:right; font-weight:500; word-break:break-word; width:70%;">${name}</td>
      </tr>
      <tr>
        <td style="padding:6px 0; color:#888888; vertical-align:top;">Sender Email</td>
        <td style="padding:6px 0; text-align:right; font-weight:500; word-break:break-all;">
          <a href="mailto:${email}" style="color:#7c3aed; text-decoration:none;">${email}</a>
        </td>
      </tr>
    </table>

    <div style="background:#f9f9fb; border-left:4px solid #7c3aed; padding:12px 16px; margin:16px 0; border-radius:4px;">
      <p style="margin:0; font-size:14px; color:#333333; white-space:pre-wrap;">${message}</p>
    </div>
  `;

    try {
        await resend.emails.send({
            from: FROM_ADDRESS,
            to: process.env.EMAIL_USER,
            subject: `New Portfolio Message from ${name}`,
            html: emailWrapper("New Portfolio Message", body),
        });
    } catch (error) {
        console.error("Failed to send contact email:", error.message);
    }
};