import { z } from 'zod';

export const StudyGroupApplicantScalarFieldEnumSchema = z.enum([
  'study_group_id',
  'user_id',
  'invoice_id',
  'created_at',
]);
