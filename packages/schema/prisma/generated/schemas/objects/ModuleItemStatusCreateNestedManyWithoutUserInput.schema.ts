import { z } from 'zod';
import { ModuleItemStatusCreateWithoutUserInputObjectSchema } from './ModuleItemStatusCreateWithoutUserInput.schema';
import { ModuleItemStatusUncheckedCreateWithoutUserInputObjectSchema } from './ModuleItemStatusUncheckedCreateWithoutUserInput.schema';
import { ModuleItemStatusCreateOrConnectWithoutUserInputObjectSchema } from './ModuleItemStatusCreateOrConnectWithoutUserInput.schema';
import { ModuleItemStatusCreateManyUserInputEnvelopeObjectSchema } from './ModuleItemStatusCreateManyUserInputEnvelope.schema';
import { ModuleItemStatusWhereUniqueInputObjectSchema } from './ModuleItemStatusWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemStatusCreateNestedManyWithoutUserInput> =
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
      createMany: z
        .lazy(() => ModuleItemStatusCreateManyUserInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => ModuleItemStatusWhereUniqueInputObjectSchema),
          z.lazy(() => ModuleItemStatusWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ModuleItemStatusCreateNestedManyWithoutUserInputObjectSchema =
  Schema;
