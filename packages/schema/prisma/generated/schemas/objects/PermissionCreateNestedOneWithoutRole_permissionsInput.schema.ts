import { z } from 'zod';
import { PermissionCreateWithoutRole_permissionsInputObjectSchema } from './PermissionCreateWithoutRole_permissionsInput.schema';
import { PermissionUncheckedCreateWithoutRole_permissionsInputObjectSchema } from './PermissionUncheckedCreateWithoutRole_permissionsInput.schema';
import { PermissionCreateOrConnectWithoutRole_permissionsInputObjectSchema } from './PermissionCreateOrConnectWithoutRole_permissionsInput.schema';
import { PermissionWhereUniqueInputObjectSchema } from './PermissionWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PermissionCreateNestedOneWithoutRole_permissionsInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () => PermissionCreateWithoutRole_permissionsInputObjectSchema,
          ),
          z.lazy(
            () =>
              PermissionUncheckedCreateWithoutRole_permissionsInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () =>
            PermissionCreateOrConnectWithoutRole_permissionsInputObjectSchema,
        )
        .optional(),
      connect: z.lazy(() => PermissionWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const PermissionCreateNestedOneWithoutRole_permissionsInputObjectSchema =
  Schema;
