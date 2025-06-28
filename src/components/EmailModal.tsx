import React, { useState } from 'react';
import { X, Send } from 'lucide-react';
import { Invoice } from '../types/invoice';

interface EmailModalProps {
  invoice: Invoice;
  isOpen: boolean;
  onClose: () => void;
  onSend: (emailData: { to: string; subject: string; message: string }) => void;
}

export const EmailModal: React.FC<EmailModalProps> = ({
  invoice,
  isOpen,
  onClose,
  onSend,
}) => {
  const [emailData, setEmailData] = useState({
    to: invoice.client.email,
    subject: `Invoice #${invoice.invoiceNumber} from Dovepeak Digital Solutions`,
    message: `Dear ${invoice.client.name},

Please find attached your invoice #${invoice.invoiceNumber} for the amount of $${invoice.total.toFixed(2)}.

Invoice Details:
- Issue Date: ${invoice.issueDate.toLocaleDateString()}
- Due Date: ${invoice.dueDate.toLocaleDateString()}
- Total Amount: $${invoice.total.toFixed(2)}

Payment is due by ${invoice.dueDate.toLocaleDateString()}. Please don't hesitate to contact us if you have any questions.

Thank you for your business!

Best regards,
Dovepeak Digital Solutions
contact@dovepeakdigital.com`,
  });

  const handleSend = () => {
    onSend(emailData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl mx-4">
        <div className="flex items-center justify-between p-6 border-b">
          <h3 className="text-lg font-semibold text-gray-900">
            Email Invoice #{invoice.invoiceNumber}
          </h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <div className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              To:
            </label>
            <input
              type="email"
              value={emailData.to}
              onChange={(e) => setEmailData({ ...emailData, to: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Subject:
            </label>
            <input
              type="text"
              value={emailData.subject}
              onChange={(e) => setEmailData({ ...emailData, subject: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Message:
            </label>
            <textarea
              rows={10}
              value={emailData.message}
              onChange={(e) => setEmailData({ ...emailData, message: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
        
        <div className="flex justify-end space-x-4 p-6 border-t bg-gray-50 rounded-b-lg">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSend}
            className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            <Send className="h-4 w-4" />
            <span>Send Email</span>
          </button>
        </div>
      </div>
    </div>
  );
};