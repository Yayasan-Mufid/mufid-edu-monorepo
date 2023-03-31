import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
    code: z.string().optional(),
  })
  .strict();

export const ModuleWhereUniqueInputObjectSchema = Schema;
