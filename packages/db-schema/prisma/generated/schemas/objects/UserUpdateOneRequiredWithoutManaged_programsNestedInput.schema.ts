import { z } from 'zod';
import { UserCreateWithoutManaged_programsInputObjectSchema } from './UserCreateWithoutManaged_programsInput.schema';
import { UserUncheckedCreateWithoutManaged_programsInputObjectSchema } from './UserUncheckedCreateWithoutManaged_programsInput.schema';
import { UserCreateOrConnectWithoutManaged_programsInputObjectSchema } from './UserCreateOrConnectWithoutManaged_programsInput.schema';
import { UserUpsertWithoutManaged_programsInputObjectSchema } from './UserUpsertWithoutManaged_programsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutManaged_programsInputObjectSchema } from './UserUpdateWithoutManaged_programsInput.schema';
import { UserUncheckedUpdateWithoutManaged_programsInputObjectSchema } from './UserUncheckedUpdateWithoutManaged_programsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutManaged_programsNestedInput> =
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
      upsert: z
        .lazy(() => UserUpsertWithoutManaged_programsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => UserUpdateWithoutManaged_programsInputObjectSchema),
          z.lazy(
            () => UserUncheckedUpdateWithoutManaged_programsInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const UserUpdateOneRequiredWithoutManaged_programsNestedInputObjectSchema =
  Schema;
