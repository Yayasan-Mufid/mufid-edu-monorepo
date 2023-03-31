import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { ExamSheetUpdateOneRequiredWithoutSectionsNestedInputObjectSchema } from './ExamSheetUpdateOneRequiredWithoutSectionsNestedInput.schema';
import { ExamSectionUpdateOneRequiredWithoutSheet_sectionsNestedInputObjectSchema } from './ExamSectionUpdateOneRequiredWithoutSheet_sectionsNestedInput.schema';
import { ExamSheetItemUpdateManyWithoutSectionNestedInputObjectSchema } from './ExamSheetItemUpdateManyWithoutSectionNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSheetSectionUpdateInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    exam_sheet: z
      .lazy(
        () => ExamSheetUpdateOneRequiredWithoutSectionsNestedInputObjectSchema,
      )
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

export const ExamSheetSectionUpdateInputObjectSchema = Schema;
