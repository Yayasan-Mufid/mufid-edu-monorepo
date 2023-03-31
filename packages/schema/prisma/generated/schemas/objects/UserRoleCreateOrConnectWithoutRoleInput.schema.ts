import { z } from 'zod';
import { UserRoleWhereUniqueInputObjectSchema } from './UserRoleWhereUniqueInput.schema';
import { UserRoleCreateWithoutRoleInputObjectSchema } from './UserRoleCreateWithoutRoleInput.schema';
import { UserRoleUncheckedCreateWithoutRoleInputObjectSchema } from './UserRoleUncheckedCreateWithoutRoleInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserRoleCreateOrConnectWithoutRoleInput> = z
  .object({
    where: z.lazy(() => UserRoleWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => UserRoleCreateWithoutRoleInputObjectSchema),
      z.lazy(() => UserRoleUncheckedCreateWithoutRoleInputObjectSchema),
    ]),
  })
  .strict();

export const UserRoleCreateOrConnectWithoutRoleInputObjectSchema = Schema;
