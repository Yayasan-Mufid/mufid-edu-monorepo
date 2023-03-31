import { z } from 'zod';
import { ModuleCreateNestedOneWithoutAdminsInputObjectSchema } from './ModuleCreateNestedOneWithoutAdminsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleAdminCreateWithoutUserInput> = z
  .object({
    id: z.string().optional(),
    assigned_at: z.date().optional(),
    module: z.lazy(() => ModuleCreateNestedOneWithoutAdminsInputObjectSchema),
  })
  .strict();

export const ModuleAdminCreateWithoutUserInputObjectSchema = Schema;
