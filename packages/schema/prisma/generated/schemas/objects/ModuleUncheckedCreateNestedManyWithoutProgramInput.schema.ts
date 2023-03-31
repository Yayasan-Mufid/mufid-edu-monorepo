import { z } from 'zod';
import { ModuleCreateWithoutProgramInputObjectSchema } from './ModuleCreateWithoutProgramInput.schema';
import { ModuleUncheckedCreateWithoutProgramInputObjectSchema } from './ModuleUncheckedCreateWithoutProgramInput.schema';
import { ModuleCreateOrConnectWithoutProgramInputObjectSchema } from './ModuleCreateOrConnectWithoutProgramInput.schema';
import { ModuleCreateManyProgramInputEnvelopeObjectSchema } from './ModuleCreateManyProgramInputEnvelope.schema';
import { ModuleWhereUniqueInputObjectSchema } from './ModuleWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleUncheckedCreateNestedManyWithoutProgramInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ModuleCreateWithoutProgramInputObjectSchema),
          z.lazy(() => ModuleCreateWithoutProgramInputObjectSchema).array(),
          z.lazy(() => ModuleUncheckedCreateWithoutProgramInputObjectSchema),
          z
            .lazy(() => ModuleUncheckedCreateWithoutProgramInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => ModuleCreateOrConnectWithoutProgramInputObjectSchema),
          z
            .lazy(() => ModuleCreateOrConnectWithoutProgramInputObjectSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => ModuleCreateManyProgramInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => ModuleWhereUniqueInputObjectSchema),
          z.lazy(() => ModuleWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ModuleUncheckedCreateNestedManyWithoutProgramInputObjectSchema =
  Schema;
