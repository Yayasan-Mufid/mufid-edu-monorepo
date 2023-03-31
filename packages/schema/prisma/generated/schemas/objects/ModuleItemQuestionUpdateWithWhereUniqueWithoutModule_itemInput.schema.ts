import { z } from 'zod';
import { ModuleItemQuestionWhereUniqueInputObjectSchema } from './ModuleItemQuestionWhereUniqueInput.schema';
import { ModuleItemQuestionUpdateWithoutModule_itemInputObjectSchema } from './ModuleItemQuestionUpdateWithoutModule_itemInput.schema';
import { ModuleItemQuestionUncheckedUpdateWithoutModule_itemInputObjectSchema } from './ModuleItemQuestionUncheckedUpdateWithoutModule_itemInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemQuestionUpdateWithWhereUniqueWithoutModule_itemInput> =
  z
    .object({
      where: z.lazy(() => ModuleItemQuestionWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(
          () => ModuleItemQuestionUpdateWithoutModule_itemInputObjectSchema,
        ),
        z.lazy(
          () =>
            ModuleItemQuestionUncheckedUpdateWithoutModule_itemInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ModuleItemQuestionUpdateWithWhereUniqueWithoutModule_itemInputObjectSchema =
  Schema;
