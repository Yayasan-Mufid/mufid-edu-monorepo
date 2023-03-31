import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSheetSectionWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
  })
  .strict();

export const ExamSheetSectionWhereUniqueInputObjectSchema = Schema;
