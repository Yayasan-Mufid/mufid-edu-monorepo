import { z } from 'zod';
import { UserRoleScalarWhereInputObjectSchema } from './UserRoleScalarWhereInput.schema';
import { UserRoleUpdateManyMutationInputObjectSchema } from './UserRoleUpdateManyMutationInput.schema';
import { UserRoleUncheckedUpdateManyWithoutRolesInputObjectSchema } from './UserRoleUncheckedUpdateManyWithoutRolesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserRoleUpdateManyWithWhereWithoutUserInput> = z
  .object({
    where: z.lazy(() => UserRoleScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => UserRoleUpdateManyMutationInputObjectSchema),
      z.lazy(() => UserRoleUncheckedUpdateManyWithoutRolesInputObjectSchema),
    ]),
  })
  .strict();

export const UserRoleUpdateManyWithWhereWithoutUserInputObjectSchema = Schema;
