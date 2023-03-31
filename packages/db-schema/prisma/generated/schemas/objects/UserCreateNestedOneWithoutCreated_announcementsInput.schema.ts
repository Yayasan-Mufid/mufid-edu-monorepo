import { z } from 'zod';
import { UserCreateWithoutCreated_announcementsInputObjectSchema } from './UserCreateWithoutCreated_announcementsInput.schema';
import { UserUncheckedCreateWithoutCreated_announcementsInputObjectSchema } from './UserUncheckedCreateWithoutCreated_announcementsInput.schema';
import { UserCreateOrConnectWithoutCreated_announcementsInputObjectSchema } from './UserCreateOrConnectWithoutCreated_announcementsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutCreated_announcementsInput> =
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
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const UserCreateNestedOneWithoutCreated_announcementsInputObjectSchema =
  Schema;
