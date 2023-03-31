import { z } from 'zod';
import { ExamSheetItemUncheckedCreateNestedManyWithoutSectionInputObjectSchema } from './ExamSheetItemUncheckedCreateNestedManyWithoutSectionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSheetSectionUncheckedCreateWithoutSectionInput> =
  z
    .object({
      id: z.string().optional(),
      exam_sheet_id: z.string(),
      items: z
        .lazy(
          () =>
            ExamSheetItemUncheckedCreateNestedManyWithoutSectionInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const ExamSheetSectionUncheckedCreateWithoutSectionInputObjectSchema =
  Schema;
