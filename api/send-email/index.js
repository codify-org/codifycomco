const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);

module.exports = async (req, res) => {
  // Always set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Content-Type', 'application/json');

  // Handle preflight request
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    console.log('Request body:', req.body);
    console.log('Resend API Key:', process.env.RESEND_API_KEY ? 'Set' : 'Not set');

    if (!process.env.RESEND_API_KEY) {
      console.error('Resend API key is not set');
      return res.status(500).json({ message: 'Resend API key is not set' });
    }

    const { email, tradingExperience, interests } = req.body;

    if (!email || !tradingExperience) {
      console.error('Missing required fields:', { email, tradingExperience });
      return res.status(400).json({ message: 'Missing required fields' });
    }

    // Log all inputs
    console.log('Sending email with:', {
      to: email,
      experience: tradingExperience,
      interests: interests
    });

    const emailConfig = {
      from: 'David <hello@codify.com.co>',
      reply_to: 'support@codify.com.co',
      to: email,
      subject: 'Welcome to Codify Capital!',
      html: `
        <h1>Welcome to Codify Capital!</h1>
        <p>Thank you for signing up! We're excited to have you join us.</p>
        <h2>Your Profile:</h2>
        <ul>
          <li>Trading Experience: ${tradingExperience}</li>
          <li>Interests: ${interests ? interests.join(', ') : 'None selected'}</li>
        </ul>
        <p>We'll keep you updated with our latest developments and opportunities.</p>
        <br>
        <p>Best regards,</p>
        <p>David Martin Riveros<br>Codify Capital</p>
      `
    };

    // Log email configuration before sending
    console.log('Email configuration:', emailConfig);

    // Call Resend and handle response
    const { data, error } = await resend.emails.send(emailConfig);

    // Log raw result
    console.log('Resend response:', { data, error });

    // Handle error
    if (error) {
      console.error('Resend error:', error);
      return res.status(500).json({ 
        message: 'Failed to send email',
        error: error.message
      });
    }

    // Return success
    return res.status(200).json({ 
      message: 'Email sent successfully',
      id: data.id 
    });
  } catch (error) {
    console.error('Unexpected error:', error);
    return res.status(500).json({ 
      message: 'An unexpected error occurred',
      error: error.message
    });
  }
}; 