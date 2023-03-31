import { z } from 'zod';
import { ModuleItemQuestionStatusWhereUniqueInputObjectSchema } from './ModuleItemQuestionStatusWhereUniqueInput.schema';
import { ModuleItemQuestionStatusCreateWithoutQuestionInputObjectSchema } from './ModuleItemQuestionStatusCreateWithoutQuestionInput.schema';
import { ModuleItemQuestionStatusUncheckedCreateWithoutQuestionInputObjectSchema } from './ModuleItemQuestionStatusUncheckedCreateWithoutQuestionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemQuestionStatusCreateOrConnectWithoutQuestionInput> =
  z
    .object({
      where: z.lazy(() => ModuleItemQuestionStatusWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(
          () => ModuleItemQuestionStatusCreateWithoutQuestionInputObjectSchema,
        ),
        z.lazy(
          () =>
            ModuleItemQuestionStatusUncheckedCreateWithoutQuestionInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ModuleItemQuestionStatusCreateOrConnectWithoutQuestionInputObjectSchema =
  Schema;
