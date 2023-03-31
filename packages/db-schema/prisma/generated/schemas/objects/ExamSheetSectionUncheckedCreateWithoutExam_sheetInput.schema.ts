import { z } from 'zod';
import { ExamSheetItemUncheckedCreateNestedManyWithoutSectionInputObjectSchema } from './ExamSheetItemUncheckedCreateNestedManyWithoutSectionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSheetSectionUncheckedCreateWithoutExam_sheetInput> =
  z
    .object({
      id: z.string().optional(),
      section_id: z.string(),
      items: z
        .lazy(
          () =>
            ExamSheetItemUncheckedCreateNestedManyWithoutSectionInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const ExamSheetSectionUncheckedCreateWithoutExam_sheetInputObjectSchema =
  Schema;
