import { z } from 'zod';
import { ModuleItemQuestionScalarWhereInputObjectSchema } from './ModuleItemQuestionScalarWhereInput.schema';
import { ModuleItemQuestionUpdateManyMutationInputObjectSchema } from './ModuleItemQuestionUpdateManyMutationInput.schema';
import { ModuleItemQuestionUncheckedUpdateManyWithoutQuizInputObjectSchema } from './ModuleItemQuestionUncheckedUpdateManyWithoutQuizInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemQuestionUpdateManyWithWhereWithoutModule_itemInput> =
  z
    .object({
      where: z.lazy(() => ModuleItemQuestionScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => ModuleItemQuestionUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            ModuleItemQuestionUncheckedUpdateManyWithoutQuizInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ModuleItemQuestionUpdateManyWithWhereWithoutModule_itemInputObjectSchema =
  Schema;
