import { z } from 'zod';
import { PermissionWhereUniqueInputObjectSchema } from './PermissionWhereUniqueInput.schema';
import { PermissionCreateWithoutRole_permissionsInputObjectSchema } from './PermissionCreateWithoutRole_permissionsInput.schema';
import { PermissionUncheckedCreateWithoutRole_permissionsInputObjectSchema } from './PermissionUncheckedCreateWithoutRole_permissionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PermissionCreateOrConnectWithoutRole_permissionsInput> =
  z
    .object({
      where: z.lazy(() => PermissionWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => PermissionCreateWithoutRole_permissionsInputObjectSchema),
        z.lazy(
          () =>
            PermissionUncheckedCreateWithoutRole_permissionsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const PermissionCreateOrConnectWithoutRole_permissionsInputObjectSchema =
  Schema;
