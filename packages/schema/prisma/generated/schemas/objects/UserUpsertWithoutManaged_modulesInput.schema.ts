import { z } from 'zod';
import { UserUpdateWithoutManaged_modulesInputObjectSchema } from './UserUpdateWithoutManaged_modulesInput.schema';
import { UserUncheckedUpdateWithoutManaged_modulesInputObjectSchema } from './UserUncheckedUpdateWithoutManaged_modulesInput.schema';
import { UserCreateWithoutManaged_modulesInputObjectSchema } from './UserCreateWithoutManaged_modulesInput.schema';
import { UserUncheckedCreateWithoutManaged_modulesInputObjectSchema } from './UserUncheckedCreateWithoutManaged_modulesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpsertWithoutManaged_modulesInput> = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutManaged_modulesInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutManaged_modulesInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutManaged_modulesInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutManaged_modulesInputObjectSchema),
    ]),
  })
  .strict();

export const UserUpsertWithoutManaged_modulesInputObjectSchema = Schema;
