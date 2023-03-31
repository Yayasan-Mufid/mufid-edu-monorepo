import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemAttachmentWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
  })
  .strict();

export const ModuleItemAttachmentWhereUniqueInputObjectSchema = Schema;
