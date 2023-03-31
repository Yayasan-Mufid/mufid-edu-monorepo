import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemQuestionStatusUncheckedUpdateManyWithoutModule_item_question_statusInput> =
  z
    .object({
      question_id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      status: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const ModuleItemQuestionStatusUncheckedUpdateManyWithoutModule_item_question_statusInputObjectSchema =
  Schema;
