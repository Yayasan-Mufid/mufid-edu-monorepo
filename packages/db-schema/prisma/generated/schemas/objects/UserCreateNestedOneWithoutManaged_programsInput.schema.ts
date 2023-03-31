import { z } from 'zod';
import { UserCreateWithoutManaged_programsInputObjectSchema } from './UserCreateWithoutManaged_programsInput.schema';
import { UserUncheckedCreateWithoutManaged_programsInputObjectSchema } from './UserUncheckedCreateWithoutManaged_programsInput.schema';
import { UserCreateOrConnectWithoutManaged_programsInputObjectSchema } from './UserCreateOrConnectWithoutManaged_programsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutManaged_programsInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutManaged_programsInputObjectSchema),
          z.lazy(
            () => UserUncheckedCreateWithoutManaged_programsInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => UserCreateOrConnectWithoutManaged_programsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const UserCreateNestedOneWithoutManaged_programsInputObjectSchema =
  Schema;
