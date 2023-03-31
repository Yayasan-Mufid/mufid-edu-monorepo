import { z } from 'zod';
import { RoleUpdateWithoutRole_permissionsInputObjectSchema } from './RoleUpdateWithoutRole_permissionsInput.schema';
import { RoleUncheckedUpdateWithoutRole_permissionsInputObjectSchema } from './RoleUncheckedUpdateWithoutRole_permissionsInput.schema';
import { RoleCreateWithoutRole_permissionsInputObjectSchema } from './RoleCreateWithoutRole_permissionsInput.schema';
import { RoleUncheckedCreateWithoutRole_permissionsInputObjectSchema } from './RoleUncheckedCreateWithoutRole_permissionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleUpsertWithoutRole_permissionsInput> = z
  .object({
    update: z.union([
      z.lazy(() => RoleUpdateWithoutRole_permissionsInputObjectSchema),
      z.lazy(() => RoleUncheckedUpdateWithoutRole_permissionsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => RoleCreateWithoutRole_permissionsInputObjectSchema),
      z.lazy(() => RoleUncheckedCreateWithoutRole_permissionsInputObjectSchema),
    ]),
  })
  .strict();

export const RoleUpsertWithoutRole_permissionsInputObjectSchema = Schema;
