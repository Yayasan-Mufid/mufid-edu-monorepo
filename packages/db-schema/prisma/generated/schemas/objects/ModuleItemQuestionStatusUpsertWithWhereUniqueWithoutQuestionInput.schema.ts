import { z } from 'zod';
import { ModuleItemQuestionStatusWhereUniqueInputObjectSchema } from './ModuleItemQuestionStatusWhereUniqueInput.schema';
import { ModuleItemQuestionStatusUpdateWithoutQuestionInputObjectSchema } from './ModuleItemQuestionStatusUpdateWithoutQuestionInput.schema';
import { ModuleItemQuestionStatusUncheckedUpdateWithoutQuestionInputObjectSchema } from './ModuleItemQuestionStatusUncheckedUpdateWithoutQuestionInput.schema';
import { ModuleItemQuestionStatusCreateWithoutQuestionInputObjectSchema } from './ModuleItemQuestionStatusCreateWithoutQuestionInput.schema';
import { ModuleItemQuestionStatusUncheckedCreateWithoutQuestionInputObjectSchema } from './ModuleItemQuestionStatusUncheckedCreateWithoutQuestionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemQuestionStatusUpsertWithWhereUniqueWithoutQuestionInput> =
  z
    .object({
      where: z.lazy(() => ModuleItemQuestionStatusWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(
          () => ModuleItemQuestionStatusUpdateWithoutQuestionInputObjectSchema,
        ),
        z.lazy(
          () =>
            ModuleItemQuestionStatusUncheckedUpdateWithoutQuestionInputObjectSchema,
        ),
      ]),
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

export const ModuleItemQuestionStatusUpsertWithWhereUniqueWithoutQuestionInputObjectSchema =
  Schema;
