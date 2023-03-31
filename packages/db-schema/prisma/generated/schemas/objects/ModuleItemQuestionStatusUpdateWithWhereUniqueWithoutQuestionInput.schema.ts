import { z } from 'zod';
import { ModuleItemQuestionStatusWhereUniqueInputObjectSchema } from './ModuleItemQuestionStatusWhereUniqueInput.schema';
import { ModuleItemQuestionStatusUpdateWithoutQuestionInputObjectSchema } from './ModuleItemQuestionStatusUpdateWithoutQuestionInput.schema';
import { ModuleItemQuestionStatusUncheckedUpdateWithoutQuestionInputObjectSchema } from './ModuleItemQuestionStatusUncheckedUpdateWithoutQuestionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemQuestionStatusUpdateWithWhereUniqueWithoutQuestionInput> =
  z
    .object({
      where: z.lazy(() => ModuleItemQuestionStatusWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(
          () => ModuleItemQuestionStatusUpdateWithoutQuestionInputObjectSchema,
        ),
        z.lazy(
          () =>
            ModuleItemQuestionStatusUncheckedUpdateWithoutQuestionInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ModuleItemQuestionStatusUpdateWithWhereUniqueWithoutQuestionInputObjectSchema =
  Schema;
