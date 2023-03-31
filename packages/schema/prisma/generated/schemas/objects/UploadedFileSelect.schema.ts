import { z } from 'zod';
import { UserArgsObjectSchema } from './UserArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UploadedFileSelect> = z
  .object({
    id: z.boolean().optional(),
    path: z.boolean().optional(),
    uploader: z
      .union([z.boolean(), z.lazy(() => UserArgsObjectSchema)])
      .optional(),
    uploader_id: z.boolean().optional(),
    uploaded_at: z.boolean().optional(),
  })
  .strict();

export const UploadedFileSelectObjectSchema = Schema;
