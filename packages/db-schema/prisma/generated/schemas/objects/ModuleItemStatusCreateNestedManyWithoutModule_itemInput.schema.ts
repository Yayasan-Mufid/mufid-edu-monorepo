import { z } from 'zod';
import { ModuleItemStatusCreateWithoutModule_itemInputObjectSchema } from './ModuleItemStatusCreateWithoutModule_itemInput.schema';
import { ModuleItemStatusUncheckedCreateWithoutModule_itemInputObjectSchema } from './ModuleItemStatusUncheckedCreateWithoutModule_itemInput.schema';
import { ModuleItemStatusCreateOrConnectWithoutModule_itemInputObjectSchema } from './ModuleItemStatusCreateOrConnectWithoutModule_itemInput.schema';
import { ModuleItemStatusCreateManyModule_itemInputEnvelopeObjectSchema } from './ModuleItemStatusCreateManyModule_itemInputEnvelope.schema';
import { ModuleItemStatusWhereUniqueInputObjectSchema } from './ModuleItemStatusWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemStatusCreateNestedManyWithoutModule_itemInput> =
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
      createMany: z
        .lazy(
          () => ModuleItemStatusCreateManyModule_itemInputEnvelopeObjectSchema,
        )
        .optional(),
      connect: z
        .union([
          z.lazy(() => ModuleItemStatusWhereUniqueInputObjectSchema),
          z.lazy(() => ModuleItemStatusWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ModuleItemStatusCreateNestedManyWithoutModule_itemInputObjectSchema =
  Schema;
