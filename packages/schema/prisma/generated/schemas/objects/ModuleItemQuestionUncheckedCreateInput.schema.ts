import { z } from 'zod';
import { ModuleItemQuestionStatusUncheckedCreateNestedManyWithoutQuestionInputObjectSchema } from './ModuleItemQuestionStatusUncheckedCreateNestedManyWithoutQuestionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemQuestionUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    module_item_id: z.string(),
    question_id: z.string(),
    user_status: z
      .lazy(
        () =>
          ModuleItemQuestionStatusUncheckedCreateNestedManyWithoutQuestionInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const ModuleItemQuestionUncheckedCreateInputObjectSchema = Schema;
