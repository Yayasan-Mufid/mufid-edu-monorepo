import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { ExamSectionUpdateOneRequiredWithoutSheet_sectionsNestedInputObjectSchema } from './ExamSectionUpdateOneRequiredWithoutSheet_sectionsNestedInput.schema';
import { ExamSheetItemUpdateManyWithoutSectionNestedInputObjectSchema } from './ExamSheetItemUpdateManyWithoutSectionNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSheetSectionUpdateWithoutExam_sheetInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    section: z
      .lazy(
        () =>
          ExamSectionUpdateOneRequiredWithoutSheet_sectionsNestedInputObjectSchema,
      )
      .optional(),
    items: z
      .lazy(() => ExamSheetItemUpdateManyWithoutSectionNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const ExamSheetSectionUpdateWithoutExam_sheetInputObjectSchema = Schema;
