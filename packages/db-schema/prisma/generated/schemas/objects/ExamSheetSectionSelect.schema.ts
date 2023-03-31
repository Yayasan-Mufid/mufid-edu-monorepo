import { z } from 'zod';
import { ExamSheetArgsObjectSchema } from './ExamSheetArgs.schema';
import { ExamSectionArgsObjectSchema } from './ExamSectionArgs.schema';
import { ExamSheetItemFindManySchema } from '../findManyExamSheetItem.schema';
import { ExamSheetSectionCountOutputTypeArgsObjectSchema } from './ExamSheetSectionCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSheetSectionSelect> = z
  .object({
    id: z.boolean().optional(),
    exam_sheet_id: z.boolean().optional(),
    exam_sheet: z
      .union([z.boolean(), z.lazy(() => ExamSheetArgsObjectSchema)])
      .optional(),
    section_id: z.boolean().optional(),
    section: z
      .union([z.boolean(), z.lazy(() => ExamSectionArgsObjectSchema)])
      .optional(),
    items: z
      .union([z.boolean(), z.lazy(() => ExamSheetItemFindManySchema)])
      .optional(),
    _count: z
      .union([
        z.boolean(),
        z.lazy(() => ExamSheetSectionCountOutputTypeArgsObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const ExamSheetSectionSelectObjectSchema = Schema;
