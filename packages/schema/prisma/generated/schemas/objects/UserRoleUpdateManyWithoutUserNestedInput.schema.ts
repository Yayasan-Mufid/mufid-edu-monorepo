import { z } from 'zod';
import { UserRoleCreateWithoutUserInputObjectSchema } from './UserRoleCreateWithoutUserInput.schema';
import { UserRoleUncheckedCreateWithoutUserInputObjectSchema } from './UserRoleUncheckedCreateWithoutUserInput.schema';
import { UserRoleCreateOrConnectWithoutUserInputObjectSchema } from './UserRoleCreateOrConnectWithoutUserInput.schema';
import { UserRoleUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './UserRoleUpsertWithWhereUniqueWithoutUserInput.schema';
import { UserRoleCreateManyUserInputEnvelopeObjectSchema } from './UserRoleCreateManyUserInputEnvelope.schema';
import { UserRoleWhereUniqueInputObjectSchema } from './UserRoleWhereUniqueInput.schema';
import { UserRoleUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './UserRoleUpdateWithWhereUniqueWithoutUserInput.schema';
import { UserRoleUpdateManyWithWhereWithoutUserInputObjectSchema } from './UserRoleUpdateManyWithWhereWithoutUserInput.schema';
import { UserRoleScalarWhereInputObjectSchema } from './UserRoleScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserRoleUpdateManyWithoutUserNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => UserRoleCreateWithoutUserInputObjectSchema),
        z.lazy(() => UserRoleCreateWithoutUserInputObjectSchema).array(),
        z.lazy(() => UserRoleUncheckedCreateWithoutUserInputObjectSchema),
        z
          .lazy(() => UserRoleUncheckedCreateWithoutUserInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => UserRoleCreateOrConnectWithoutUserInputObjectSchema),
        z
          .lazy(() => UserRoleCreateOrConnectWithoutUserInputObjectSchema)
          .array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(() => UserRoleUpsertWithWhereUniqueWithoutUserInputObjectSchema),
        z
          .lazy(() => UserRoleUpsertWithWhereUniqueWithoutUserInputObjectSchema)
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => UserRoleCreateManyUserInputEnvelopeObjectSchema)
      .optional(),
    set: z
      .union([
        z.lazy(() => UserRoleWhereUniqueInputObjectSchema),
        z.lazy(() => UserRoleWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => UserRoleWhereUniqueInputObjectSchema),
        z.lazy(() => UserRoleWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => UserRoleWhereUniqueInputObjectSchema),
        z.lazy(() => UserRoleWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => UserRoleWhereUniqueInputObjectSchema),
        z.lazy(() => UserRoleWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(() => UserRoleUpdateWithWhereUniqueWithoutUserInputObjectSchema),
        z
          .lazy(() => UserRoleUpdateWithWhereUniqueWithoutUserInputObjectSchema)
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => UserRoleUpdateManyWithWhereWithoutUserInputObjectSchema),
        z
          .lazy(() => UserRoleUpdateManyWithWhereWithoutUserInputObjectSchema)
          .array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => UserRoleScalarWhereInputObjectSchema),
        z.lazy(() => UserRoleScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const UserRoleUpdateManyWithoutUserNestedInputObjectSchema = Schema;
