exports.hackathonTemplate = `<!DOCTYPE html>
<html>
  <body style="margin:0; padding:0; font-family: Arial, sans-serif; background-color:#f4f6f8;">
    <table width="100%" cellpadding="0" cellspacing="0">
      <tr>
        <td align="center">
          <table width="600" style="background:#ffffff; margin-top:30px; border-radius:8px; overflow:hidden;">
            
            <!-- Header -->
            <tr>
              <td style="background:#16a34a; color:#ffffff; padding:20px; text-align:center;">
                <h2 style="margin:0;">🚀 Hackathon Registration Confirmed</h2>
              </td>
            </tr>

            <!-- Body -->
            <tr>
              <td style="padding:30px; color:#333;">
                <p>Hi <strong>{{name}}</strong>,</p>

                <p>🔥 You're officially in for the <strong>Kingdom Stack Hackathon</strong>!</p>

                <p>We're excited to see what you'll build. Here's a quick summary of your registration:</p>

                <ul style="line-height:1.6;">
                  <li><strong>Skill:</strong> {{skill}}</li>
                  <li><strong>Stack:</strong> {{stack}}</li>
                  <li><strong>Years of Experience:</strong> {{yearsOfExperience}}</li>
                  <li><strong>Url:</strong> {{webUrl}}</li>
                  <li><strong>Reason:</strong> {{participationIntent}}</li>
                </ul>

                <p>Get ready to collaborate, innovate, and build amazing things 🚀</p>

                <div style="margin:30px 0; text-align:center;">
                  <a href="#" style="background:#16a34a; color:#fff; padding:12px 20px; text-decoration:none; border-radius:5px;">
                    Join Event Updates
                  </a>
                </div>

                <p>If you have any questions, feel free to reach out.</p>

                <p>Let's build something great! 💡</p>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="background:#f1f5f9; padding:15px; text-align:center; font-size:12px; color:#666;">
                © 2026 Kingdom Stack Hackathon.
              </td>
            </tr>

          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;

exports.registrationTemplate = `<!DOCTYPE html>
<html>
  <body style="margin:0; padding:0; font-family: Arial, sans-serif; background-color:#f4f6f8;">
    <table width="100%" cellpadding="0" cellspacing="0">
      <tr>
        <td align="center">
          <table width="600" style="background:#ffffff; margin-top:30px; border-radius:8px; overflow:hidden;">
            
            <!-- Header -->
            <tr>
              <td style="background:#0f172a; color:#ffffff; padding:20px; text-align:center;">
                <h2 style="margin:0;">🎉 Registration Successful</h2>
              </td>
            </tr>

            <!-- Body -->
            <tr>
              <td style="padding:30px; color:#333;">
                <p>Hi <strong>{{name}}</strong>,</p>

                <p>You're successfully registered for the <strong>Kingdom Stack Event</strong>.</p>

                <p>We're excited to have you join us! Stay tuned for more updates and details.</p>

                <div style="margin:30px 0; text-align:center;">
                  <a href="#" style="background:#2563eb; color:#fff; padding:12px 20px; text-decoration:none; border-radius:5px;">
                    View Event Details
                  </a>
                </div>

                <p>If you have any questions, feel free to reach out.</p>

                <p>See you there! 🙌</p>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="background:#f1f5f9; padding:15px; text-align:center; font-size:12px; color:#666;">
                © 2026 Kingdom Stack. All rights reserved.
              </td>
            </tr>

          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
