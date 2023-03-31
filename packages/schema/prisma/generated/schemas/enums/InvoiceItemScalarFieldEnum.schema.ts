import { z } from 'zod';

export const InvoiceItemScalarFieldEnumSchema = z.enum([
  'id',
  'invoice_id',
  'name',
  'quantity',
  'unit_price',
  'discount',
  'product_id',
]);
