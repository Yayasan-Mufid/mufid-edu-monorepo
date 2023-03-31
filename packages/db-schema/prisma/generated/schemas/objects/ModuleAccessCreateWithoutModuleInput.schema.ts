import { z } from 'zod';
import { UserCreateNestedOneWithoutAccessible_modulesInputObjectSchema } from './UserCreateNestedOneWithoutAccessible_modulesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleAccessCreateWithoutModuleInput> = z
  .object({
    id: z.string().optional(),
    granted_on: z.date().optional(),
    user: z.lazy(
      () => UserCreateNestedOneWithoutAccessible_modulesInputObjectSchema,
    ),
  })
  .strict();

export const ModuleAccessCreateWithoutModuleInputObjectSchema = Schema;
