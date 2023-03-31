import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { ModuleUpdateOneRequiredWithoutExamsNestedInputObjectSchema } from './ModuleUpdateOneRequiredWithoutExamsNestedInput.schema';
import { StudyGroupExamUpdateManyWithoutExamNestedInputObjectSchema } from './StudyGroupExamUpdateManyWithoutExamNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamUpdateWithoutSectionsInput> = z
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
    module: z
      .lazy(() => ModuleUpdateOneRequiredWithoutExamsNestedInputObjectSchema)
      .optional(),
    rules: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    study_group_exams: z
      .lazy(() => StudyGroupExamUpdateManyWithoutExamNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const ExamUpdateWithoutSectionsInputObjectSchema = Schema;
