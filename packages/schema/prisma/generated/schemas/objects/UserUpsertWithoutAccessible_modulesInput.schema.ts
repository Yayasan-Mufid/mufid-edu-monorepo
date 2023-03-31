import { z } from 'zod';
import { UserUpdateWithoutAccessible_modulesInputObjectSchema } from './UserUpdateWithoutAccessible_modulesInput.schema';
import { UserUncheckedUpdateWithoutAccessible_modulesInputObjectSchema } from './UserUncheckedUpdateWithoutAccessible_modulesInput.schema';
import { UserCreateWithoutAccessible_modulesInputObjectSchema } from './UserCreateWithoutAccessible_modulesInput.schema';
import { UserUncheckedCreateWithoutAccessible_modulesInputObjectSchema } from './UserUncheckedCreateWithoutAccessible_modulesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpsertWithoutAccessible_modulesInput> = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutAccessible_modulesInputObjectSchema),
      z.lazy(
        () => UserUncheckedUpdateWithoutAccessible_modulesInputObjectSchema,
      ),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutAccessible_modulesInputObjectSchema),
      z.lazy(
        () => UserUncheckedCreateWithoutAccessible_modulesInputObjectSchema,
      ),
    ]),
  })
  .strict();

export const UserUpsertWithoutAccessible_modulesInputObjectSchema = Schema;
