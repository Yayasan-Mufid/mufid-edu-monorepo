import { z } from 'zod';
import { UserRoleCreateWithoutRoleInputObjectSchema } from './UserRoleCreateWithoutRoleInput.schema';
import { UserRoleUncheckedCreateWithoutRoleInputObjectSchema } from './UserRoleUncheckedCreateWithoutRoleInput.schema';
import { UserRoleCreateOrConnectWithoutRoleInputObjectSchema } from './UserRoleCreateOrConnectWithoutRoleInput.schema';
import { UserRoleUpsertWithWhereUniqueWithoutRoleInputObjectSchema } from './UserRoleUpsertWithWhereUniqueWithoutRoleInput.schema';
import { UserRoleCreateManyRoleInputEnvelopeObjectSchema } from './UserRoleCreateManyRoleInputEnvelope.schema';
import { UserRoleWhereUniqueInputObjectSchema } from './UserRoleWhereUniqueInput.schema';
import { UserRoleUpdateWithWhereUniqueWithoutRoleInputObjectSchema } from './UserRoleUpdateWithWhereUniqueWithoutRoleInput.schema';
import { UserRoleUpdateManyWithWhereWithoutRoleInputObjectSchema } from './UserRoleUpdateManyWithWhereWithoutRoleInput.schema';
import { UserRoleScalarWhereInputObjectSchema } from './UserRoleScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserRoleUncheckedUpdateManyWithoutRoleNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserRoleCreateWithoutRoleInputObjectSchema),
          z.lazy(() => UserRoleCreateWithoutRoleInputObjectSchema).array(),
          z.lazy(() => UserRoleUncheckedCreateWithoutRoleInputObjectSchema),
          z
            .lazy(() => UserRoleUncheckedCreateWithoutRoleInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => UserRoleCreateOrConnectWithoutRoleInputObjectSchema),
          z
            .lazy(() => UserRoleCreateOrConnectWithoutRoleInputObjectSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () => UserRoleUpsertWithWhereUniqueWithoutRoleInputObjectSchema,
          ),
          z
            .lazy(
              () => UserRoleUpsertWithWhereUniqueWithoutRoleInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => UserRoleCreateManyRoleInputEnvelopeObjectSchema)
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
          z.lazy(
            () => UserRoleUpdateWithWhereUniqueWithoutRoleInputObjectSchema,
          ),
          z
            .lazy(
              () => UserRoleUpdateWithWhereUniqueWithoutRoleInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => UserRoleUpdateManyWithWhereWithoutRoleInputObjectSchema),
          z
            .lazy(() => UserRoleUpdateManyWithWhereWithoutRoleInputObjectSchema)
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

export const UserRoleUncheckedUpdateManyWithoutRoleNestedInputObjectSchema =
  Schema;
