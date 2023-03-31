import { z } from 'zod';
import { UserUpdateWithoutManaged_programsInputObjectSchema } from './UserUpdateWithoutManaged_programsInput.schema';
import { UserUncheckedUpdateWithoutManaged_programsInputObjectSchema } from './UserUncheckedUpdateWithoutManaged_programsInput.schema';
import { UserCreateWithoutManaged_programsInputObjectSchema } from './UserCreateWithoutManaged_programsInput.schema';
import { UserUncheckedCreateWithoutManaged_programsInputObjectSchema } from './UserUncheckedCreateWithoutManaged_programsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpsertWithoutManaged_programsInput> = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutManaged_programsInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutManaged_programsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutManaged_programsInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutManaged_programsInputObjectSchema),
    ]),
  })
  .strict();

export const UserUpsertWithoutManaged_programsInputObjectSchema = Schema;
