import { z } from 'zod';
import { ExamSheetCreateManyGroup_examInputObjectSchema } from './ExamSheetCreateManyGroup_examInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSheetCreateManyGroup_examInputEnvelope> = z
  .object({
    data: z.lazy(() => ExamSheetCreateManyGroup_examInputObjectSchema).array(),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const ExamSheetCreateManyGroup_examInputEnvelopeObjectSchema = Schema;
