import { z } from 'zod';

export const ModuleItemAttachmentStatusScalarFieldEnumSchema = z.enum([
  'attachment_id',
  'user_id',
  'status',
  'updated_at',
]);
