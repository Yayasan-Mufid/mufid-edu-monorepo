import { z } from 'zod';
import { ModuleItemQuestionWhereUniqueInputObjectSchema } from './ModuleItemQuestionWhereUniqueInput.schema';
import { ModuleItemQuestionCreateWithoutModule_itemInputObjectSchema } from './ModuleItemQuestionCreateWithoutModule_itemInput.schema';
import { ModuleItemQuestionUncheckedCreateWithoutModule_itemInputObjectSchema } from './ModuleItemQuestionUncheckedCreateWithoutModule_itemInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemQuestionCreateOrConnectWithoutModule_itemInput> =
  z
    .object({
      where: z.lazy(() => ModuleItemQuestionWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(
          () => ModuleItemQuestionCreateWithoutModule_itemInputObjectSchema,
        ),
        z.lazy(
          () =>
            ModuleItemQuestionUncheckedCreateWithoutModule_itemInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ModuleItemQuestionCreateOrConnectWithoutModule_itemInputObjectSchema =
  Schema;
