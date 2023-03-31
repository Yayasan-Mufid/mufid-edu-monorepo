import { z } from 'zod';
import { RoleCreateWithoutUser_rolesInputObjectSchema } from './RoleCreateWithoutUser_rolesInput.schema';
import { RoleUncheckedCreateWithoutUser_rolesInputObjectSchema } from './RoleUncheckedCreateWithoutUser_rolesInput.schema';
import { RoleCreateOrConnectWithoutUser_rolesInputObjectSchema } from './RoleCreateOrConnectWithoutUser_rolesInput.schema';
import { RoleWhereUniqueInputObjectSchema } from './RoleWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleCreateNestedOneWithoutUser_rolesInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => RoleCreateWithoutUser_rolesInputObjectSchema),
        z.lazy(() => RoleUncheckedCreateWithoutUser_rolesInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => RoleCreateOrConnectWithoutUser_rolesInputObjectSchema)
      .optional(),
    connect: z.lazy(() => RoleWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const RoleCreateNestedOneWithoutUser_rolesInputObjectSchema = Schema;
