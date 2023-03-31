import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { ExamSheetRelationFilterObjectSchema } from './ExamSheetRelationFilter.schema';
import { ExamSheetWhereInputObjectSchema } from './ExamSheetWhereInput.schema';
import { ExamSectionRelationFilterObjectSchema } from './ExamSectionRelationFilter.schema';
import { ExamSectionWhereInputObjectSchema } from './ExamSectionWhereInput.schema';
import { ExamSheetItemListRelationFilterObjectSchema } from './ExamSheetItemListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSheetSectionWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ExamSheetSectionWhereInputObjectSchema),
        z.lazy(() => ExamSheetSectionWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ExamSheetSectionWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ExamSheetSectionWhereInputObjectSchema),
        z.lazy(() => ExamSheetSectionWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    exam_sheet_id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    exam_sheet: z
      .union([
        z.lazy(() => ExamSheetRelationFilterObjectSchema),
        z.lazy(() => ExamSheetWhereInputObjectSchema),
      ])
      .optional(),
    section_id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    section: z
      .union([
        z.lazy(() => ExamSectionRelationFilterObjectSchema),
        z.lazy(() => ExamSectionWhereInputObjectSchema),
      ])
      .optional(),
    items: z.lazy(() => ExamSheetItemListRelationFilterObjectSchema).optional(),
  })
  .strict();

export const ExamSheetSectionWhereInputObjectSchema = Schema;
