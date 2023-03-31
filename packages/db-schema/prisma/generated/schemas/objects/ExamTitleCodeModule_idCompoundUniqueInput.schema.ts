import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamTitleCodeModule_idCompoundUniqueInput> = z
  .object({
    title: z.string(),
    code: z.string(),
    module_id: z.string(),
  })
  .strict();

export const ExamTitleCodeModule_idCompoundUniqueInputObjectSchema = Schema;
