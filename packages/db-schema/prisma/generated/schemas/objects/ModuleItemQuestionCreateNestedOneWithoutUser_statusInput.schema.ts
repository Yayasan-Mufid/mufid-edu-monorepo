import { z } from 'zod';
import { ModuleItemQuestionCreateWithoutUser_statusInputObjectSchema } from './ModuleItemQuestionCreateWithoutUser_statusInput.schema';
import { ModuleItemQuestionUncheckedCreateWithoutUser_statusInputObjectSchema } from './ModuleItemQuestionUncheckedCreateWithoutUser_statusInput.schema';
import { ModuleItemQuestionCreateOrConnectWithoutUser_statusInputObjectSchema } from './ModuleItemQuestionCreateOrConnectWithoutUser_statusInput.schema';
import { ModuleItemQuestionWhereUniqueInputObjectSchema } from './ModuleItemQuestionWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemQuestionCreateNestedOneWithoutUser_statusInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () => ModuleItemQuestionCreateWithoutUser_statusInputObjectSchema,
          ),
          z.lazy(
            () =>
              ModuleItemQuestionUncheckedCreateWithoutUser_statusInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () =>
            ModuleItemQuestionCreateOrConnectWithoutUser_statusInputObjectSchema,
        )
        .optional(),
      connect: z
        .lazy(() => ModuleItemQuestionWhereUniqueInputObjectSchema)
        .optional(),
    })
    .strict();

export const ModuleItemQuestionCreateNestedOneWithoutUser_statusInputObjectSchema =
  Schema;
