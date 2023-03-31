import { z } from 'zod';
import { ModuleItemStatusCreateWithoutUserInputObjectSchema } from './ModuleItemStatusCreateWithoutUserInput.schema';
import { ModuleItemStatusUncheckedCreateWithoutUserInputObjectSchema } from './ModuleItemStatusUncheckedCreateWithoutUserInput.schema';
import { ModuleItemStatusCreateOrConnectWithoutUserInputObjectSchema } from './ModuleItemStatusCreateOrConnectWithoutUserInput.schema';
import { ModuleItemStatusUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './ModuleItemStatusUpsertWithWhereUniqueWithoutUserInput.schema';
import { ModuleItemStatusCreateManyUserInputEnvelopeObjectSchema } from './ModuleItemStatusCreateManyUserInputEnvelope.schema';
import { ModuleItemStatusWhereUniqueInputObjectSchema } from './ModuleItemStatusWhereUniqueInput.schema';
import { ModuleItemStatusUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './ModuleItemStatusUpdateWithWhereUniqueWithoutUserInput.schema';
import { ModuleItemStatusUpdateManyWithWhereWithoutUserInputObjectSchema } from './ModuleItemStatusUpdateManyWithWhereWithoutUserInput.schema';
import { ModuleItemStatusScalarWhereInputObjectSchema } from './ModuleItemStatusScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemStatusUpdateManyWithoutUserNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ModuleItemStatusCreateWithoutUserInputObjectSchema),
          z
            .lazy(() => ModuleItemStatusCreateWithoutUserInputObjectSchema)
            .array(),
          z.lazy(
            () => ModuleItemStatusUncheckedCreateWithoutUserInputObjectSchema,
          ),
          z
            .lazy(
              () => ModuleItemStatusUncheckedCreateWithoutUserInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => ModuleItemStatusCreateOrConnectWithoutUserInputObjectSchema,
          ),
          z
            .lazy(
              () => ModuleItemStatusCreateOrConnectWithoutUserInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              ModuleItemStatusUpsertWithWhereUniqueWithoutUserInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ModuleItemStatusUpsertWithWhereUniqueWithoutUserInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => ModuleItemStatusCreateManyUserInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => ModuleItemStatusWhereUniqueInputObjectSchema),
          z.lazy(() => ModuleItemStatusWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => ModuleItemStatusWhereUniqueInputObjectSchema),
          z.lazy(() => ModuleItemStatusWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => ModuleItemStatusWhereUniqueInputObjectSchema),
          z.lazy(() => ModuleItemStatusWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => ModuleItemStatusWhereUniqueInputObjectSchema),
          z.lazy(() => ModuleItemStatusWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              ModuleItemStatusUpdateWithWhereUniqueWithoutUserInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ModuleItemStatusUpdateWithWhereUniqueWithoutUserInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              ModuleItemStatusUpdateManyWithWhereWithoutUserInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ModuleItemStatusUpdateManyWithWhereWithoutUserInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => ModuleItemStatusScalarWhereInputObjectSchema),
          z.lazy(() => ModuleItemStatusScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ModuleItemStatusUpdateManyWithoutUserNestedInputObjectSchema =
  Schema;
