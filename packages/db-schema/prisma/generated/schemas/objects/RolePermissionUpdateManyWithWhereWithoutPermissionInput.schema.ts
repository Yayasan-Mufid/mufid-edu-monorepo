import { z } from 'zod';
import { RolePermissionScalarWhereInputObjectSchema } from './RolePermissionScalarWhereInput.schema';
import { RolePermissionUpdateManyMutationInputObjectSchema } from './RolePermissionUpdateManyMutationInput.schema';
import { RolePermissionUncheckedUpdateManyWithoutRole_permissionsInputObjectSchema } from './RolePermissionUncheckedUpdateManyWithoutRole_permissionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RolePermissionUpdateManyWithWhereWithoutPermissionInput> =
  z
    .object({
      where: z.lazy(() => RolePermissionScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => RolePermissionUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            RolePermissionUncheckedUpdateManyWithoutRole_permissionsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const RolePermissionUpdateManyWithWhereWithoutPermissionInputObjectSchema =
  Schema;
