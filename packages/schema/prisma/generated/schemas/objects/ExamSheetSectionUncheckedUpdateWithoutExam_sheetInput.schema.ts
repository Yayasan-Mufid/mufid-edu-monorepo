import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { ExamSheetItemUncheckedUpdateManyWithoutSectionNestedInputObjectSchema } from './ExamSheetItemUncheckedUpdateManyWithoutSectionNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSheetSectionUncheckedUpdateWithoutExam_sheetInput> =
  z
    .object({
      id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      section_id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      items: z
        .lazy(
          () =>
            ExamSheetItemUncheckedUpdateManyWithoutSectionNestedInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const ExamSheetSectionUncheckedUpdateWithoutExam_sheetInputObjectSchema =
  Schema;
