import { z } from 'zod';

export const ModuleScalarFieldEnumSchema = z.enum([
  'id',
  'program_id',
  'title',
  'code',
  'slug',
  'description',
  'published',
  'archived',
  'seq',
  'cover_img_url',
  'bg_img_url',
]);
