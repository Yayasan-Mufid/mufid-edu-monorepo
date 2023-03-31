import { z } from 'zod';
import { UserCreateNestedOneWithoutRolesInputObjectSchema } from './UserCreateNestedOneWithoutRolesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserRoleCreateWithoutRoleInput> = z
  .object({
    id: z.string().optional(),
    user: z.lazy(() => UserCreateNestedOneWithoutRolesInputObjectSchema),
  })
  .strict();

export const UserRoleCreateWithoutRoleInputObjectSchema = Schema;
