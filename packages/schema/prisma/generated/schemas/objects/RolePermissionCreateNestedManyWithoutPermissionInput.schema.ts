import { z } from 'zod';
import { RolePermissionCreateWithoutPermissionInputObjectSchema } from './RolePermissionCreateWithoutPermissionInput.schema';
import { RolePermissionUncheckedCreateWithoutPermissionInputObjectSchema } from './RolePermissionUncheckedCreateWithoutPermissionInput.schema';
import { RolePermissionCreateOrConnectWithoutPermissionInputObjectSchema } from './RolePermissionCreateOrConnectWithoutPermissionInput.schema';
import { RolePermissionCreateManyPermissionInputEnvelopeObjectSchema } from './RolePermissionCreateManyPermissionInputEnvelope.schema';
import { RolePermissionWhereUniqueInputObjectSchema } from './RolePermissionWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RolePermissionCreateNestedManyWithoutPermissionInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => RolePermissionCreateWithoutPermissionInputObjectSchema),
          z
            .lazy(() => RolePermissionCreateWithoutPermissionInputObjectSchema)
            .array(),
          z.lazy(
            () =>
              RolePermissionUncheckedCreateWithoutPermissionInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                RolePermissionUncheckedCreateWithoutPermissionInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              RolePermissionCreateOrConnectWithoutPermissionInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                RolePermissionCreateOrConnectWithoutPermissionInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => RolePermissionCreateManyPermissionInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => RolePermissionWhereUniqueInputObjectSchema),
          z.lazy(() => RolePermissionWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const RolePermissionCreateNestedManyWithoutPermissionInputObjectSchema =
  Schema;
