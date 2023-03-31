import { z } from 'zod';

export const ModuleItemScalarFieldEnumSchema = z.enum([
  'id',
  'module_id',
  'parent_item_id',
  'is_root',
  'title',
  'code',
  'text',
  'seq',
  'is_quiz',
  'mandatory',
  'cover_img_url',
  'bg_img_url',
]);
