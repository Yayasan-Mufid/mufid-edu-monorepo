import { z } from 'zod';
import { ModuleCreateNestedOneWithoutStudentsInputObjectSchema } from './ModuleCreateNestedOneWithoutStudentsInput.schema';
import { UserCreateNestedOneWithoutAccessible_modulesInputObjectSchema } from './UserCreateNestedOneWithoutAccessible_modulesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleAccessCreateInput> = z
  .object({
    id: z.string().optional(),
    granted_on: z.date().optional(),
    module: z.lazy(() => ModuleCreateNestedOneWithoutStudentsInputObjectSchema),
    user: z.lazy(
      () => UserCreateNestedOneWithoutAccessible_modulesInputObjectSchema,
    ),
  })
  .strict();

export const ModuleAccessCreateInputObjectSchema = Schema;
