import React, { useState } from 'react';
import { Header } from './components/Header';
import { InvoiceForm } from './components/InvoiceForm';
import { InvoicePreview } from './components/InvoicePreview';
import { InvoiceHistory } from './components/InvoiceHistory';
import { EmailModal } from './components/EmailModal';
import { Invoice } from './types/invoice';
import { useLocalStorage } from './hooks/useLocalStorage';
import { sendInvoiceEmail } from './utils/emailService';
import { generatePDF } from './utils/pdfGenerator';

type AppView = 'create' | 'preview' | 'history';

function App() {
  const [activeTab, setActiveTab] = useState<AppView>('create');
  const [currentInvoice, setCurrentInvoice] = useState<Invoice | null>(null);
  const [invoices, setInvoices] = useLocalStorage<Invoice[]>('dds-invoices', []);
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
  const [emailInvoice, setEmailInvoice] = useState<Invoice | null>(null);

  const handleInvoiceCreate = (invoice: Invoice) => {
    // Convert date strings back to Date objects if needed
    const processedInvoice = {
      ...invoice,
      issueDate: new Date(invoice.issueDate),
      dueDate: new Date(invoice.dueDate),
    };
    
    setCurrentInvoice(processedInvoice);
    setInvoices(prev => [processedInvoice, ...prev]);
    setActiveTab('preview');
  };

  const handleBackToCreate = () => {
    setCurrentInvoice(null);
    setActiveTab('create');
  };

  const handleViewInvoice = (invoice: Invoice) => {
    setCurrentInvoice(invoice);
    setActiveTab('preview');
  };

  const handleDownloadInvoice = async (invoice: Invoice) => {
    setCurrentInvoice(invoice);
    setActiveTab('preview');
    // Small delay to ensure the component renders before generating PDF
    setTimeout(() => {
      generatePDF(invoice);
    }, 100);
  };

  const handleEmailInvoice = (invoice: Invoice) => {
    setEmailInvoice(invoice);
    setIsEmailModalOpen(true);
  };

  const handleSendEmail = async (emailData: { to: string; subject: string; message: string }) => {
    if (emailInvoice) {
      const success = await sendInvoiceEmail(emailInvoice, emailData);
      if (success) {
        // Update invoice status to 'sent'
        setInvoices(prev => 
          prev.map(inv => 
            inv.id === emailInvoice.id 
              ? { ...inv, status: 'sent' as const }
              : inv
          )
        );
        alert('Email sent successfully!');
      } else {
        alert('Failed to send email. Please try again.');
      }
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'create':
        return <InvoiceForm onInvoiceCreate={handleInvoiceCreate} />;
      case 'preview':
        return currentInvoice ? (
          <InvoicePreview
            invoice={currentInvoice}
            onBack={handleBackToCreate}
            onEmailSend={handleEmailInvoice}
          />
        ) : null;
      case 'history':
        return (
          <InvoiceHistory
            invoices={invoices}
            onViewInvoice={handleViewInvoice}
            onDownloadInvoice={handleDownloadInvoice}
            onEmailInvoice={handleEmailInvoice}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header activeTab={activeTab} onTabChange={setActiveTab} />
      <main className="py-8">
        {renderContent()}
      </main>
      
      {emailInvoice && (
        <EmailModal
          invoice={emailInvoice}
          isOpen={isEmailModalOpen}
          onClose={() => {
            setIsEmailModalOpen(false);
            setEmailInvoice(null);
          }}
          onSend={handleSendEmail}
        />
      )}
    </div>
  );
}

export default App;