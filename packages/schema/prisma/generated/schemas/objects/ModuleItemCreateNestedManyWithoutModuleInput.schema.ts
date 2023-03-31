import { z } from 'zod';
import { ModuleItemCreateWithoutModuleInputObjectSchema } from './ModuleItemCreateWithoutModuleInput.schema';
import { ModuleItemUncheckedCreateWithoutModuleInputObjectSchema } from './ModuleItemUncheckedCreateWithoutModuleInput.schema';
import { ModuleItemCreateOrConnectWithoutModuleInputObjectSchema } from './ModuleItemCreateOrConnectWithoutModuleInput.schema';
import { ModuleItemCreateManyModuleInputEnvelopeObjectSchema } from './ModuleItemCreateManyModuleInputEnvelope.schema';
import { ModuleItemWhereUniqueInputObjectSchema } from './ModuleItemWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemCreateNestedManyWithoutModuleInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ModuleItemCreateWithoutModuleInputObjectSchema),
        z.lazy(() => ModuleItemCreateWithoutModuleInputObjectSchema).array(),
        z.lazy(() => ModuleItemUncheckedCreateWithoutModuleInputObjectSchema),
        z
          .lazy(() => ModuleItemUncheckedCreateWithoutModuleInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => ModuleItemCreateOrConnectWithoutModuleInputObjectSchema),
        z
          .lazy(() => ModuleItemCreateOrConnectWithoutModuleInputObjectSchema)
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => ModuleItemCreateManyModuleInputEnvelopeObjectSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => ModuleItemWhereUniqueInputObjectSchema),
        z.lazy(() => ModuleItemWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const ModuleItemCreateNestedManyWithoutModuleInputObjectSchema = Schema;
