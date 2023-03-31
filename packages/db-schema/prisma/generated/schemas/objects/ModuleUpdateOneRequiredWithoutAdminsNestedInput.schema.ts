import { z } from 'zod';
import { ModuleCreateWithoutAdminsInputObjectSchema } from './ModuleCreateWithoutAdminsInput.schema';
import { ModuleUncheckedCreateWithoutAdminsInputObjectSchema } from './ModuleUncheckedCreateWithoutAdminsInput.schema';
import { ModuleCreateOrConnectWithoutAdminsInputObjectSchema } from './ModuleCreateOrConnectWithoutAdminsInput.schema';
import { ModuleUpsertWithoutAdminsInputObjectSchema } from './ModuleUpsertWithoutAdminsInput.schema';
import { ModuleWhereUniqueInputObjectSchema } from './ModuleWhereUniqueInput.schema';
import { ModuleUpdateWithoutAdminsInputObjectSchema } from './ModuleUpdateWithoutAdminsInput.schema';
import { ModuleUncheckedUpdateWithoutAdminsInputObjectSchema } from './ModuleUncheckedUpdateWithoutAdminsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleUpdateOneRequiredWithoutAdminsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ModuleCreateWithoutAdminsInputObjectSchema),
          z.lazy(() => ModuleUncheckedCreateWithoutAdminsInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => ModuleCreateOrConnectWithoutAdminsInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => ModuleUpsertWithoutAdminsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => ModuleWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => ModuleUpdateWithoutAdminsInputObjectSchema),
          z.lazy(() => ModuleUncheckedUpdateWithoutAdminsInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const ModuleUpdateOneRequiredWithoutAdminsNestedInputObjectSchema =
  Schema;
