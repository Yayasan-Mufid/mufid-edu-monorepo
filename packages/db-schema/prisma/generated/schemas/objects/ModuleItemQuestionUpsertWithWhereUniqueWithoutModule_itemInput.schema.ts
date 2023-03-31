import { z } from 'zod';
import { ModuleItemQuestionWhereUniqueInputObjectSchema } from './ModuleItemQuestionWhereUniqueInput.schema';
import { ModuleItemQuestionUpdateWithoutModule_itemInputObjectSchema } from './ModuleItemQuestionUpdateWithoutModule_itemInput.schema';
import { ModuleItemQuestionUncheckedUpdateWithoutModule_itemInputObjectSchema } from './ModuleItemQuestionUncheckedUpdateWithoutModule_itemInput.schema';
import { ModuleItemQuestionCreateWithoutModule_itemInputObjectSchema } from './ModuleItemQuestionCreateWithoutModule_itemInput.schema';
import { ModuleItemQuestionUncheckedCreateWithoutModule_itemInputObjectSchema } from './ModuleItemQuestionUncheckedCreateWithoutModule_itemInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemQuestionUpsertWithWhereUniqueWithoutModule_itemInput> =
  z
    .object({
      where: z.lazy(() => ModuleItemQuestionWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(
          () => ModuleItemQuestionUpdateWithoutModule_itemInputObjectSchema,
        ),
        z.lazy(
          () =>
            ModuleItemQuestionUncheckedUpdateWithoutModule_itemInputObjectSchema,
        ),
      ]),
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

export const ModuleItemQuestionUpsertWithWhereUniqueWithoutModule_itemInputObjectSchema =
  Schema;
