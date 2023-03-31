import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutAccessible_modulesInputObjectSchema } from './UserCreateWithoutAccessible_modulesInput.schema';
import { UserUncheckedCreateWithoutAccessible_modulesInputObjectSchema } from './UserUncheckedCreateWithoutAccessible_modulesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutAccessible_modulesInput> =
  z
    .object({
      where: z.lazy(() => UserWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => UserCreateWithoutAccessible_modulesInputObjectSchema),
        z.lazy(
          () => UserUncheckedCreateWithoutAccessible_modulesInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const UserCreateOrConnectWithoutAccessible_modulesInputObjectSchema =
  Schema;
