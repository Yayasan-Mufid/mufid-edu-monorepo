import { z } from 'zod';
import { ModuleItemQuestionWhereUniqueInputObjectSchema } from './ModuleItemQuestionWhereUniqueInput.schema';
import { ModuleItemQuestionUpdateWithoutQuestionInputObjectSchema } from './ModuleItemQuestionUpdateWithoutQuestionInput.schema';
import { ModuleItemQuestionUncheckedUpdateWithoutQuestionInputObjectSchema } from './ModuleItemQuestionUncheckedUpdateWithoutQuestionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemQuestionUpdateWithWhereUniqueWithoutQuestionInput> =
  z
    .object({
      where: z.lazy(() => ModuleItemQuestionWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => ModuleItemQuestionUpdateWithoutQuestionInputObjectSchema),
        z.lazy(
          () =>
            ModuleItemQuestionUncheckedUpdateWithoutQuestionInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ModuleItemQuestionUpdateWithWhereUniqueWithoutQuestionInputObjectSchema =
  Schema;
