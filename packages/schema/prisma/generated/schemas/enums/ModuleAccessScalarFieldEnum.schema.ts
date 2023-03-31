import { z } from 'zod';

export const ModuleAccessScalarFieldEnumSchema = z.enum([
  'id',
  'module_id',
  'user_id',
  'granted_on',
]);
