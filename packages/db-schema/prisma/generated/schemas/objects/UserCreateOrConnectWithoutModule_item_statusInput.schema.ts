import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutModule_item_statusInputObjectSchema } from './UserCreateWithoutModule_item_statusInput.schema';
import { UserUncheckedCreateWithoutModule_item_statusInputObjectSchema } from './UserUncheckedCreateWithoutModule_item_statusInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutModule_item_statusInput> =
  z
    .object({
      where: z.lazy(() => UserWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => UserCreateWithoutModule_item_statusInputObjectSchema),
        z.lazy(
          () => UserUncheckedCreateWithoutModule_item_statusInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const UserCreateOrConnectWithoutModule_item_statusInputObjectSchema =
  Schema;
