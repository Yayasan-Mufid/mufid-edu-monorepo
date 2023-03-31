import { z } from 'zod';
import { UserCreateNestedOneWithoutUploaded_filesInputObjectSchema } from './UserCreateNestedOneWithoutUploaded_filesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UploadedFileCreateInput> = z
  .object({
    id: z.string().optional(),
    path: z.string(),
    uploader: z.lazy(
      () => UserCreateNestedOneWithoutUploaded_filesInputObjectSchema,
    ),
    uploaded_at: z.date().optional(),
  })
  .strict();

export const UploadedFileCreateInputObjectSchema = Schema;
