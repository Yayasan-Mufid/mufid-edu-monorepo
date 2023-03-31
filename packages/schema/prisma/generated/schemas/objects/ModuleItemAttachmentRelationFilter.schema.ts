import { z } from 'zod';
import { ModuleItemAttachmentWhereInputObjectSchema } from './ModuleItemAttachmentWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemAttachmentRelationFilter> = z
  .object({
    is: z.lazy(() => ModuleItemAttachmentWhereInputObjectSchema).optional(),
    isNot: z.lazy(() => ModuleItemAttachmentWhereInputObjectSchema).optional(),
  })
  .strict();

export const ModuleItemAttachmentRelationFilterObjectSchema = Schema;
