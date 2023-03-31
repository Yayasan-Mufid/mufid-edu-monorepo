import { z } from 'zod';
import { ModuleUpdateWithoutAdminsInputObjectSchema } from './ModuleUpdateWithoutAdminsInput.schema';
import { ModuleUncheckedUpdateWithoutAdminsInputObjectSchema } from './ModuleUncheckedUpdateWithoutAdminsInput.schema';
import { ModuleCreateWithoutAdminsInputObjectSchema } from './ModuleCreateWithoutAdminsInput.schema';
import { ModuleUncheckedCreateWithoutAdminsInputObjectSchema } from './ModuleUncheckedCreateWithoutAdminsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleUpsertWithoutAdminsInput> = z
  .object({
    update: z.union([
      z.lazy(() => ModuleUpdateWithoutAdminsInputObjectSchema),
      z.lazy(() => ModuleUncheckedUpdateWithoutAdminsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ModuleCreateWithoutAdminsInputObjectSchema),
      z.lazy(() => ModuleUncheckedCreateWithoutAdminsInputObjectSchema),
    ]),
  })
  .strict();

export const ModuleUpsertWithoutAdminsInputObjectSchema = Schema;
