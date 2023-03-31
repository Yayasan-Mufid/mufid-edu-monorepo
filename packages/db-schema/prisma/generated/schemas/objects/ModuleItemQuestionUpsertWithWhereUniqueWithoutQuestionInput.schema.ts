import { z } from 'zod';
import { ModuleItemQuestionWhereUniqueInputObjectSchema } from './ModuleItemQuestionWhereUniqueInput.schema';
import { ModuleItemQuestionUpdateWithoutQuestionInputObjectSchema } from './ModuleItemQuestionUpdateWithoutQuestionInput.schema';
import { ModuleItemQuestionUncheckedUpdateWithoutQuestionInputObjectSchema } from './ModuleItemQuestionUncheckedUpdateWithoutQuestionInput.schema';
import { ModuleItemQuestionCreateWithoutQuestionInputObjectSchema } from './ModuleItemQuestionCreateWithoutQuestionInput.schema';
import { ModuleItemQuestionUncheckedCreateWithoutQuestionInputObjectSchema } from './ModuleItemQuestionUncheckedCreateWithoutQuestionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemQuestionUpsertWithWhereUniqueWithoutQuestionInput> =
  z
    .object({
      where: z.lazy(() => ModuleItemQuestionWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => ModuleItemQuestionUpdateWithoutQuestionInputObjectSchema),
        z.lazy(
          () =>
            ModuleItemQuestionUncheckedUpdateWithoutQuestionInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => ModuleItemQuestionCreateWithoutQuestionInputObjectSchema),
        z.lazy(
          () =>
            ModuleItemQuestionUncheckedCreateWithoutQuestionInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ModuleItemQuestionUpsertWithWhereUniqueWithoutQuestionInputObjectSchema =
  Schema;
