import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { ExamSheetItemUncheckedUpdateManyWithoutSectionNestedInputObjectSchema } from './ExamSheetItemUncheckedUpdateManyWithoutSectionNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSheetSectionUncheckedUpdateWithoutSectionInput> =
  z
    .object({
      id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      exam_sheet_id: z
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

export const ExamSheetSectionUncheckedUpdateWithoutSectionInputObjectSchema =
  Schema;
