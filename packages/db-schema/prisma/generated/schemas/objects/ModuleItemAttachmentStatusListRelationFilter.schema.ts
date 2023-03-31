import { z } from 'zod';
import { ModuleItemAttachmentStatusWhereInputObjectSchema } from './ModuleItemAttachmentStatusWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemAttachmentStatusListRelationFilter> = z
  .object({
    every: z
      .lazy(() => ModuleItemAttachmentStatusWhereInputObjectSchema)
      .optional(),
    some: z
      .lazy(() => ModuleItemAttachmentStatusWhereInputObjectSchema)
      .optional(),
    none: z
      .lazy(() => ModuleItemAttachmentStatusWhereInputObjectSchema)
      .optional(),
  })
  .strict();

export const ModuleItemAttachmentStatusListRelationFilterObjectSchema = Schema;
