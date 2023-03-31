import { z } from 'zod';

export const ModuleItemStatusScalarFieldEnumSchema = z.enum([
  'module_item_id',
  'user_id',
  'status',
  'updated_at',
]);
