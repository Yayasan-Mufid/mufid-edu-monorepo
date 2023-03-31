import { z } from 'zod';

export const PaymentAccountScalarFieldEnumSchema = z.enum([
  'id',
  'name',
  'type',
  'account_identifier',
  'description',
  'logo_url',
]);
