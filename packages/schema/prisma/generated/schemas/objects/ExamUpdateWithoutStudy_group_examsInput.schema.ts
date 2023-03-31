import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { ModuleUpdateOneRequiredWithoutExamsNestedInputObjectSchema } from './ModuleUpdateOneRequiredWithoutExamsNestedInput.schema';
import { ExamSectionUpdateManyWithoutExamNestedInputObjectSchema } from './ExamSectionUpdateManyWithoutExamNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamUpdateWithoutStudy_group_examsInput> = z
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
    sections: z
      .lazy(() => ExamSectionUpdateManyWithoutExamNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const ExamUpdateWithoutStudy_group_examsInputObjectSchema = Schema;
