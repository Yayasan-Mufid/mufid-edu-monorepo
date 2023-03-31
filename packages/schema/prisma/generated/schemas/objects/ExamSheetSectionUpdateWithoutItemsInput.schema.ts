import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { ExamSheetUpdateOneRequiredWithoutSectionsNestedInputObjectSchema } from './ExamSheetUpdateOneRequiredWithoutSectionsNestedInput.schema';
import { ExamSectionUpdateOneRequiredWithoutSheet_sectionsNestedInputObjectSchema } from './ExamSectionUpdateOneRequiredWithoutSheet_sectionsNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSheetSectionUpdateWithoutItemsInput> = z
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
  })
  .strict();

export const ExamSheetSectionUpdateWithoutItemsInputObjectSchema = Schema;
