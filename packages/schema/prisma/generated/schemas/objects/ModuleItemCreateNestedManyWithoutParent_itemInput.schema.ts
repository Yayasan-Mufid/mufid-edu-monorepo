import { z } from 'zod';
import { ModuleItemCreateWithoutParent_itemInputObjectSchema } from './ModuleItemCreateWithoutParent_itemInput.schema';
import { ModuleItemUncheckedCreateWithoutParent_itemInputObjectSchema } from './ModuleItemUncheckedCreateWithoutParent_itemInput.schema';
import { ModuleItemCreateOrConnectWithoutParent_itemInputObjectSchema } from './ModuleItemCreateOrConnectWithoutParent_itemInput.schema';
import { ModuleItemCreateManyParent_itemInputEnvelopeObjectSchema } from './ModuleItemCreateManyParent_itemInputEnvelope.schema';
import { ModuleItemWhereUniqueInputObjectSchema } from './ModuleItemWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemCreateNestedManyWithoutParent_itemInput> =
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
      createMany: z
        .lazy(() => ModuleItemCreateManyParent_itemInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => ModuleItemWhereUniqueInputObjectSchema),
          z.lazy(() => ModuleItemWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ModuleItemCreateNestedManyWithoutParent_itemInputObjectSchema =
  Schema;
