import { z } from 'zod';
import { UserCreateWithoutManaged_modulesInputObjectSchema } from './UserCreateWithoutManaged_modulesInput.schema';
import { UserUncheckedCreateWithoutManaged_modulesInputObjectSchema } from './UserUncheckedCreateWithoutManaged_modulesInput.schema';
import { UserCreateOrConnectWithoutManaged_modulesInputObjectSchema } from './UserCreateOrConnectWithoutManaged_modulesInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutManaged_modulesInput> =
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
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const UserCreateNestedOneWithoutManaged_modulesInputObjectSchema =
  Schema;
