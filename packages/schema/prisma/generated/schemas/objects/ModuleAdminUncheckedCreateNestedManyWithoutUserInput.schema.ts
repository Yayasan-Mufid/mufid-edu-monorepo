import { z } from 'zod';
import { ModuleAdminCreateWithoutUserInputObjectSchema } from './ModuleAdminCreateWithoutUserInput.schema';
import { ModuleAdminUncheckedCreateWithoutUserInputObjectSchema } from './ModuleAdminUncheckedCreateWithoutUserInput.schema';
import { ModuleAdminCreateOrConnectWithoutUserInputObjectSchema } from './ModuleAdminCreateOrConnectWithoutUserInput.schema';
import { ModuleAdminCreateManyUserInputEnvelopeObjectSchema } from './ModuleAdminCreateManyUserInputEnvelope.schema';
import { ModuleAdminWhereUniqueInputObjectSchema } from './ModuleAdminWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleAdminUncheckedCreateNestedManyWithoutUserInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ModuleAdminCreateWithoutUserInputObjectSchema),
          z.lazy(() => ModuleAdminCreateWithoutUserInputObjectSchema).array(),
          z.lazy(() => ModuleAdminUncheckedCreateWithoutUserInputObjectSchema),
          z
            .lazy(() => ModuleAdminUncheckedCreateWithoutUserInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => ModuleAdminCreateOrConnectWithoutUserInputObjectSchema),
          z
            .lazy(() => ModuleAdminCreateOrConnectWithoutUserInputObjectSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => ModuleAdminCreateManyUserInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => ModuleAdminWhereUniqueInputObjectSchema),
          z.lazy(() => ModuleAdminWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ModuleAdminUncheckedCreateNestedManyWithoutUserInputObjectSchema =
  Schema;
