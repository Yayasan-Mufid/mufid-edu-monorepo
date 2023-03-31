import { z } from 'zod';
import { UserRoleWhereUniqueInputObjectSchema } from './UserRoleWhereUniqueInput.schema';
import { UserRoleUpdateWithoutUserInputObjectSchema } from './UserRoleUpdateWithoutUserInput.schema';
import { UserRoleUncheckedUpdateWithoutUserInputObjectSchema } from './UserRoleUncheckedUpdateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserRoleUpdateWithWhereUniqueWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => UserRoleWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => UserRoleUpdateWithoutUserInputObjectSchema),
        z.lazy(() => UserRoleUncheckedUpdateWithoutUserInputObjectSchema),
      ]),
    })
    .strict();

export const UserRoleUpdateWithWhereUniqueWithoutUserInputObjectSchema = Schema;
