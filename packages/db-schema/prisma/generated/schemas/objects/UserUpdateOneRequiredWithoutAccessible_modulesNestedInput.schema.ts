import { z } from 'zod';
import { UserCreateWithoutAccessible_modulesInputObjectSchema } from './UserCreateWithoutAccessible_modulesInput.schema';
import { UserUncheckedCreateWithoutAccessible_modulesInputObjectSchema } from './UserUncheckedCreateWithoutAccessible_modulesInput.schema';
import { UserCreateOrConnectWithoutAccessible_modulesInputObjectSchema } from './UserCreateOrConnectWithoutAccessible_modulesInput.schema';
import { UserUpsertWithoutAccessible_modulesInputObjectSchema } from './UserUpsertWithoutAccessible_modulesInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutAccessible_modulesInputObjectSchema } from './UserUpdateWithoutAccessible_modulesInput.schema';
import { UserUncheckedUpdateWithoutAccessible_modulesInputObjectSchema } from './UserUncheckedUpdateWithoutAccessible_modulesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutAccessible_modulesNestedInput> =
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
      upsert: z
        .lazy(() => UserUpsertWithoutAccessible_modulesInputObjectSchema)
        .optional(),
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => UserUpdateWithoutAccessible_modulesInputObjectSchema),
          z.lazy(
            () => UserUncheckedUpdateWithoutAccessible_modulesInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const UserUpdateOneRequiredWithoutAccessible_modulesNestedInputObjectSchema =
  Schema;
