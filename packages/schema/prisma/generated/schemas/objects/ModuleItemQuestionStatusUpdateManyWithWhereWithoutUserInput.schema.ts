import { z } from 'zod';
import { ModuleItemQuestionStatusScalarWhereInputObjectSchema } from './ModuleItemQuestionStatusScalarWhereInput.schema';
import { ModuleItemQuestionStatusUpdateManyMutationInputObjectSchema } from './ModuleItemQuestionStatusUpdateManyMutationInput.schema';
import { ModuleItemQuestionStatusUncheckedUpdateManyWithoutModule_item_question_statusInputObjectSchema } from './ModuleItemQuestionStatusUncheckedUpdateManyWithoutModule_item_question_statusInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemQuestionStatusUpdateManyWithWhereWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => ModuleItemQuestionStatusScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(
          () => ModuleItemQuestionStatusUpdateManyMutationInputObjectSchema,
        ),
        z.lazy(
          () =>
            ModuleItemQuestionStatusUncheckedUpdateManyWithoutModule_item_question_statusInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ModuleItemQuestionStatusUpdateManyWithWhereWithoutUserInputObjectSchema =
  Schema;
