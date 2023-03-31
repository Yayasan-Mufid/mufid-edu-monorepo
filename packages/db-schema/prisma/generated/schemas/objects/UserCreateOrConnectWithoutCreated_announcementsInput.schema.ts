import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutCreated_announcementsInputObjectSchema } from './UserCreateWithoutCreated_announcementsInput.schema';
import { UserUncheckedCreateWithoutCreated_announcementsInputObjectSchema } from './UserUncheckedCreateWithoutCreated_announcementsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutCreated_announcementsInput> =
  z
    .object({
      where: z.lazy(() => UserWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => UserCreateWithoutCreated_announcementsInputObjectSchema),
        z.lazy(
          () =>
            UserUncheckedCreateWithoutCreated_announcementsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const UserCreateOrConnectWithoutCreated_announcementsInputObjectSchema =
  Schema;
