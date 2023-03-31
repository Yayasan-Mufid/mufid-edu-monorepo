import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { UserUpdateOneRequiredWithoutModule_item_question_statusNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutModule_item_question_statusNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemQuestionStatusUpdateWithoutQuestionInput> =
  z
    .object({
      status: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      user: z
        .lazy(
          () =>
            UserUpdateOneRequiredWithoutModule_item_question_statusNestedInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const ModuleItemQuestionStatusUpdateWithoutQuestionInputObjectSchema =
  Schema;
