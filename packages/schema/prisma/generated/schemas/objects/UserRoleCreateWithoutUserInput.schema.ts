import { z } from 'zod';
import { RoleCreateNestedOneWithoutUser_rolesInputObjectSchema } from './RoleCreateNestedOneWithoutUser_rolesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserRoleCreateWithoutUserInput> = z
  .object({
    id: z.string().optional(),
    role: z.lazy(() => RoleCreateNestedOneWithoutUser_rolesInputObjectSchema),
  })
  .strict();

export const UserRoleCreateWithoutUserInputObjectSchema = Schema;
