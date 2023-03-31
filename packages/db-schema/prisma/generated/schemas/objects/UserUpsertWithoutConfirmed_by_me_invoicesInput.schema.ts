import { z } from 'zod';
import { UserUpdateWithoutConfirmed_by_me_invoicesInputObjectSchema } from './UserUpdateWithoutConfirmed_by_me_invoicesInput.schema';
import { UserUncheckedUpdateWithoutConfirmed_by_me_invoicesInputObjectSchema } from './UserUncheckedUpdateWithoutConfirmed_by_me_invoicesInput.schema';
import { UserCreateWithoutConfirmed_by_me_invoicesInputObjectSchema } from './UserCreateWithoutConfirmed_by_me_invoicesInput.schema';
import { UserUncheckedCreateWithoutConfirmed_by_me_invoicesInputObjectSchema } from './UserUncheckedCreateWithoutConfirmed_by_me_invoicesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpsertWithoutConfirmed_by_me_invoicesInput> =
  z
    .object({
      update: z.union([
        z.lazy(
          () => UserUpdateWithoutConfirmed_by_me_invoicesInputObjectSchema,
        ),
        z.lazy(
          () =>
            UserUncheckedUpdateWithoutConfirmed_by_me_invoicesInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(
          () => UserCreateWithoutConfirmed_by_me_invoicesInputObjectSchema,
        ),
        z.lazy(
          () =>
            UserUncheckedCreateWithoutConfirmed_by_me_invoicesInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const UserUpsertWithoutConfirmed_by_me_invoicesInputObjectSchema =
  Schema;
