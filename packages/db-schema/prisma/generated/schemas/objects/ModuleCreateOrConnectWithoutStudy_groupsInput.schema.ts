import { z } from 'zod';
import { ModuleWhereUniqueInputObjectSchema } from './ModuleWhereUniqueInput.schema';
import { ModuleCreateWithoutStudy_groupsInputObjectSchema } from './ModuleCreateWithoutStudy_groupsInput.schema';
import { ModuleUncheckedCreateWithoutStudy_groupsInputObjectSchema } from './ModuleUncheckedCreateWithoutStudy_groupsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleCreateOrConnectWithoutStudy_groupsInput> =
  z
    .object({
      where: z.lazy(() => ModuleWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => ModuleCreateWithoutStudy_groupsInputObjectSchema),
        z.lazy(() => ModuleUncheckedCreateWithoutStudy_groupsInputObjectSchema),
      ]),
    })
    .strict();

export const ModuleCreateOrConnectWithoutStudy_groupsInputObjectSchema = Schema;
