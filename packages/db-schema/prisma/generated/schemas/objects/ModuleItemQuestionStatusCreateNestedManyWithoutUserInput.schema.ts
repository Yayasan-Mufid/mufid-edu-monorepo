import { z } from 'zod';
import { ModuleItemQuestionStatusCreateWithoutUserInputObjectSchema } from './ModuleItemQuestionStatusCreateWithoutUserInput.schema';
import { ModuleItemQuestionStatusUncheckedCreateWithoutUserInputObjectSchema } from './ModuleItemQuestionStatusUncheckedCreateWithoutUserInput.schema';
import { ModuleItemQuestionStatusCreateOrConnectWithoutUserInputObjectSchema } from './ModuleItemQuestionStatusCreateOrConnectWithoutUserInput.schema';
import { ModuleItemQuestionStatusCreateManyUserInputEnvelopeObjectSchema } from './ModuleItemQuestionStatusCreateManyUserInputEnvelope.schema';
import { ModuleItemQuestionStatusWhereUniqueInputObjectSchema } from './ModuleItemQuestionStatusWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemQuestionStatusCreateNestedManyWithoutUserInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () => ModuleItemQuestionStatusCreateWithoutUserInputObjectSchema,
          ),
          z
            .lazy(
              () => ModuleItemQuestionStatusCreateWithoutUserInputObjectSchema,
            )
            .array(),
          z.lazy(
            () =>
              ModuleItemQuestionStatusUncheckedCreateWithoutUserInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ModuleItemQuestionStatusUncheckedCreateWithoutUserInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              ModuleItemQuestionStatusCreateOrConnectWithoutUserInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ModuleItemQuestionStatusCreateOrConnectWithoutUserInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(
          () => ModuleItemQuestionStatusCreateManyUserInputEnvelopeObjectSchema,
        )
        .optional(),
      connect: z
        .union([
          z.lazy(() => ModuleItemQuestionStatusWhereUniqueInputObjectSchema),
          z
            .lazy(() => ModuleItemQuestionStatusWhereUniqueInputObjectSchema)
            .array(),
        ])
        .optional(),
    })
    .strict();

export const ModuleItemQuestionStatusCreateNestedManyWithoutUserInputObjectSchema =
  Schema;
