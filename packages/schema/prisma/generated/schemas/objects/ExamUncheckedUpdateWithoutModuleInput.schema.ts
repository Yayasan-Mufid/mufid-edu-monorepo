import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { ExamSectionUncheckedUpdateManyWithoutExamNestedInputObjectSchema } from './ExamSectionUncheckedUpdateManyWithoutExamNestedInput.schema';
import { StudyGroupExamUncheckedUpdateManyWithoutExamNestedInputObjectSchema } from './StudyGroupExamUncheckedUpdateManyWithoutExamNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamUncheckedUpdateWithoutModuleInput> = z
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
      .lazy(
        () => ExamSectionUncheckedUpdateManyWithoutExamNestedInputObjectSchema,
      )
      .optional(),
    study_group_exams: z
      .lazy(
        () =>
          StudyGroupExamUncheckedUpdateManyWithoutExamNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const ExamUncheckedUpdateWithoutModuleInputObjectSchema = Schema;
