import { z } from 'zod';
import { ExamSheetSectionCreateManyExam_sheetInputObjectSchema } from './ExamSheetSectionCreateManyExam_sheetInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSheetSectionCreateManyExam_sheetInputEnvelope> =
  z
    .object({
      data: z
        .lazy(() => ExamSheetSectionCreateManyExam_sheetInputObjectSchema)
        .array(),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const ExamSheetSectionCreateManyExam_sheetInputEnvelopeObjectSchema =
  Schema;
