import { z } from 'zod';
import { UserCreateNestedOneWithoutManaged_modulesInputObjectSchema } from './UserCreateNestedOneWithoutManaged_modulesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleAdminCreateWithoutModuleInput> = z
  .object({
    id: z.string().optional(),
    user: z.lazy(
      () => UserCreateNestedOneWithoutManaged_modulesInputObjectSchema,
    ),
    assigned_at: z.date().optional(),
  })
  .strict();

export const ModuleAdminCreateWithoutModuleInputObjectSchema = Schema;
