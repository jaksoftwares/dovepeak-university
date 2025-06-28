import React from 'react';
import { Download, Mail, ArrowLeft } from 'lucide-react';
import { Invoice } from '../types/invoice';
import { format } from 'date-fns';
import { generatePDF } from '../utils/pdfGenerator';

interface InvoicePreviewProps {
  invoice: Invoice;
  onBack: () => void;
  onEmailSend: (invoice: Invoice) => void;
}

export const InvoicePreview: React.FC<InvoicePreviewProps> = ({ 
  invoice, 
  onBack, 
  onEmailSend 
}) => {
  const handleDownloadPDF = async () => {
    await generatePDF(invoice);
  };

  const getTemplateStyles = () => {
    switch (invoice.template) {
      case 'modern':
        return 'bg-gradient-to-br from-blue-50 to-indigo-100';
      case 'minimal':
        return 'bg-gray-50';
      default:
        return 'bg-white';
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={onBack}
          className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Create</span>
        </button>
        
        <div className="flex space-x-4">
          <button
            onClick={() => onEmailSend(invoice)}
            className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
          >
            <Mail className="h-4 w-4" />
            <span>Email Invoice</span>
          </button>
          
          <button
            onClick={handleDownloadPDF}
            className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            <Download className="h-4 w-4" />
            <span>Download PDF</span>
          </button>
        </div>
      </div>

      <div id="invoice-content" className={`bg-white shadow-lg rounded-lg overflow-hidden ${getTemplateStyles()}`}>
        <div className="p-8">
          {/* Header */}
          <div className="flex justify-between items-start mb-8">
            <div>
              <h1 className="text-3xl font-bold text-slate-900 mb-2">
                Dovepeak Digital Solutions
              </h1>
              <p className="text-gray-600">Professional Digital Services</p>
              <div className="mt-4 text-sm text-gray-600">
                <p>Email: contact@dovepeakdigital.com</p>
                <p>Phone: +1 (555) 123-4567</p>
                <p>Web: www.dovepeakdigital.com</p>
              </div>
            </div>
            
            <div className="text-right">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">INVOICE</h2>
              <p className="text-lg font-semibold text-blue-600">#{invoice.invoiceNumber}</p>
              <div className="mt-4 text-sm">
                <p><span className="font-medium">Issue Date:</span> {format(invoice.issueDate, 'MMM dd, yyyy')}</p>
                <p><span className="font-medium">Due Date:</span> {format(invoice.dueDate, 'MMM dd, yyyy')}</p>
              </div>
            </div>
          </div>

          {/* Bill To */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-slate-900 mb-3">Bill To:</h3>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="font-semibold text-slate-900">{invoice.client.name}</p>
              <p className="text-gray-600">{invoice.client.email}</p>
              {invoice.client.address && (
                <>
                  <p className="text-gray-600">{invoice.client.address}</p>
                  <p className="text-gray-600">
                    {invoice.client.city}, {invoice.client.state} {invoice.client.zipCode}
                  </p>
                </>
              )}
            </div>
          </div>

          {/* Items Table */}
          <div className="mb-8">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-300">
                  <th className="text-left py-3 font-semibold text-slate-900">Description</th>
                  <th className="text-center py-3 font-semibold text-slate-900 w-20">Qty</th>
                  <th className="text-right py-3 font-semibold text-slate-900 w-24">Rate</th>
                  <th className="text-right py-3 font-semibold text-slate-900 w-24">Amount</th>
                </tr>
              </thead>
              <tbody>
                {invoice.items.map((item) => (
                  <tr key={item.id} className="border-b border-gray-200">
                    <td className="py-3 text-slate-800">{item.description}</td>
                    <td className="py-3 text-center text-slate-800">{item.quantity}</td>
                    <td className="py-3 text-right text-slate-800">${item.rate.toFixed(2)}</td>
                    <td className="py-3 text-right font-medium text-slate-800">${item.amount.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Totals */}
          <div className="flex justify-end mb-8">
            <div className="w-80">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal:</span>
                  <span className="font-medium">${invoice.subtotal.toFixed(2)}</span>
                </div>
                
                {invoice.discount > 0 && (
                  <div className="flex justify-between text-green-600">
                    <span>Discount:</span>
                    <span>-${((invoice.subtotal * invoice.discount) / 100).toFixed(2)}</span>
                  </div>
                )}
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax ({invoice.taxRate}%):</span>
                  <span className="font-medium">${invoice.taxAmount.toFixed(2)}</span>
                </div>
                
                <div className="border-t-2 border-gray-300 pt-2">
                  <div className="flex justify-between text-xl font-bold">
                    <span className="text-slate-900">Total:</span>
                    <span className="text-blue-600">${invoice.total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Notes */}
          {invoice.notes && (
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Notes:</h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700 whitespace-pre-wrap">{invoice.notes}</p>
              </div>
            </div>
          )}

          {/* Footer */}
          <div className="border-t pt-6 text-center text-sm text-gray-600">
            <p>Thank you for your business!</p>
            <p className="mt-2">For questions about this invoice, please contact us at contact@dovepeakdigital.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};