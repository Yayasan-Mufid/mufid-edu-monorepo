import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { ModuleItemUpdateOneRequiredWithoutQuizNestedInputObjectSchema } from './ModuleItemUpdateOneRequiredWithoutQuizNestedInput.schema';
import { QuestionUpdateOneRequiredWithoutModule_item_questionNestedInputObjectSchema } from './QuestionUpdateOneRequiredWithoutModule_item_questionNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemQuestionUpdateWithoutUser_statusInput> =
  z
    .object({
      id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      module_item: z
        .lazy(
          () => ModuleItemUpdateOneRequiredWithoutQuizNestedInputObjectSchema,
        )
        .optional(),
      question: z
        .lazy(
          () =>
            QuestionUpdateOneRequiredWithoutModule_item_questionNestedInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const ModuleItemQuestionUpdateWithoutUser_statusInputObjectSchema =
  Schema;
