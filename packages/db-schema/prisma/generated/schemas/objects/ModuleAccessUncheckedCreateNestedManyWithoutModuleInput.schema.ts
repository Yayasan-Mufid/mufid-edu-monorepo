import { z } from 'zod';
import { ModuleAccessCreateWithoutModuleInputObjectSchema } from './ModuleAccessCreateWithoutModuleInput.schema';
import { ModuleAccessUncheckedCreateWithoutModuleInputObjectSchema } from './ModuleAccessUncheckedCreateWithoutModuleInput.schema';
import { ModuleAccessCreateOrConnectWithoutModuleInputObjectSchema } from './ModuleAccessCreateOrConnectWithoutModuleInput.schema';
import { ModuleAccessCreateManyModuleInputEnvelopeObjectSchema } from './ModuleAccessCreateManyModuleInputEnvelope.schema';
import { ModuleAccessWhereUniqueInputObjectSchema } from './ModuleAccessWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleAccessUncheckedCreateNestedManyWithoutModuleInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ModuleAccessCreateWithoutModuleInputObjectSchema),
          z
            .lazy(() => ModuleAccessCreateWithoutModuleInputObjectSchema)
            .array(),
          z.lazy(
            () => ModuleAccessUncheckedCreateWithoutModuleInputObjectSchema,
          ),
          z
            .lazy(
              () => ModuleAccessUncheckedCreateWithoutModuleInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => ModuleAccessCreateOrConnectWithoutModuleInputObjectSchema,
          ),
          z
            .lazy(
              () => ModuleAccessCreateOrConnectWithoutModuleInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => ModuleAccessCreateManyModuleInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => ModuleAccessWhereUniqueInputObjectSchema),
          z.lazy(() => ModuleAccessWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ModuleAccessUncheckedCreateNestedManyWithoutModuleInputObjectSchema =
  Schema;
