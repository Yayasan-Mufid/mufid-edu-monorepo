import { z } from 'zod';
import { UserCreateWithoutModule_item_statusInputObjectSchema } from './UserCreateWithoutModule_item_statusInput.schema';
import { UserUncheckedCreateWithoutModule_item_statusInputObjectSchema } from './UserUncheckedCreateWithoutModule_item_statusInput.schema';
import { UserCreateOrConnectWithoutModule_item_statusInputObjectSchema } from './UserCreateOrConnectWithoutModule_item_statusInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutModule_item_statusInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutModule_item_statusInputObjectSchema),
          z.lazy(
            () => UserUncheckedCreateWithoutModule_item_statusInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () => UserCreateOrConnectWithoutModule_item_statusInputObjectSchema,
        )
        .optional(),
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const UserCreateNestedOneWithoutModule_item_statusInputObjectSchema =
  Schema;
