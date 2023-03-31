import { z } from 'zod';
import { ModuleAdminCreateWithoutModuleInputObjectSchema } from './ModuleAdminCreateWithoutModuleInput.schema';
import { ModuleAdminUncheckedCreateWithoutModuleInputObjectSchema } from './ModuleAdminUncheckedCreateWithoutModuleInput.schema';
import { ModuleAdminCreateOrConnectWithoutModuleInputObjectSchema } from './ModuleAdminCreateOrConnectWithoutModuleInput.schema';
import { ModuleAdminCreateManyModuleInputEnvelopeObjectSchema } from './ModuleAdminCreateManyModuleInputEnvelope.schema';
import { ModuleAdminWhereUniqueInputObjectSchema } from './ModuleAdminWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleAdminUncheckedCreateNestedManyWithoutModuleInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ModuleAdminCreateWithoutModuleInputObjectSchema),
          z.lazy(() => ModuleAdminCreateWithoutModuleInputObjectSchema).array(),
          z.lazy(
            () => ModuleAdminUncheckedCreateWithoutModuleInputObjectSchema,
          ),
          z
            .lazy(
              () => ModuleAdminUncheckedCreateWithoutModuleInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => ModuleAdminCreateOrConnectWithoutModuleInputObjectSchema,
          ),
          z
            .lazy(
              () => ModuleAdminCreateOrConnectWithoutModuleInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => ModuleAdminCreateManyModuleInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => ModuleAdminWhereUniqueInputObjectSchema),
          z.lazy(() => ModuleAdminWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ModuleAdminUncheckedCreateNestedManyWithoutModuleInputObjectSchema =
  Schema;
