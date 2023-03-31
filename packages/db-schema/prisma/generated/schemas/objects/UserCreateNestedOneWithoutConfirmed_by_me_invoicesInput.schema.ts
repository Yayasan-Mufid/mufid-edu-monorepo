import { z } from 'zod';
import { UserCreateWithoutConfirmed_by_me_invoicesInputObjectSchema } from './UserCreateWithoutConfirmed_by_me_invoicesInput.schema';
import { UserUncheckedCreateWithoutConfirmed_by_me_invoicesInputObjectSchema } from './UserUncheckedCreateWithoutConfirmed_by_me_invoicesInput.schema';
import { UserCreateOrConnectWithoutConfirmed_by_me_invoicesInputObjectSchema } from './UserCreateOrConnectWithoutConfirmed_by_me_invoicesInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutConfirmed_by_me_invoicesInput> =
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
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const UserCreateNestedOneWithoutConfirmed_by_me_invoicesInputObjectSchema =
  Schema;
