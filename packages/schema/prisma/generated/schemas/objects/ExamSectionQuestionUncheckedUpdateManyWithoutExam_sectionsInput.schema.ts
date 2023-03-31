import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { FloatFieldUpdateOperationsInputObjectSchema } from './FloatFieldUpdateOperationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSectionQuestionUncheckedUpdateManyWithoutExam_sectionsInput> =
  z
    .object({
      section_id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      min_score: z
        .union([
          z.number(),
          z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      max_scrore: z
        .union([
          z.number(),
          z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const ExamSectionQuestionUncheckedUpdateManyWithoutExam_sectionsInputObjectSchema =
  Schema;
