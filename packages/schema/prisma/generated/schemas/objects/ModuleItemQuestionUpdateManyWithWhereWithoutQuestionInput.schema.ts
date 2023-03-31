import { z } from 'zod';
import { ModuleItemQuestionScalarWhereInputObjectSchema } from './ModuleItemQuestionScalarWhereInput.schema';
import { ModuleItemQuestionUpdateManyMutationInputObjectSchema } from './ModuleItemQuestionUpdateManyMutationInput.schema';
import { ModuleItemQuestionUncheckedUpdateManyWithoutModule_item_questionInputObjectSchema } from './ModuleItemQuestionUncheckedUpdateManyWithoutModule_item_questionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemQuestionUpdateManyWithWhereWithoutQuestionInput> =
  z
    .object({
      where: z.lazy(() => ModuleItemQuestionScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => ModuleItemQuestionUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            ModuleItemQuestionUncheckedUpdateManyWithoutModule_item_questionInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ModuleItemQuestionUpdateManyWithWhereWithoutQuestionInputObjectSchema =
  Schema;
