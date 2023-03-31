import { z } from 'zod';
import { ModuleItemQuestionStatusWhereUniqueInputObjectSchema } from './ModuleItemQuestionStatusWhereUniqueInput.schema';
import { ModuleItemQuestionStatusCreateWithoutUserInputObjectSchema } from './ModuleItemQuestionStatusCreateWithoutUserInput.schema';
import { ModuleItemQuestionStatusUncheckedCreateWithoutUserInputObjectSchema } from './ModuleItemQuestionStatusUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemQuestionStatusCreateOrConnectWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => ModuleItemQuestionStatusWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(
          () => ModuleItemQuestionStatusCreateWithoutUserInputObjectSchema,
        ),
        z.lazy(
          () =>
            ModuleItemQuestionStatusUncheckedCreateWithoutUserInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ModuleItemQuestionStatusCreateOrConnectWithoutUserInputObjectSchema =
  Schema;
