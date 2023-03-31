import { z } from 'zod';
import { UserRoleCreateWithoutUserInputObjectSchema } from './UserRoleCreateWithoutUserInput.schema';
import { UserRoleUncheckedCreateWithoutUserInputObjectSchema } from './UserRoleUncheckedCreateWithoutUserInput.schema';
import { UserRoleCreateOrConnectWithoutUserInputObjectSchema } from './UserRoleCreateOrConnectWithoutUserInput.schema';
import { UserRoleCreateManyUserInputEnvelopeObjectSchema } from './UserRoleCreateManyUserInputEnvelope.schema';
import { UserRoleWhereUniqueInputObjectSchema } from './UserRoleWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserRoleCreateNestedManyWithoutUserInput> = z
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
    createMany: z
      .lazy(() => UserRoleCreateManyUserInputEnvelopeObjectSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => UserRoleWhereUniqueInputObjectSchema),
        z.lazy(() => UserRoleWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const UserRoleCreateNestedManyWithoutUserInputObjectSchema = Schema;
