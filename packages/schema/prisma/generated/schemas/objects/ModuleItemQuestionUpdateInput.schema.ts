import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { ModuleItemUpdateOneRequiredWithoutQuizNestedInputObjectSchema } from './ModuleItemUpdateOneRequiredWithoutQuizNestedInput.schema';
import { QuestionUpdateOneRequiredWithoutModule_item_questionNestedInputObjectSchema } from './QuestionUpdateOneRequiredWithoutModule_item_questionNestedInput.schema';
import { ModuleItemQuestionStatusUpdateManyWithoutQuestionNestedInputObjectSchema } from './ModuleItemQuestionStatusUpdateManyWithoutQuestionNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemQuestionUpdateInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    module_item: z
      .lazy(() => ModuleItemUpdateOneRequiredWithoutQuizNestedInputObjectSchema)
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

export const ModuleItemQuestionUpdateInputObjectSchema = Schema;
