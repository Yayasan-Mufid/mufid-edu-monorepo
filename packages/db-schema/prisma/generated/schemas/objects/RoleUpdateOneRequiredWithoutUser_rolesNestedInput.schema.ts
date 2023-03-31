import { z } from 'zod';
import { RoleCreateWithoutUser_rolesInputObjectSchema } from './RoleCreateWithoutUser_rolesInput.schema';
import { RoleUncheckedCreateWithoutUser_rolesInputObjectSchema } from './RoleUncheckedCreateWithoutUser_rolesInput.schema';
import { RoleCreateOrConnectWithoutUser_rolesInputObjectSchema } from './RoleCreateOrConnectWithoutUser_rolesInput.schema';
import { RoleUpsertWithoutUser_rolesInputObjectSchema } from './RoleUpsertWithoutUser_rolesInput.schema';
import { RoleWhereUniqueInputObjectSchema } from './RoleWhereUniqueInput.schema';
import { RoleUpdateWithoutUser_rolesInputObjectSchema } from './RoleUpdateWithoutUser_rolesInput.schema';
import { RoleUncheckedUpdateWithoutUser_rolesInputObjectSchema } from './RoleUncheckedUpdateWithoutUser_rolesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleUpdateOneRequiredWithoutUser_rolesNestedInput> =
  z
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
      upsert: z
        .lazy(() => RoleUpsertWithoutUser_rolesInputObjectSchema)
        .optional(),
      connect: z.lazy(() => RoleWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => RoleUpdateWithoutUser_rolesInputObjectSchema),
          z.lazy(() => RoleUncheckedUpdateWithoutUser_rolesInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const RoleUpdateOneRequiredWithoutUser_rolesNestedInputObjectSchema =
  Schema;
