import { z } from 'zod';
import { ModuleItemQuestionStatusCreateWithoutQuestionInputObjectSchema } from './ModuleItemQuestionStatusCreateWithoutQuestionInput.schema';
import { ModuleItemQuestionStatusUncheckedCreateWithoutQuestionInputObjectSchema } from './ModuleItemQuestionStatusUncheckedCreateWithoutQuestionInput.schema';
import { ModuleItemQuestionStatusCreateOrConnectWithoutQuestionInputObjectSchema } from './ModuleItemQuestionStatusCreateOrConnectWithoutQuestionInput.schema';
import { ModuleItemQuestionStatusUpsertWithWhereUniqueWithoutQuestionInputObjectSchema } from './ModuleItemQuestionStatusUpsertWithWhereUniqueWithoutQuestionInput.schema';
import { ModuleItemQuestionStatusCreateManyQuestionInputEnvelopeObjectSchema } from './ModuleItemQuestionStatusCreateManyQuestionInputEnvelope.schema';
import { ModuleItemQuestionStatusWhereUniqueInputObjectSchema } from './ModuleItemQuestionStatusWhereUniqueInput.schema';
import { ModuleItemQuestionStatusUpdateWithWhereUniqueWithoutQuestionInputObjectSchema } from './ModuleItemQuestionStatusUpdateWithWhereUniqueWithoutQuestionInput.schema';
import { ModuleItemQuestionStatusUpdateManyWithWhereWithoutQuestionInputObjectSchema } from './ModuleItemQuestionStatusUpdateManyWithWhereWithoutQuestionInput.schema';
import { ModuleItemQuestionStatusScalarWhereInputObjectSchema } from './ModuleItemQuestionStatusScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemQuestionStatusUncheckedUpdateManyWithoutQuestionNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () =>
              ModuleItemQuestionStatusCreateWithoutQuestionInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ModuleItemQuestionStatusCreateWithoutQuestionInputObjectSchema,
            )
            .array(),
          z.lazy(
            () =>
              ModuleItemQuestionStatusUncheckedCreateWithoutQuestionInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ModuleItemQuestionStatusUncheckedCreateWithoutQuestionInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              ModuleItemQuestionStatusCreateOrConnectWithoutQuestionInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ModuleItemQuestionStatusCreateOrConnectWithoutQuestionInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              ModuleItemQuestionStatusUpsertWithWhereUniqueWithoutQuestionInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ModuleItemQuestionStatusUpsertWithWhereUniqueWithoutQuestionInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(
          () =>
            ModuleItemQuestionStatusCreateManyQuestionInputEnvelopeObjectSchema,
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
              ModuleItemQuestionStatusUpdateWithWhereUniqueWithoutQuestionInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ModuleItemQuestionStatusUpdateWithWhereUniqueWithoutQuestionInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              ModuleItemQuestionStatusUpdateManyWithWhereWithoutQuestionInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ModuleItemQuestionStatusUpdateManyWithWhereWithoutQuestionInputObjectSchema,
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

export const ModuleItemQuestionStatusUncheckedUpdateManyWithoutQuestionNestedInputObjectSchema =
  Schema;
