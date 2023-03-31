import { z } from 'zod';
import { ExamSheetSectionCreateManySectionInputObjectSchema } from './ExamSheetSectionCreateManySectionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSheetSectionCreateManySectionInputEnvelope> =
  z
    .object({
      data: z
        .lazy(() => ExamSheetSectionCreateManySectionInputObjectSchema)
        .array(),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const ExamSheetSectionCreateManySectionInputEnvelopeObjectSchema =
  Schema;
