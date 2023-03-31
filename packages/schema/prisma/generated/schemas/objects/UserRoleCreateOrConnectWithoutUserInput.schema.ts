import { z } from 'zod';
import { UserRoleWhereUniqueInputObjectSchema } from './UserRoleWhereUniqueInput.schema';
import { UserRoleCreateWithoutUserInputObjectSchema } from './UserRoleCreateWithoutUserInput.schema';
import { UserRoleUncheckedCreateWithoutUserInputObjectSchema } from './UserRoleUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserRoleCreateOrConnectWithoutUserInput> = z
  .object({
    where: z.lazy(() => UserRoleWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => UserRoleCreateWithoutUserInputObjectSchema),
      z.lazy(() => UserRoleUncheckedCreateWithoutUserInputObjectSchema),
    ]),
  })
  .strict();

export const UserRoleCreateOrConnectWithoutUserInputObjectSchema = Schema;
