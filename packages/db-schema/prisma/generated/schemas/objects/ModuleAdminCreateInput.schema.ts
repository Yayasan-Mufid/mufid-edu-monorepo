import { z } from 'zod';
import { ModuleCreateNestedOneWithoutAdminsInputObjectSchema } from './ModuleCreateNestedOneWithoutAdminsInput.schema';
import { UserCreateNestedOneWithoutManaged_modulesInputObjectSchema } from './UserCreateNestedOneWithoutManaged_modulesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleAdminCreateInput> = z
  .object({
    id: z.string().optional(),
    assigned_at: z.date().optional(),
    module: z.lazy(() => ModuleCreateNestedOneWithoutAdminsInputObjectSchema),
    user: z.lazy(
      () => UserCreateNestedOneWithoutManaged_modulesInputObjectSchema,
    ),
  })
  .strict();

export const ModuleAdminCreateInputObjectSchema = Schema;
