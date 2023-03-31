import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { ModuleItemQuestionStatusUncheckedUpdateManyWithoutQuestionNestedInputObjectSchema } from './ModuleItemQuestionStatusUncheckedUpdateManyWithoutQuestionNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemQuestionUncheckedUpdateWithoutQuestionInput> =
  z
    .object({
      id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      module_item_id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      user_status: z
        .lazy(
          () =>
            ModuleItemQuestionStatusUncheckedUpdateManyWithoutQuestionNestedInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const ModuleItemQuestionUncheckedUpdateWithoutQuestionInputObjectSchema =
  Schema;
