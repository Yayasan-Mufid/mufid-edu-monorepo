import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { QuestionUpdateOneRequiredWithoutModule_item_questionNestedInputObjectSchema } from './QuestionUpdateOneRequiredWithoutModule_item_questionNestedInput.schema';
import { ModuleItemQuestionStatusUpdateManyWithoutQuestionNestedInputObjectSchema } from './ModuleItemQuestionStatusUpdateManyWithoutQuestionNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemQuestionUpdateWithoutModule_itemInput> =
  z
    .object({
      id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      question: z
        .lazy(
          () =>
            QuestionUpdateOneRequiredWithoutModule_item_questionNestedInputObjectSchema,
        )
        .optional(),
      user_status: z
        .lazy(
          () =>
            ModuleItemQuestionStatusUpdateManyWithoutQuestionNestedInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const ModuleItemQuestionUpdateWithoutModule_itemInputObjectSchema =
  Schema;
