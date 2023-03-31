import { z } from 'zod';

export const ProgramScalarFieldEnumSchema = z.enum([
  'id',
  'code',
  'title',
  'description',
  'cover_img_url',
  'bg_img_url',
  'published',
]);
