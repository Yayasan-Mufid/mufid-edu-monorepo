import { z } from 'zod';

export const StudyGroupScalarFieldEnumSchema = z.enum([
  'id',
  'gender',
  'name',
  'code',
  'module_id',
  'capacity',
  'enrollment_start',
  'enrollment_end',
  'active_start',
  'active_end',
  'logo_url',
  'invoice_amount',
  'invoice_title',
  'invoice_account_id',
  'use_schedule',
  'application_note',
]);
