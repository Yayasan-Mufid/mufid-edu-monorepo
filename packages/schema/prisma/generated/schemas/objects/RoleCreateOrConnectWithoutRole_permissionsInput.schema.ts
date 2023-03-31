import { z } from 'zod';
import { RoleWhereUniqueInputObjectSchema } from './RoleWhereUniqueInput.schema';
import { RoleCreateWithoutRole_permissionsInputObjectSchema } from './RoleCreateWithoutRole_permissionsInput.schema';
import { RoleUncheckedCreateWithoutRole_permissionsInputObjectSchema } from './RoleUncheckedCreateWithoutRole_permissionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleCreateOrConnectWithoutRole_permissionsInput> =
  z
    .object({
      where: z.lazy(() => RoleWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => RoleCreateWithoutRole_permissionsInputObjectSchema),
        z.lazy(
          () => RoleUncheckedCreateWithoutRole_permissionsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const RoleCreateOrConnectWithoutRole_permissionsInputObjectSchema =
  Schema;
