import { z } from 'zod';
import { UserUpdateOneRequiredWithoutModule_item_question_statusNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutModule_item_question_statusNestedInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemQuestionStatusUpdateWithoutQuestionInput> =
  z
    .object({
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

export const ModuleItemQuestionStatusUpdateWithoutQuestionInputObjectSchema =
  Schema;
