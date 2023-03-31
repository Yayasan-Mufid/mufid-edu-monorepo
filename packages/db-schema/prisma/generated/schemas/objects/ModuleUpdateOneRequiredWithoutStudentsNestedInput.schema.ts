import { z } from 'zod';
import { ModuleCreateWithoutStudentsInputObjectSchema } from './ModuleCreateWithoutStudentsInput.schema';
import { ModuleUncheckedCreateWithoutStudentsInputObjectSchema } from './ModuleUncheckedCreateWithoutStudentsInput.schema';
import { ModuleCreateOrConnectWithoutStudentsInputObjectSchema } from './ModuleCreateOrConnectWithoutStudentsInput.schema';
import { ModuleUpsertWithoutStudentsInputObjectSchema } from './ModuleUpsertWithoutStudentsInput.schema';
import { ModuleWhereUniqueInputObjectSchema } from './ModuleWhereUniqueInput.schema';
import { ModuleUpdateWithoutStudentsInputObjectSchema } from './ModuleUpdateWithoutStudentsInput.schema';
import { ModuleUncheckedUpdateWithoutStudentsInputObjectSchema } from './ModuleUncheckedUpdateWithoutStudentsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleUpdateOneRequiredWithoutStudentsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ModuleCreateWithoutStudentsInputObjectSchema),
          z.lazy(() => ModuleUncheckedCreateWithoutStudentsInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => ModuleCreateOrConnectWithoutStudentsInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => ModuleUpsertWithoutStudentsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => ModuleWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => ModuleUpdateWithoutStudentsInputObjectSchema),
          z.lazy(() => ModuleUncheckedUpdateWithoutStudentsInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const ModuleUpdateOneRequiredWithoutStudentsNestedInputObjectSchema =
  Schema;
