import { z } from 'zod';

export const UploadedFileScalarFieldEnumSchema = z.enum([
  'id',
  'path',
  'uploader_id',
  'uploaded_at',
]);
