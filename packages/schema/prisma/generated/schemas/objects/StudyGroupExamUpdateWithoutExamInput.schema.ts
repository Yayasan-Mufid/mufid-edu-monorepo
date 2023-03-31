import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { StudyGroupUpdateOneRequiredWithoutExamsNestedInputObjectSchema } from './StudyGroupUpdateOneRequiredWithoutExamsNestedInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { FloatFieldUpdateOperationsInputObjectSchema } from './FloatFieldUpdateOperationsInput.schema';
import { NullableFloatFieldUpdateOperationsInputObjectSchema } from './NullableFloatFieldUpdateOperationsInput.schema';
import { ExamSheetUpdateManyWithoutGroup_examNestedInputObjectSchema } from './ExamSheetUpdateManyWithoutGroup_examNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupExamUpdateWithoutExamInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    group: z
      .lazy(
        () => StudyGroupUpdateOneRequiredWithoutExamsNestedInputObjectSchema,
      )
      .optional(),
    start_time: z
      .union([
        z.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    end_time: z
      .union([
        z.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    duration_hour: z
      .union([
        z.number(),
        z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    weight: z
      .union([
        z.number(),
        z.lazy(() => NullableFloatFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    sheets: z
      .lazy(() => ExamSheetUpdateManyWithoutGroup_examNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const StudyGroupExamUpdateWithoutExamInputObjectSchema = Schema;
