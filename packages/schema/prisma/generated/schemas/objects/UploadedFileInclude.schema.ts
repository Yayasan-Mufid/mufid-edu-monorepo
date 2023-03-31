import { z } from 'zod';
import { UserArgsObjectSchema } from './UserArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UploadedFileInclude> = z
  .object({
    uploader: z
      .union([z.boolean(), z.lazy(() => UserArgsObjectSchema)])
      .optional(),
  })
  .strict();

export const UploadedFileIncludeObjectSchema = Schema;
