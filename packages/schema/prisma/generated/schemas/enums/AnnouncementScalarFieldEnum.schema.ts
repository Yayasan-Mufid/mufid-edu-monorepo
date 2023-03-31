import { z } from 'zod';

export const AnnouncementScalarFieldEnumSchema = z.enum([
  'id',
  'created_by_id',
  'title',
  'text',
  'start_date',
  'end_date',
  'public',
]);
