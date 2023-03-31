import { z } from 'zod';

export const ProgramAdminScalarFieldEnumSchema = z.enum([
  'id',
  'user_id',
  'program_id',
  'assigned_at',
]);
