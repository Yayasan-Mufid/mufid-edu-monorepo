import { z } from 'zod';
import { PermissionUpdateWithoutRole_permissionsInputObjectSchema } from './PermissionUpdateWithoutRole_permissionsInput.schema';
import { PermissionUncheckedUpdateWithoutRole_permissionsInputObjectSchema } from './PermissionUncheckedUpdateWithoutRole_permissionsInput.schema';
import { PermissionCreateWithoutRole_permissionsInputObjectSchema } from './PermissionCreateWithoutRole_permissionsInput.schema';
import { PermissionUncheckedCreateWithoutRole_permissionsInputObjectSchema } from './PermissionUncheckedCreateWithoutRole_permissionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PermissionUpsertWithoutRole_permissionsInput> = z
  .object({
    update: z.union([
      z.lazy(() => PermissionUpdateWithoutRole_permissionsInputObjectSchema),
      z.lazy(
        () => PermissionUncheckedUpdateWithoutRole_permissionsInputObjectSchema,
      ),
    ]),
    create: z.union([
      z.lazy(() => PermissionCreateWithoutRole_permissionsInputObjectSchema),
      z.lazy(
        () => PermissionUncheckedCreateWithoutRole_permissionsInputObjectSchema,
      ),
    ]),
  })
  .strict();

export const PermissionUpsertWithoutRole_permissionsInputObjectSchema = Schema;
