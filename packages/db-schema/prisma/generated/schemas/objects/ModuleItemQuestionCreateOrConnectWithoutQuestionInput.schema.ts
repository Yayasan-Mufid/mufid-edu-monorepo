import { z } from 'zod';
import { ModuleItemQuestionWhereUniqueInputObjectSchema } from './ModuleItemQuestionWhereUniqueInput.schema';
import { ModuleItemQuestionCreateWithoutQuestionInputObjectSchema } from './ModuleItemQuestionCreateWithoutQuestionInput.schema';
import { ModuleItemQuestionUncheckedCreateWithoutQuestionInputObjectSchema } from './ModuleItemQuestionUncheckedCreateWithoutQuestionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemQuestionCreateOrConnectWithoutQuestionInput> =
  z
    .object({
      where: z.lazy(() => ModuleItemQuestionWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => ModuleItemQuestionCreateWithoutQuestionInputObjectSchema),
        z.lazy(
          () =>
            ModuleItemQuestionUncheckedCreateWithoutQuestionInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ModuleItemQuestionCreateOrConnectWithoutQuestionInputObjectSchema =
  Schema;
