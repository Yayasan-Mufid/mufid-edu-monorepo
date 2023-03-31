import { z } from 'zod';
import { ModuleCreateWithoutStudy_groupsInputObjectSchema } from './ModuleCreateWithoutStudy_groupsInput.schema';
import { ModuleUncheckedCreateWithoutStudy_groupsInputObjectSchema } from './ModuleUncheckedCreateWithoutStudy_groupsInput.schema';
import { ModuleCreateOrConnectWithoutStudy_groupsInputObjectSchema } from './ModuleCreateOrConnectWithoutStudy_groupsInput.schema';
import { ModuleWhereUniqueInputObjectSchema } from './ModuleWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleCreateNestedOneWithoutStudy_groupsInput> =
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
      connect: z.lazy(() => ModuleWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const ModuleCreateNestedOneWithoutStudy_groupsInputObjectSchema = Schema;
