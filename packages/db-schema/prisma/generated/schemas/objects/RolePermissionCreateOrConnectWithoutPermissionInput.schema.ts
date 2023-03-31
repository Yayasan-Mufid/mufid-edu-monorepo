import { z } from 'zod';
import { RolePermissionWhereUniqueInputObjectSchema } from './RolePermissionWhereUniqueInput.schema';
import { RolePermissionCreateWithoutPermissionInputObjectSchema } from './RolePermissionCreateWithoutPermissionInput.schema';
import { RolePermissionUncheckedCreateWithoutPermissionInputObjectSchema } from './RolePermissionUncheckedCreateWithoutPermissionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RolePermissionCreateOrConnectWithoutPermissionInput> =
  z
    .object({
      where: z.lazy(() => RolePermissionWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => RolePermissionCreateWithoutPermissionInputObjectSchema),
        z.lazy(
          () => RolePermissionUncheckedCreateWithoutPermissionInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const RolePermissionCreateOrConnectWithoutPermissionInputObjectSchema =
  Schema;
