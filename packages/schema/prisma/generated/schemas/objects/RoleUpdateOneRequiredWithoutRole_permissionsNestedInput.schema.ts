import { z } from 'zod';
import { RoleCreateWithoutRole_permissionsInputObjectSchema } from './RoleCreateWithoutRole_permissionsInput.schema';
import { RoleUncheckedCreateWithoutRole_permissionsInputObjectSchema } from './RoleUncheckedCreateWithoutRole_permissionsInput.schema';
import { RoleCreateOrConnectWithoutRole_permissionsInputObjectSchema } from './RoleCreateOrConnectWithoutRole_permissionsInput.schema';
import { RoleUpsertWithoutRole_permissionsInputObjectSchema } from './RoleUpsertWithoutRole_permissionsInput.schema';
import { RoleWhereUniqueInputObjectSchema } from './RoleWhereUniqueInput.schema';
import { RoleUpdateWithoutRole_permissionsInputObjectSchema } from './RoleUpdateWithoutRole_permissionsInput.schema';
import { RoleUncheckedUpdateWithoutRole_permissionsInputObjectSchema } from './RoleUncheckedUpdateWithoutRole_permissionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleUpdateOneRequiredWithoutRole_permissionsNestedInput> =
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
      upsert: z
        .lazy(() => RoleUpsertWithoutRole_permissionsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => RoleWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => RoleUpdateWithoutRole_permissionsInputObjectSchema),
          z.lazy(
            () => RoleUncheckedUpdateWithoutRole_permissionsInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const RoleUpdateOneRequiredWithoutRole_permissionsNestedInputObjectSchema =
  Schema;
