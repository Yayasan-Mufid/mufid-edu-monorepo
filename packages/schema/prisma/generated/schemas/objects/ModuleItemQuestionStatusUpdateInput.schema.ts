import { z } from 'zod';
import { ModuleItemQuestionUpdateOneRequiredWithoutUser_statusNestedInputObjectSchema } from './ModuleItemQuestionUpdateOneRequiredWithoutUser_statusNestedInput.schema';
import { UserUpdateOneRequiredWithoutModule_item_question_statusNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutModule_item_question_statusNestedInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemQuestionStatusUpdateInput> = z
  .object({
    question: z
      .lazy(
        () =>
          ModuleItemQuestionUpdateOneRequiredWithoutUser_statusNestedInputObjectSchema,
      )
      .optional(),
    user: z
      .lazy(
        () =>
          UserUpdateOneRequiredWithoutModule_item_question_statusNestedInputObjectSchema,
      )
      .optional(),
    status: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const ModuleItemQuestionStatusUpdateInputObjectSchema = Schema;
