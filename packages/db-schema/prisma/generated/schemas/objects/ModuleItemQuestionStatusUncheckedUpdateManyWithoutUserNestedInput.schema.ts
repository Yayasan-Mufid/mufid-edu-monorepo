import { z } from 'zod';
import { ModuleItemQuestionStatusCreateWithoutUserInputObjectSchema } from './ModuleItemQuestionStatusCreateWithoutUserInput.schema';
import { ModuleItemQuestionStatusUncheckedCreateWithoutUserInputObjectSchema } from './ModuleItemQuestionStatusUncheckedCreateWithoutUserInput.schema';
import { ModuleItemQuestionStatusCreateOrConnectWithoutUserInputObjectSchema } from './ModuleItemQuestionStatusCreateOrConnectWithoutUserInput.schema';
import { ModuleItemQuestionStatusUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './ModuleItemQuestionStatusUpsertWithWhereUniqueWithoutUserInput.schema';
import { ModuleItemQuestionStatusCreateManyUserInputEnvelopeObjectSchema } from './ModuleItemQuestionStatusCreateManyUserInputEnvelope.schema';
import { ModuleItemQuestionStatusWhereUniqueInputObjectSchema } from './ModuleItemQuestionStatusWhereUniqueInput.schema';
import { ModuleItemQuestionStatusUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './ModuleItemQuestionStatusUpdateWithWhereUniqueWithoutUserInput.schema';
import { ModuleItemQuestionStatusUpdateManyWithWhereWithoutUserInputObjectSchema } from './ModuleItemQuestionStatusUpdateManyWithWhereWithoutUserInput.schema';
import { ModuleItemQuestionStatusScalarWhereInputObjectSchema } from './ModuleItemQuestionStatusScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemQuestionStatusUncheckedUpdateManyWithoutUserNestedInput> =
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
      upsert: z
        .union([
          z.lazy(
            () =>
              ModuleItemQuestionStatusUpsertWithWhereUniqueWithoutUserInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ModuleItemQuestionStatusUpsertWithWhereUniqueWithoutUserInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(
          () => ModuleItemQuestionStatusCreateManyUserInputEnvelopeObjectSchema,
        )
        .optional(),
      set: z
        .union([
          z.lazy(() => ModuleItemQuestionStatusWhereUniqueInputObjectSchema),
          z
            .lazy(() => ModuleItemQuestionStatusWhereUniqueInputObjectSchema)
            .array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => ModuleItemQuestionStatusWhereUniqueInputObjectSchema),
          z
            .lazy(() => ModuleItemQuestionStatusWhereUniqueInputObjectSchema)
            .array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => ModuleItemQuestionStatusWhereUniqueInputObjectSchema),
          z
            .lazy(() => ModuleItemQuestionStatusWhereUniqueInputObjectSchema)
            .array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => ModuleItemQuestionStatusWhereUniqueInputObjectSchema),
          z
            .lazy(() => ModuleItemQuestionStatusWhereUniqueInputObjectSchema)
            .array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              ModuleItemQuestionStatusUpdateWithWhereUniqueWithoutUserInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ModuleItemQuestionStatusUpdateWithWhereUniqueWithoutUserInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              ModuleItemQuestionStatusUpdateManyWithWhereWithoutUserInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ModuleItemQuestionStatusUpdateManyWithWhereWithoutUserInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => ModuleItemQuestionStatusScalarWhereInputObjectSchema),
          z
            .lazy(() => ModuleItemQuestionStatusScalarWhereInputObjectSchema)
            .array(),
        ])
        .optional(),
    })
    .strict();

export const ModuleItemQuestionStatusUncheckedUpdateManyWithoutUserNestedInputObjectSchema =
  Schema;
