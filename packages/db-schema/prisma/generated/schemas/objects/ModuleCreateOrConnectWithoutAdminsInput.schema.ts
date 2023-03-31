import { z } from 'zod';
import { ModuleWhereUniqueInputObjectSchema } from './ModuleWhereUniqueInput.schema';
import { ModuleCreateWithoutAdminsInputObjectSchema } from './ModuleCreateWithoutAdminsInput.schema';
import { ModuleUncheckedCreateWithoutAdminsInputObjectSchema } from './ModuleUncheckedCreateWithoutAdminsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleCreateOrConnectWithoutAdminsInput> = z
  .object({
    where: z.lazy(() => ModuleWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ModuleCreateWithoutAdminsInputObjectSchema),
      z.lazy(() => ModuleUncheckedCreateWithoutAdminsInputObjectSchema),
    ]),
  })
  .strict();

export const ModuleCreateOrConnectWithoutAdminsInputObjectSchema = Schema;
