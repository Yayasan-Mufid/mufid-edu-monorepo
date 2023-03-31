import { z } from 'zod';
import { RoleCreateWithoutRole_permissionsInputObjectSchema } from './RoleCreateWithoutRole_permissionsInput.schema';
import { RoleUncheckedCreateWithoutRole_permissionsInputObjectSchema } from './RoleUncheckedCreateWithoutRole_permissionsInput.schema';
import { RoleCreateOrConnectWithoutRole_permissionsInputObjectSchema } from './RoleCreateOrConnectWithoutRole_permissionsInput.schema';
import { RoleWhereUniqueInputObjectSchema } from './RoleWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleCreateNestedOneWithoutRole_permissionsInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => RoleCreateWithoutRole_permissionsInputObjectSchema),
          z.lazy(
            () => RoleUncheckedCreateWithoutRole_permissionsInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => RoleCreateOrConnectWithoutRole_permissionsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => RoleWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const RoleCreateNestedOneWithoutRole_permissionsInputObjectSchema =
  Schema;
