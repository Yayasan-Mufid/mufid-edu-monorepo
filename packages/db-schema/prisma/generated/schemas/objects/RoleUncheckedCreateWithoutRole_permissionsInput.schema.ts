import { z } from 'zod';
import { UserRoleUncheckedCreateNestedManyWithoutRoleInputObjectSchema } from './UserRoleUncheckedCreateNestedManyWithoutRoleInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleUncheckedCreateWithoutRole_permissionsInput> =
  z
    .object({
      role: z.string(),
      description: z.string().optional().nullable(),
      user_roles: z
        .lazy(
          () => UserRoleUncheckedCreateNestedManyWithoutRoleInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const RoleUncheckedCreateWithoutRole_permissionsInputObjectSchema =
  Schema;
