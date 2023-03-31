import { z } from 'zod';
import { ModuleItemQuestionStatusUncheckedCreateNestedManyWithoutQuestionInputObjectSchema } from './ModuleItemQuestionStatusUncheckedCreateNestedManyWithoutQuestionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemQuestionUncheckedCreateWithoutModule_itemInput> =
  z
    .object({
      id: z.string().optional(),
      question_id: z.string(),
      user_status: z
        .lazy(
          () =>
            ModuleItemQuestionStatusUncheckedCreateNestedManyWithoutQuestionInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const ModuleItemQuestionUncheckedCreateWithoutModule_itemInputObjectSchema =
  Schema;
