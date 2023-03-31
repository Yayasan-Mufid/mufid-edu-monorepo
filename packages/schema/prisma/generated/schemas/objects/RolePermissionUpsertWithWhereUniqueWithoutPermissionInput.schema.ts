import { z } from 'zod';
import { RolePermissionWhereUniqueInputObjectSchema } from './RolePermissionWhereUniqueInput.schema';
import { RolePermissionUpdateWithoutPermissionInputObjectSchema } from './RolePermissionUpdateWithoutPermissionInput.schema';
import { RolePermissionUncheckedUpdateWithoutPermissionInputObjectSchema } from './RolePermissionUncheckedUpdateWithoutPermissionInput.schema';
import { RolePermissionCreateWithoutPermissionInputObjectSchema } from './RolePermissionCreateWithoutPermissionInput.schema';
import { RolePermissionUncheckedCreateWithoutPermissionInputObjectSchema } from './RolePermissionUncheckedCreateWithoutPermissionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RolePermissionUpsertWithWhereUniqueWithoutPermissionInput> =
  z
    .object({
      where: z.lazy(() => RolePermissionWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => RolePermissionUpdateWithoutPermissionInputObjectSchema),
        z.lazy(
          () => RolePermissionUncheckedUpdateWithoutPermissionInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => RolePermissionCreateWithoutPermissionInputObjectSchema),
        z.lazy(
          () => RolePermissionUncheckedCreateWithoutPermissionInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const RolePermissionUpsertWithWhereUniqueWithoutPermissionInputObjectSchema =
  Schema;
