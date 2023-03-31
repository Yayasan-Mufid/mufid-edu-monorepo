import { z } from 'zod';
import { ModuleItemCreateWithoutParent_itemInputObjectSchema } from './ModuleItemCreateWithoutParent_itemInput.schema';
import { ModuleItemUncheckedCreateWithoutParent_itemInputObjectSchema } from './ModuleItemUncheckedCreateWithoutParent_itemInput.schema';
import { ModuleItemCreateOrConnectWithoutParent_itemInputObjectSchema } from './ModuleItemCreateOrConnectWithoutParent_itemInput.schema';
import { ModuleItemUpsertWithWhereUniqueWithoutParent_itemInputObjectSchema } from './ModuleItemUpsertWithWhereUniqueWithoutParent_itemInput.schema';
import { ModuleItemCreateManyParent_itemInputEnvelopeObjectSchema } from './ModuleItemCreateManyParent_itemInputEnvelope.schema';
import { ModuleItemWhereUniqueInputObjectSchema } from './ModuleItemWhereUniqueInput.schema';
import { ModuleItemUpdateWithWhereUniqueWithoutParent_itemInputObjectSchema } from './ModuleItemUpdateWithWhereUniqueWithoutParent_itemInput.schema';
import { ModuleItemUpdateManyWithWhereWithoutParent_itemInputObjectSchema } from './ModuleItemUpdateManyWithWhereWithoutParent_itemInput.schema';
import { ModuleItemScalarWhereInputObjectSchema } from './ModuleItemScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemUpdateManyWithoutParent_itemNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ModuleItemCreateWithoutParent_itemInputObjectSchema),
          z
            .lazy(() => ModuleItemCreateWithoutParent_itemInputObjectSchema)
            .array(),
          z.lazy(
            () => ModuleItemUncheckedCreateWithoutParent_itemInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ModuleItemUncheckedCreateWithoutParent_itemInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => ModuleItemCreateOrConnectWithoutParent_itemInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ModuleItemCreateOrConnectWithoutParent_itemInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              ModuleItemUpsertWithWhereUniqueWithoutParent_itemInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ModuleItemUpsertWithWhereUniqueWithoutParent_itemInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => ModuleItemCreateManyParent_itemInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => ModuleItemWhereUniqueInputObjectSchema),
          z.lazy(() => ModuleItemWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => ModuleItemWhereUniqueInputObjectSchema),
          z.lazy(() => ModuleItemWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => ModuleItemWhereUniqueInputObjectSchema),
          z.lazy(() => ModuleItemWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => ModuleItemWhereUniqueInputObjectSchema),
          z.lazy(() => ModuleItemWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              ModuleItemUpdateWithWhereUniqueWithoutParent_itemInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ModuleItemUpdateWithWhereUniqueWithoutParent_itemInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              ModuleItemUpdateManyWithWhereWithoutParent_itemInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ModuleItemUpdateManyWithWhereWithoutParent_itemInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => ModuleItemScalarWhereInputObjectSchema),
          z.lazy(() => ModuleItemScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ModuleItemUpdateManyWithoutParent_itemNestedInputObjectSchema =
  Schema;
