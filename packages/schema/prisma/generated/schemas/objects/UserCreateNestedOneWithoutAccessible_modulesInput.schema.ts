import { z } from 'zod';
import { UserCreateWithoutAccessible_modulesInputObjectSchema } from './UserCreateWithoutAccessible_modulesInput.schema';
import { UserUncheckedCreateWithoutAccessible_modulesInputObjectSchema } from './UserUncheckedCreateWithoutAccessible_modulesInput.schema';
import { UserCreateOrConnectWithoutAccessible_modulesInputObjectSchema } from './UserCreateOrConnectWithoutAccessible_modulesInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutAccessible_modulesInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutAccessible_modulesInputObjectSchema),
          z.lazy(
            () => UserUncheckedCreateWithoutAccessible_modulesInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () => UserCreateOrConnectWithoutAccessible_modulesInputObjectSchema,
        )
        .optional(),
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const UserCreateNestedOneWithoutAccessible_modulesInputObjectSchema =
  Schema;
