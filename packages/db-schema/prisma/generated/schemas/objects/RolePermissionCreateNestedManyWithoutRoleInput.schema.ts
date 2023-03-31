import { z } from 'zod';
import { RolePermissionCreateWithoutRoleInputObjectSchema } from './RolePermissionCreateWithoutRoleInput.schema';
import { RolePermissionUncheckedCreateWithoutRoleInputObjectSchema } from './RolePermissionUncheckedCreateWithoutRoleInput.schema';
import { RolePermissionCreateOrConnectWithoutRoleInputObjectSchema } from './RolePermissionCreateOrConnectWithoutRoleInput.schema';
import { RolePermissionCreateManyRoleInputEnvelopeObjectSchema } from './RolePermissionCreateManyRoleInputEnvelope.schema';
import { RolePermissionWhereUniqueInputObjectSchema } from './RolePermissionWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RolePermissionCreateNestedManyWithoutRoleInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => RolePermissionCreateWithoutRoleInputObjectSchema),
          z
            .lazy(() => RolePermissionCreateWithoutRoleInputObjectSchema)
            .array(),
          z.lazy(
            () => RolePermissionUncheckedCreateWithoutRoleInputObjectSchema,
          ),
          z
            .lazy(
              () => RolePermissionUncheckedCreateWithoutRoleInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => RolePermissionCreateOrConnectWithoutRoleInputObjectSchema,
          ),
          z
            .lazy(
              () => RolePermissionCreateOrConnectWithoutRoleInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => RolePermissionCreateManyRoleInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => RolePermissionWhereUniqueInputObjectSchema),
          z.lazy(() => RolePermissionWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const RolePermissionCreateNestedManyWithoutRoleInputObjectSchema =
  Schema;
