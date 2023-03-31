import { z } from 'zod';
import { RoleUpdateWithoutUser_rolesInputObjectSchema } from './RoleUpdateWithoutUser_rolesInput.schema';
import { RoleUncheckedUpdateWithoutUser_rolesInputObjectSchema } from './RoleUncheckedUpdateWithoutUser_rolesInput.schema';
import { RoleCreateWithoutUser_rolesInputObjectSchema } from './RoleCreateWithoutUser_rolesInput.schema';
import { RoleUncheckedCreateWithoutUser_rolesInputObjectSchema } from './RoleUncheckedCreateWithoutUser_rolesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleUpsertWithoutUser_rolesInput> = z
  .object({
    update: z.union([
      z.lazy(() => RoleUpdateWithoutUser_rolesInputObjectSchema),
      z.lazy(() => RoleUncheckedUpdateWithoutUser_rolesInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => RoleCreateWithoutUser_rolesInputObjectSchema),
      z.lazy(() => RoleUncheckedCreateWithoutUser_rolesInputObjectSchema),
    ]),
  })
  .strict();

export const RoleUpsertWithoutUser_rolesInputObjectSchema = Schema;
