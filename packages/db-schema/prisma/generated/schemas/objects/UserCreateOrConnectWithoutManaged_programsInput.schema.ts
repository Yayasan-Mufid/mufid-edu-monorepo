import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutManaged_programsInputObjectSchema } from './UserCreateWithoutManaged_programsInput.schema';
import { UserUncheckedCreateWithoutManaged_programsInputObjectSchema } from './UserUncheckedCreateWithoutManaged_programsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutManaged_programsInput> =
  z
    .object({
      where: z.lazy(() => UserWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => UserCreateWithoutManaged_programsInputObjectSchema),
        z.lazy(
          () => UserUncheckedCreateWithoutManaged_programsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const UserCreateOrConnectWithoutManaged_programsInputObjectSchema =
  Schema;
