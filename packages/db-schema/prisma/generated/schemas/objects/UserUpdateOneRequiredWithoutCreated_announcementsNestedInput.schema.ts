import { z } from 'zod';
import { UserCreateWithoutCreated_announcementsInputObjectSchema } from './UserCreateWithoutCreated_announcementsInput.schema';
import { UserUncheckedCreateWithoutCreated_announcementsInputObjectSchema } from './UserUncheckedCreateWithoutCreated_announcementsInput.schema';
import { UserCreateOrConnectWithoutCreated_announcementsInputObjectSchema } from './UserCreateOrConnectWithoutCreated_announcementsInput.schema';
import { UserUpsertWithoutCreated_announcementsInputObjectSchema } from './UserUpsertWithoutCreated_announcementsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutCreated_announcementsInputObjectSchema } from './UserUpdateWithoutCreated_announcementsInput.schema';
import { UserUncheckedUpdateWithoutCreated_announcementsInputObjectSchema } from './UserUncheckedUpdateWithoutCreated_announcementsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutCreated_announcementsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutCreated_announcementsInputObjectSchema),
          z.lazy(
            () =>
              UserUncheckedCreateWithoutCreated_announcementsInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () =>
            UserCreateOrConnectWithoutCreated_announcementsInputObjectSchema,
        )
        .optional(),
      upsert: z
        .lazy(() => UserUpsertWithoutCreated_announcementsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => UserUpdateWithoutCreated_announcementsInputObjectSchema),
          z.lazy(
            () =>
              UserUncheckedUpdateWithoutCreated_announcementsInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const UserUpdateOneRequiredWithoutCreated_announcementsNestedInputObjectSchema =
  Schema;
