import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { UserRelationFilterObjectSchema } from './UserRelationFilter.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UploadedFileWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => UploadedFileWhereInputObjectSchema),
        z.lazy(() => UploadedFileWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => UploadedFileWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => UploadedFileWhereInputObjectSchema),
        z.lazy(() => UploadedFileWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    path: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    uploader: z
      .union([
        z.lazy(() => UserRelationFilterObjectSchema),
        z.lazy(() => UserWhereInputObjectSchema),
      ])
      .optional(),
    uploader_id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    uploaded_at: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
      .optional(),
  })
  .strict();

export const UploadedFileWhereInputObjectSchema = Schema;
