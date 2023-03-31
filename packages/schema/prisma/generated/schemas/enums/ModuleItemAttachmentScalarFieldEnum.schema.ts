import { z } from 'zod';

export const ModuleItemAttachmentScalarFieldEnumSchema = z.enum([
  'id',
  'module_item_id',
  'description',
  'type',
  'url',
  'seq',
  'mandatory',
]);
