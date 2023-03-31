import { z } from 'zod';
import { UserCreateWithoutConfirmed_by_me_invoicesInputObjectSchema } from './UserCreateWithoutConfirmed_by_me_invoicesInput.schema';
import { UserUncheckedCreateWithoutConfirmed_by_me_invoicesInputObjectSchema } from './UserUncheckedCreateWithoutConfirmed_by_me_invoicesInput.schema';
import { UserCreateOrConnectWithoutConfirmed_by_me_invoicesInputObjectSchema } from './UserCreateOrConnectWithoutConfirmed_by_me_invoicesInput.schema';
import { UserUpsertWithoutConfirmed_by_me_invoicesInputObjectSchema } from './UserUpsertWithoutConfirmed_by_me_invoicesInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutConfirmed_by_me_invoicesInputObjectSchema } from './UserUpdateWithoutConfirmed_by_me_invoicesInput.schema';
import { UserUncheckedUpdateWithoutConfirmed_by_me_invoicesInputObjectSchema } from './UserUncheckedUpdateWithoutConfirmed_by_me_invoicesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateOneWithoutConfirmed_by_me_invoicesNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () => UserCreateWithoutConfirmed_by_me_invoicesInputObjectSchema,
          ),
          z.lazy(
            () =>
              UserUncheckedCreateWithoutConfirmed_by_me_invoicesInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () =>
            UserCreateOrConnectWithoutConfirmed_by_me_invoicesInputObjectSchema,
        )
        .optional(),
      upsert: z
        .lazy(() => UserUpsertWithoutConfirmed_by_me_invoicesInputObjectSchema)
        .optional(),
      disconnect: z.boolean().optional(),
      delete: z.boolean().optional(),
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(
            () => UserUpdateWithoutConfirmed_by_me_invoicesInputObjectSchema,
          ),
          z.lazy(
            () =>
              UserUncheckedUpdateWithoutConfirmed_by_me_invoicesInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const UserUpdateOneWithoutConfirmed_by_me_invoicesNestedInputObjectSchema =
  Schema;
