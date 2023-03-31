import { z } from 'zod';
import { ModuleCreateNestedOneWithoutAdminsInputObjectSchema } from './ModuleCreateNestedOneWithoutAdminsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleAdminCreateWithoutUserInput> = z
  .object({
    id: z.string().optional(),
    module: z.lazy(() => ModuleCreateNestedOneWithoutAdminsInputObjectSchema),
    assigned_at: z.date().optional(),
  })
  .strict();

export const ModuleAdminCreateWithoutUserInputObjectSchema = Schema;
