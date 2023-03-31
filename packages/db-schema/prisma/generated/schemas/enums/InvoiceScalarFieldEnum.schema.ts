import { z } from 'zod';

export const InvoiceScalarFieldEnumSchema = z.enum([
  'id',
  'user_id',
  'title',
  'description',
  'amount',
  'payment_method',
  'payment_account_id',
  'paid_amount',
  'mismatch',
  'paid_at',
  'payment_receipt_url',
  'confirmer',
  'confirmed_at',
  'status',
  'deadline',
]);
