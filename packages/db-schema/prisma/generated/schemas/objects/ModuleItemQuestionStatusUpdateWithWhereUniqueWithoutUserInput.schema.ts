import { z } from 'zod';
import { ModuleItemQuestionStatusWhereUniqueInputObjectSchema } from './ModuleItemQuestionStatusWhereUniqueInput.schema';
import { ModuleItemQuestionStatusUpdateWithoutUserInputObjectSchema } from './ModuleItemQuestionStatusUpdateWithoutUserInput.schema';
import { ModuleItemQuestionStatusUncheckedUpdateWithoutUserInputObjectSchema } from './ModuleItemQuestionStatusUncheckedUpdateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemQuestionStatusUpdateWithWhereUniqueWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => ModuleItemQuestionStatusWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(
          () => ModuleItemQuestionStatusUpdateWithoutUserInputObjectSchema,
        ),
        z.lazy(
          () =>
            ModuleItemQuestionStatusUncheckedUpdateWithoutUserInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ModuleItemQuestionStatusUpdateWithWhereUniqueWithoutUserInputObjectSchema =
  Schema;
