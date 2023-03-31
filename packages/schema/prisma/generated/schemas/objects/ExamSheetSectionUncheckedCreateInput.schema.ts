import { z } from 'zod';
import { ExamSheetItemUncheckedCreateNestedManyWithoutSectionInputObjectSchema } from './ExamSheetItemUncheckedCreateNestedManyWithoutSectionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSheetSectionUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    exam_sheet_id: z.string(),
    section_id: z.string(),
    items: z
      .lazy(
        () =>
          ExamSheetItemUncheckedCreateNestedManyWithoutSectionInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const ExamSheetSectionUncheckedCreateInputObjectSchema = Schema;
