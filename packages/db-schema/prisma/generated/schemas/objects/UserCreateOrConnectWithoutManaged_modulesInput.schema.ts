import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutManaged_modulesInputObjectSchema } from './UserCreateWithoutManaged_modulesInput.schema';
import { UserUncheckedCreateWithoutManaged_modulesInputObjectSchema } from './UserUncheckedCreateWithoutManaged_modulesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutManaged_modulesInput> =
  z
    .object({
      where: z.lazy(() => UserWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => UserCreateWithoutManaged_modulesInputObjectSchema),
        z.lazy(
          () => UserUncheckedCreateWithoutManaged_modulesInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const UserCreateOrConnectWithoutManaged_modulesInputObjectSchema =
  Schema;
