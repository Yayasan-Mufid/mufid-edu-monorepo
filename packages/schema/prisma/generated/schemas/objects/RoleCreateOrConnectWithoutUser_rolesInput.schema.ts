import { z } from 'zod';
import { RoleWhereUniqueInputObjectSchema } from './RoleWhereUniqueInput.schema';
import { RoleCreateWithoutUser_rolesInputObjectSchema } from './RoleCreateWithoutUser_rolesInput.schema';
import { RoleUncheckedCreateWithoutUser_rolesInputObjectSchema } from './RoleUncheckedCreateWithoutUser_rolesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleCreateOrConnectWithoutUser_rolesInput> = z
  .object({
    where: z.lazy(() => RoleWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => RoleCreateWithoutUser_rolesInputObjectSchema),
      z.lazy(() => RoleUncheckedCreateWithoutUser_rolesInputObjectSchema),
    ]),
  })
  .strict();

export const RoleCreateOrConnectWithoutUser_rolesInputObjectSchema = Schema;
