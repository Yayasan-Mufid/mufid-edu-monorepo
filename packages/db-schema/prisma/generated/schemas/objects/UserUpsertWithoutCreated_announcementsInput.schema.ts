import { z } from 'zod';
import { UserUpdateWithoutCreated_announcementsInputObjectSchema } from './UserUpdateWithoutCreated_announcementsInput.schema';
import { UserUncheckedUpdateWithoutCreated_announcementsInputObjectSchema } from './UserUncheckedUpdateWithoutCreated_announcementsInput.schema';
import { UserCreateWithoutCreated_announcementsInputObjectSchema } from './UserCreateWithoutCreated_announcementsInput.schema';
import { UserUncheckedCreateWithoutCreated_announcementsInputObjectSchema } from './UserUncheckedCreateWithoutCreated_announcementsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpsertWithoutCreated_announcementsInput> = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutCreated_announcementsInputObjectSchema),
      z.lazy(
        () => UserUncheckedUpdateWithoutCreated_announcementsInputObjectSchema,
      ),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutCreated_announcementsInputObjectSchema),
      z.lazy(
        () => UserUncheckedCreateWithoutCreated_announcementsInputObjectSchema,
      ),
    ]),
  })
  .strict();

export const UserUpsertWithoutCreated_announcementsInputObjectSchema = Schema;
