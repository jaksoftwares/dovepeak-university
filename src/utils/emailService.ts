import { Invoice } from '../types/invoice';

interface EmailData {
  to: string;
  subject: string;
  message: string;
}

export const sendInvoiceEmail = async (
  invoice: Invoice,
  emailData: EmailData
): Promise<boolean> => {
  try {
    // In a real application, you would integrate with an email service like:
    // - SendGrid
    // - Mailgun
    // - Amazon SES
    // - Or your own SMTP server
    
    // For now, we'll simulate the email sending process
    console.log('Sending email with data:', {
      invoice: invoice.invoiceNumber,
      ...emailData,
    });

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Create a mailto link as a fallback for demonstration
    const mailtoLink = `mailto:${emailData.to}?subject=${encodeURIComponent(
      emailData.subject
    )}&body=${encodeURIComponent(emailData.message)}`;
    
    // Open the user's default email client
    window.open(mailtoLink);

    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
};

export const validateEmailData = (emailData: EmailData): string[] => {
  const errors: string[] = [];

  if (!emailData.to || !isValidEmail(emailData.to)) {
    errors.push('Please enter a valid email address');
  }

  if (!emailData.subject.trim()) {
    errors.push('Please enter an email subject');
  }

  if (!emailData.message.trim()) {
    errors.push('Please enter an email message');
  }

  return errors;
};

const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};