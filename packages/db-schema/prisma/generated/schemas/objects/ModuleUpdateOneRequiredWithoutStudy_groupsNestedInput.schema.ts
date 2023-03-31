import { z } from 'zod';
import { ModuleCreateWithoutStudy_groupsInputObjectSchema } from './ModuleCreateWithoutStudy_groupsInput.schema';
import { ModuleUncheckedCreateWithoutStudy_groupsInputObjectSchema } from './ModuleUncheckedCreateWithoutStudy_groupsInput.schema';
import { ModuleCreateOrConnectWithoutStudy_groupsInputObjectSchema } from './ModuleCreateOrConnectWithoutStudy_groupsInput.schema';
import { ModuleUpsertWithoutStudy_groupsInputObjectSchema } from './ModuleUpsertWithoutStudy_groupsInput.schema';
import { ModuleWhereUniqueInputObjectSchema } from './ModuleWhereUniqueInput.schema';
import { ModuleUpdateWithoutStudy_groupsInputObjectSchema } from './ModuleUpdateWithoutStudy_groupsInput.schema';
import { ModuleUncheckedUpdateWithoutStudy_groupsInputObjectSchema } from './ModuleUncheckedUpdateWithoutStudy_groupsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleUpdateOneRequiredWithoutStudy_groupsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ModuleCreateWithoutStudy_groupsInputObjectSchema),
          z.lazy(
            () => ModuleUncheckedCreateWithoutStudy_groupsInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => ModuleCreateOrConnectWithoutStudy_groupsInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => ModuleUpsertWithoutStudy_groupsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => ModuleWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => ModuleUpdateWithoutStudy_groupsInputObjectSchema),
          z.lazy(
            () => ModuleUncheckedUpdateWithoutStudy_groupsInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const ModuleUpdateOneRequiredWithoutStudy_groupsNestedInputObjectSchema =
  Schema;
