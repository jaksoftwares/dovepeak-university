export const generateInvoiceNumber = (): string => {
  const prefix = 'DDS';
  const timestamp = Date.now().toString().slice(-6);
  const random = Math.floor(Math.random() * 100).toString().padStart(2, '0');
  return `${prefix}-${timestamp}-${random}`;
};

export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);
};

export const calculateDaysUntilDue = (dueDate: Date): number => {
  const today = new Date();
  const diffTime = dueDate.getTime() - today.getTime();
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
};

export const getInvoiceStatus = (invoice: any): string => {
  const daysUntilDue = calculateDaysUntilDue(invoice.dueDate);
  
  if (invoice.status === 'paid') return 'paid';
  if (daysUntilDue < 0) return 'overdue';
  if (invoice.status === 'sent') return 'sent';
  return 'draft';
};