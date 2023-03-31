import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutConfirmed_by_me_invoicesInputObjectSchema } from './UserCreateWithoutConfirmed_by_me_invoicesInput.schema';
import { UserUncheckedCreateWithoutConfirmed_by_me_invoicesInputObjectSchema } from './UserUncheckedCreateWithoutConfirmed_by_me_invoicesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutConfirmed_by_me_invoicesInput> =
  z
    .object({
      where: z.lazy(() => UserWhereUniqueInputObjectSchema),
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

export const UserCreateOrConnectWithoutConfirmed_by_me_invoicesInputObjectSchema =
  Schema;
