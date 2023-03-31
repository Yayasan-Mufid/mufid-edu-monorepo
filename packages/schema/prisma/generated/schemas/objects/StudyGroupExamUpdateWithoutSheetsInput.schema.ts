import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { ExamUpdateOneRequiredWithoutStudy_group_examsNestedInputObjectSchema } from './ExamUpdateOneRequiredWithoutStudy_group_examsNestedInput.schema';
import { StudyGroupUpdateOneRequiredWithoutExamsNestedInputObjectSchema } from './StudyGroupUpdateOneRequiredWithoutExamsNestedInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { FloatFieldUpdateOperationsInputObjectSchema } from './FloatFieldUpdateOperationsInput.schema';
import { NullableFloatFieldUpdateOperationsInputObjectSchema } from './NullableFloatFieldUpdateOperationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupExamUpdateWithoutSheetsInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    exam: z
      .lazy(
        () =>
          ExamUpdateOneRequiredWithoutStudy_group_examsNestedInputObjectSchema,
      )
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
  })
  .strict();

export const StudyGroupExamUpdateWithoutSheetsInputObjectSchema = Schema;
