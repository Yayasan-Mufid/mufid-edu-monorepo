import { z } from 'zod';
import { ExamTitleCodeModule_idCompoundUniqueInputObjectSchema } from './ExamTitleCodeModule_idCompoundUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
    title_code_module_id: z
      .lazy(() => ExamTitleCodeModule_idCompoundUniqueInputObjectSchema)
      .optional(),
  })
  .strict();

export const ExamWhereUniqueInputObjectSchema = Schema;
