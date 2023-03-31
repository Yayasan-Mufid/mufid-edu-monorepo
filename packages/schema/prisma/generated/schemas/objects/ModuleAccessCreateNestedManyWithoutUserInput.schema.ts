import { z } from 'zod';
import { ModuleAccessCreateWithoutUserInputObjectSchema } from './ModuleAccessCreateWithoutUserInput.schema';
import { ModuleAccessUncheckedCreateWithoutUserInputObjectSchema } from './ModuleAccessUncheckedCreateWithoutUserInput.schema';
import { ModuleAccessCreateOrConnectWithoutUserInputObjectSchema } from './ModuleAccessCreateOrConnectWithoutUserInput.schema';
import { ModuleAccessCreateManyUserInputEnvelopeObjectSchema } from './ModuleAccessCreateManyUserInputEnvelope.schema';
import { ModuleAccessWhereUniqueInputObjectSchema } from './ModuleAccessWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleAccessCreateNestedManyWithoutUserInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ModuleAccessCreateWithoutUserInputObjectSchema),
        z.lazy(() => ModuleAccessCreateWithoutUserInputObjectSchema).array(),
        z.lazy(() => ModuleAccessUncheckedCreateWithoutUserInputObjectSchema),
        z
          .lazy(() => ModuleAccessUncheckedCreateWithoutUserInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => ModuleAccessCreateOrConnectWithoutUserInputObjectSchema),
        z
          .lazy(() => ModuleAccessCreateOrConnectWithoutUserInputObjectSchema)
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => ModuleAccessCreateManyUserInputEnvelopeObjectSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => ModuleAccessWhereUniqueInputObjectSchema),
        z.lazy(() => ModuleAccessWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const ModuleAccessCreateNestedManyWithoutUserInputObjectSchema = Schema;
