import { z } from 'zod';
import { ModuleItemStatusCreateWithoutModule_itemInputObjectSchema } from './ModuleItemStatusCreateWithoutModule_itemInput.schema';
import { ModuleItemStatusUncheckedCreateWithoutModule_itemInputObjectSchema } from './ModuleItemStatusUncheckedCreateWithoutModule_itemInput.schema';
import { ModuleItemStatusCreateOrConnectWithoutModule_itemInputObjectSchema } from './ModuleItemStatusCreateOrConnectWithoutModule_itemInput.schema';
import { ModuleItemStatusUpsertWithWhereUniqueWithoutModule_itemInputObjectSchema } from './ModuleItemStatusUpsertWithWhereUniqueWithoutModule_itemInput.schema';
import { ModuleItemStatusCreateManyModule_itemInputEnvelopeObjectSchema } from './ModuleItemStatusCreateManyModule_itemInputEnvelope.schema';
import { ModuleItemStatusWhereUniqueInputObjectSchema } from './ModuleItemStatusWhereUniqueInput.schema';
import { ModuleItemStatusUpdateWithWhereUniqueWithoutModule_itemInputObjectSchema } from './ModuleItemStatusUpdateWithWhereUniqueWithoutModule_itemInput.schema';
import { ModuleItemStatusUpdateManyWithWhereWithoutModule_itemInputObjectSchema } from './ModuleItemStatusUpdateManyWithWhereWithoutModule_itemInput.schema';
import { ModuleItemStatusScalarWhereInputObjectSchema } from './ModuleItemStatusScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemStatusUpdateManyWithoutModule_itemNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () => ModuleItemStatusCreateWithoutModule_itemInputObjectSchema,
          ),
          z
            .lazy(
              () => ModuleItemStatusCreateWithoutModule_itemInputObjectSchema,
            )
            .array(),
          z.lazy(
            () =>
              ModuleItemStatusUncheckedCreateWithoutModule_itemInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ModuleItemStatusUncheckedCreateWithoutModule_itemInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              ModuleItemStatusCreateOrConnectWithoutModule_itemInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ModuleItemStatusCreateOrConnectWithoutModule_itemInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              ModuleItemStatusUpsertWithWhereUniqueWithoutModule_itemInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ModuleItemStatusUpsertWithWhereUniqueWithoutModule_itemInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(
          () => ModuleItemStatusCreateManyModule_itemInputEnvelopeObjectSchema,
        )
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
              ModuleItemStatusUpdateWithWhereUniqueWithoutModule_itemInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ModuleItemStatusUpdateWithWhereUniqueWithoutModule_itemInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              ModuleItemStatusUpdateManyWithWhereWithoutModule_itemInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ModuleItemStatusUpdateManyWithWhereWithoutModule_itemInputObjectSchema,
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

export const ModuleItemStatusUpdateManyWithoutModule_itemNestedInputObjectSchema =
  Schema;
