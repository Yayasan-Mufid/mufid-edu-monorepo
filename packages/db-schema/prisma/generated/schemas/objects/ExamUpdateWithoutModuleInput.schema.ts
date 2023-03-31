import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { ExamSectionUpdateManyWithoutExamNestedInputObjectSchema } from './ExamSectionUpdateManyWithoutExamNestedInput.schema';
import { StudyGroupExamUpdateManyWithoutExamNestedInputObjectSchema } from './StudyGroupExamUpdateManyWithoutExamNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamUpdateWithoutModuleInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    title: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    code: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    rules: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    sections: z
      .lazy(() => ExamSectionUpdateManyWithoutExamNestedInputObjectSchema)
      .optional(),
    study_group_exams: z
      .lazy(() => StudyGroupExamUpdateManyWithoutExamNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const ExamUpdateWithoutModuleInputObjectSchema = Schema;
