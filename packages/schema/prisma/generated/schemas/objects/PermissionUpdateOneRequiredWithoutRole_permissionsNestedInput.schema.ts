import { z } from 'zod';
import { PermissionCreateWithoutRole_permissionsInputObjectSchema } from './PermissionCreateWithoutRole_permissionsInput.schema';
import { PermissionUncheckedCreateWithoutRole_permissionsInputObjectSchema } from './PermissionUncheckedCreateWithoutRole_permissionsInput.schema';
import { PermissionCreateOrConnectWithoutRole_permissionsInputObjectSchema } from './PermissionCreateOrConnectWithoutRole_permissionsInput.schema';
import { PermissionUpsertWithoutRole_permissionsInputObjectSchema } from './PermissionUpsertWithoutRole_permissionsInput.schema';
import { PermissionWhereUniqueInputObjectSchema } from './PermissionWhereUniqueInput.schema';
import { PermissionUpdateWithoutRole_permissionsInputObjectSchema } from './PermissionUpdateWithoutRole_permissionsInput.schema';
import { PermissionUncheckedUpdateWithoutRole_permissionsInputObjectSchema } from './PermissionUncheckedUpdateWithoutRole_permissionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PermissionUpdateOneRequiredWithoutRole_permissionsNestedInput> =
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
      upsert: z
        .lazy(() => PermissionUpsertWithoutRole_permissionsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => PermissionWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(
            () => PermissionUpdateWithoutRole_permissionsInputObjectSchema,
          ),
          z.lazy(
            () =>
              PermissionUncheckedUpdateWithoutRole_permissionsInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const PermissionUpdateOneRequiredWithoutRole_permissionsNestedInputObjectSchema =
  Schema;
