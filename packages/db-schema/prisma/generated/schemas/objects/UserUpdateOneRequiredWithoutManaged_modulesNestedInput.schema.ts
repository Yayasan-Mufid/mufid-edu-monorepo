import { z } from 'zod';
import { UserCreateWithoutManaged_modulesInputObjectSchema } from './UserCreateWithoutManaged_modulesInput.schema';
import { UserUncheckedCreateWithoutManaged_modulesInputObjectSchema } from './UserUncheckedCreateWithoutManaged_modulesInput.schema';
import { UserCreateOrConnectWithoutManaged_modulesInputObjectSchema } from './UserCreateOrConnectWithoutManaged_modulesInput.schema';
import { UserUpsertWithoutManaged_modulesInputObjectSchema } from './UserUpsertWithoutManaged_modulesInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutManaged_modulesInputObjectSchema } from './UserUpdateWithoutManaged_modulesInput.schema';
import { UserUncheckedUpdateWithoutManaged_modulesInputObjectSchema } from './UserUncheckedUpdateWithoutManaged_modulesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutManaged_modulesNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutManaged_modulesInputObjectSchema),
          z.lazy(
            () => UserUncheckedCreateWithoutManaged_modulesInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => UserCreateOrConnectWithoutManaged_modulesInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => UserUpsertWithoutManaged_modulesInputObjectSchema)
        .optional(),
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => UserUpdateWithoutManaged_modulesInputObjectSchema),
          z.lazy(
            () => UserUncheckedUpdateWithoutManaged_modulesInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const UserUpdateOneRequiredWithoutManaged_modulesNestedInputObjectSchema =
  Schema;
