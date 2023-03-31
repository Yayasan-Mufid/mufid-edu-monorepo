import { z } from 'zod';
import { ModuleCreateWithoutExamsInputObjectSchema } from './ModuleCreateWithoutExamsInput.schema';
import { ModuleUncheckedCreateWithoutExamsInputObjectSchema } from './ModuleUncheckedCreateWithoutExamsInput.schema';
import { ModuleCreateOrConnectWithoutExamsInputObjectSchema } from './ModuleCreateOrConnectWithoutExamsInput.schema';
import { ModuleUpsertWithoutExamsInputObjectSchema } from './ModuleUpsertWithoutExamsInput.schema';
import { ModuleWhereUniqueInputObjectSchema } from './ModuleWhereUniqueInput.schema';
import { ModuleUpdateWithoutExamsInputObjectSchema } from './ModuleUpdateWithoutExamsInput.schema';
import { ModuleUncheckedUpdateWithoutExamsInputObjectSchema } from './ModuleUncheckedUpdateWithoutExamsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleUpdateOneRequiredWithoutExamsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ModuleCreateWithoutExamsInputObjectSchema),
          z.lazy(() => ModuleUncheckedCreateWithoutExamsInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => ModuleCreateOrConnectWithoutExamsInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => ModuleUpsertWithoutExamsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => ModuleWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => ModuleUpdateWithoutExamsInputObjectSchema),
          z.lazy(() => ModuleUncheckedUpdateWithoutExamsInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const ModuleUpdateOneRequiredWithoutExamsNestedInputObjectSchema =
  Schema;
