import { z } from 'zod';
import { ModuleItemQuestionWhereUniqueInputObjectSchema } from './ModuleItemQuestionWhereUniqueInput.schema';
import { ModuleItemQuestionCreateWithoutUser_statusInputObjectSchema } from './ModuleItemQuestionCreateWithoutUser_statusInput.schema';
import { ModuleItemQuestionUncheckedCreateWithoutUser_statusInputObjectSchema } from './ModuleItemQuestionUncheckedCreateWithoutUser_statusInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemQuestionCreateOrConnectWithoutUser_statusInput> =
  z
    .object({
      where: z.lazy(() => ModuleItemQuestionWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(
          () => ModuleItemQuestionCreateWithoutUser_statusInputObjectSchema,
        ),
        z.lazy(
          () =>
            ModuleItemQuestionUncheckedCreateWithoutUser_statusInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ModuleItemQuestionCreateOrConnectWithoutUser_statusInputObjectSchema =
  Schema;
