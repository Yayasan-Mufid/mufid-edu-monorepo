import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSheetSectionScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ExamSheetSectionScalarWhereInputObjectSchema),
        z.lazy(() => ExamSheetSectionScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ExamSheetSectionScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ExamSheetSectionScalarWhereInputObjectSchema),
        z.lazy(() => ExamSheetSectionScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    exam_sheet_id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    section_id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
  })
  .strict();

export const ExamSheetSectionScalarWhereInputObjectSchema = Schema;
