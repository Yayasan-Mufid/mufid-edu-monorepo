import { z } from 'zod';
import { ModuleCreateWithoutAdminsInputObjectSchema } from './ModuleCreateWithoutAdminsInput.schema';
import { ModuleUncheckedCreateWithoutAdminsInputObjectSchema } from './ModuleUncheckedCreateWithoutAdminsInput.schema';
import { ModuleCreateOrConnectWithoutAdminsInputObjectSchema } from './ModuleCreateOrConnectWithoutAdminsInput.schema';
import { ModuleWhereUniqueInputObjectSchema } from './ModuleWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleCreateNestedOneWithoutAdminsInput> = z
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
    connect: z.lazy(() => ModuleWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const ModuleCreateNestedOneWithoutAdminsInputObjectSchema = Schema;
