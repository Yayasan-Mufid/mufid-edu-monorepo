import { z } from 'zod';
import { ModuleItemAttachmentWhereInputObjectSchema } from './ModuleItemAttachmentWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemAttachmentListRelationFilter> = z
  .object({
    every: z.lazy(() => ModuleItemAttachmentWhereInputObjectSchema).optional(),
    some: z.lazy(() => ModuleItemAttachmentWhereInputObjectSchema).optional(),
    none: z.lazy(() => ModuleItemAttachmentWhereInputObjectSchema).optional(),
  })
  .strict();

export const ModuleItemAttachmentListRelationFilterObjectSchema = Schema;
