import { z } from 'zod';

export const ExamScalarFieldEnumSchema = z.enum([
  'id',
  'title',
  'code',
  'module_id',
  'rules',
]);
