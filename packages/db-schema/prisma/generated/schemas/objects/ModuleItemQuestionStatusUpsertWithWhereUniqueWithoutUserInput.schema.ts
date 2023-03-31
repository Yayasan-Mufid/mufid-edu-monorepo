import { z } from 'zod';
import { ModuleItemQuestionStatusWhereUniqueInputObjectSchema } from './ModuleItemQuestionStatusWhereUniqueInput.schema';
import { ModuleItemQuestionStatusUpdateWithoutUserInputObjectSchema } from './ModuleItemQuestionStatusUpdateWithoutUserInput.schema';
import { ModuleItemQuestionStatusUncheckedUpdateWithoutUserInputObjectSchema } from './ModuleItemQuestionStatusUncheckedUpdateWithoutUserInput.schema';
import { ModuleItemQuestionStatusCreateWithoutUserInputObjectSchema } from './ModuleItemQuestionStatusCreateWithoutUserInput.schema';
import { ModuleItemQuestionStatusUncheckedCreateWithoutUserInputObjectSchema } from './ModuleItemQuestionStatusUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemQuestionStatusUpsertWithWhereUniqueWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => ModuleItemQuestionStatusWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(
          () => ModuleItemQuestionStatusUpdateWithoutUserInputObjectSchema,
        ),
        z.lazy(
          () =>
            ModuleItemQuestionStatusUncheckedUpdateWithoutUserInputObjectSchema,
        ),
      ]),
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

export const ModuleItemQuestionStatusUpsertWithWhereUniqueWithoutUserInputObjectSchema =
  Schema;
