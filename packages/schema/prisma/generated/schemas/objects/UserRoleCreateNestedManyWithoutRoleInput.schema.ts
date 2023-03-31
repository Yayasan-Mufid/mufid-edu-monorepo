import { z } from 'zod';
import { UserRoleCreateWithoutRoleInputObjectSchema } from './UserRoleCreateWithoutRoleInput.schema';
import { UserRoleUncheckedCreateWithoutRoleInputObjectSchema } from './UserRoleUncheckedCreateWithoutRoleInput.schema';
import { UserRoleCreateOrConnectWithoutRoleInputObjectSchema } from './UserRoleCreateOrConnectWithoutRoleInput.schema';
import { UserRoleCreateManyRoleInputEnvelopeObjectSchema } from './UserRoleCreateManyRoleInputEnvelope.schema';
import { UserRoleWhereUniqueInputObjectSchema } from './UserRoleWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserRoleCreateNestedManyWithoutRoleInput> = z
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
    createMany: z
      .lazy(() => UserRoleCreateManyRoleInputEnvelopeObjectSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => UserRoleWhereUniqueInputObjectSchema),
        z.lazy(() => UserRoleWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const UserRoleCreateNestedManyWithoutRoleInputObjectSchema = Schema;
