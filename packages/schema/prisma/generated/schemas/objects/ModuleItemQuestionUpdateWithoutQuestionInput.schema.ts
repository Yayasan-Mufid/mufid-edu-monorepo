import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { ModuleItemUpdateOneRequiredWithoutQuizNestedInputObjectSchema } from './ModuleItemUpdateOneRequiredWithoutQuizNestedInput.schema';
import { ModuleItemQuestionStatusUpdateManyWithoutQuestionNestedInputObjectSchema } from './ModuleItemQuestionStatusUpdateManyWithoutQuestionNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemQuestionUpdateWithoutQuestionInput> = z
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
    user_status: z
      .lazy(
        () =>
          ModuleItemQuestionStatusUpdateManyWithoutQuestionNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const ModuleItemQuestionUpdateWithoutQuestionInputObjectSchema = Schema;
