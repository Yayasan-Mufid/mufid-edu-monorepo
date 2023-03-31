import { z } from 'zod';
import { RolePermissionWhereUniqueInputObjectSchema } from './RolePermissionWhereUniqueInput.schema';
import { RolePermissionUpdateWithoutPermissionInputObjectSchema } from './RolePermissionUpdateWithoutPermissionInput.schema';
import { RolePermissionUncheckedUpdateWithoutPermissionInputObjectSchema } from './RolePermissionUncheckedUpdateWithoutPermissionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RolePermissionUpdateWithWhereUniqueWithoutPermissionInput> =
  z
    .object({
      where: z.lazy(() => RolePermissionWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => RolePermissionUpdateWithoutPermissionInputObjectSchema),
        z.lazy(
          () => RolePermissionUncheckedUpdateWithoutPermissionInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const RolePermissionUpdateWithWhereUniqueWithoutPermissionInputObjectSchema =
  Schema;
