import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
    name: z.string().optional(),
    code: z.string().optional(),
  })
  .strict();

export const StudyGroupWhereUniqueInputObjectSchema = Schema;
