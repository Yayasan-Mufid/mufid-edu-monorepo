import { z } from 'zod';
import { UserRoleScalarWhereInputObjectSchema } from './UserRoleScalarWhereInput.schema';
import { UserRoleUpdateManyMutationInputObjectSchema } from './UserRoleUpdateManyMutationInput.schema';
import { UserRoleUncheckedUpdateManyWithoutUser_rolesInputObjectSchema } from './UserRoleUncheckedUpdateManyWithoutUser_rolesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserRoleUpdateManyWithWhereWithoutRoleInput> = z
  .object({
    where: z.lazy(() => UserRoleScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => UserRoleUpdateManyMutationInputObjectSchema),
      z.lazy(
        () => UserRoleUncheckedUpdateManyWithoutUser_rolesInputObjectSchema,
      ),
    ]),
  })
  .strict();

export const UserRoleUpdateManyWithWhereWithoutRoleInputObjectSchema = Schema;
