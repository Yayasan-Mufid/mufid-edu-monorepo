import { z } from 'zod';
import { RolePermissionCreateWithoutRoleInputObjectSchema } from './RolePermissionCreateWithoutRoleInput.schema';
import { RolePermissionUncheckedCreateWithoutRoleInputObjectSchema } from './RolePermissionUncheckedCreateWithoutRoleInput.schema';
import { RolePermissionCreateOrConnectWithoutRoleInputObjectSchema } from './RolePermissionCreateOrConnectWithoutRoleInput.schema';
import { RolePermissionUpsertWithWhereUniqueWithoutRoleInputObjectSchema } from './RolePermissionUpsertWithWhereUniqueWithoutRoleInput.schema';
import { RolePermissionCreateManyRoleInputEnvelopeObjectSchema } from './RolePermissionCreateManyRoleInputEnvelope.schema';
import { RolePermissionWhereUniqueInputObjectSchema } from './RolePermissionWhereUniqueInput.schema';
import { RolePermissionUpdateWithWhereUniqueWithoutRoleInputObjectSchema } from './RolePermissionUpdateWithWhereUniqueWithoutRoleInput.schema';
import { RolePermissionUpdateManyWithWhereWithoutRoleInputObjectSchema } from './RolePermissionUpdateManyWithWhereWithoutRoleInput.schema';
import { RolePermissionScalarWhereInputObjectSchema } from './RolePermissionScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RolePermissionUncheckedUpdateManyWithoutRoleNestedInput> =
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
      upsert: z
        .union([
          z.lazy(
            () =>
              RolePermissionUpsertWithWhereUniqueWithoutRoleInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                RolePermissionUpsertWithWhereUniqueWithoutRoleInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => RolePermissionCreateManyRoleInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => RolePermissionWhereUniqueInputObjectSchema),
          z.lazy(() => RolePermissionWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => RolePermissionWhereUniqueInputObjectSchema),
          z.lazy(() => RolePermissionWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => RolePermissionWhereUniqueInputObjectSchema),
          z.lazy(() => RolePermissionWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => RolePermissionWhereUniqueInputObjectSchema),
          z.lazy(() => RolePermissionWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              RolePermissionUpdateWithWhereUniqueWithoutRoleInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                RolePermissionUpdateWithWhereUniqueWithoutRoleInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => RolePermissionUpdateManyWithWhereWithoutRoleInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                RolePermissionUpdateManyWithWhereWithoutRoleInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => RolePermissionScalarWhereInputObjectSchema),
          z.lazy(() => RolePermissionScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const RolePermissionUncheckedUpdateManyWithoutRoleNestedInputObjectSchema =
  Schema;
