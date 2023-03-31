import { z } from 'zod';

export const ModuleAdminScalarFieldEnumSchema = z.enum([
  'id',
  'module_id',
  'user_id',
  'assigned_at',
]);
