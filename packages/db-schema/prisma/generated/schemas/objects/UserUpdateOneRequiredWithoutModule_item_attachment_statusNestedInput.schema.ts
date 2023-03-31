import { z } from 'zod';
import { UserCreateWithoutModule_item_attachment_statusInputObjectSchema } from './UserCreateWithoutModule_item_attachment_statusInput.schema';
import { UserUncheckedCreateWithoutModule_item_attachment_statusInputObjectSchema } from './UserUncheckedCreateWithoutModule_item_attachment_statusInput.schema';
import { UserCreateOrConnectWithoutModule_item_attachment_statusInputObjectSchema } from './UserCreateOrConnectWithoutModule_item_attachment_statusInput.schema';
import { UserUpsertWithoutModule_item_attachment_statusInputObjectSchema } from './UserUpsertWithoutModule_item_attachment_statusInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutModule_item_attachment_statusInputObjectSchema } from './UserUpdateWithoutModule_item_attachment_statusInput.schema';
import { UserUncheckedUpdateWithoutModule_item_attachment_statusInputObjectSchema } from './UserUncheckedUpdateWithoutModule_item_attachment_statusInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutModule_item_attachment_statusNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () =>
              UserCreateWithoutModule_item_attachment_statusInputObjectSchema,
          ),
          z.lazy(
            () =>
              UserUncheckedCreateWithoutModule_item_attachment_statusInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () =>
            UserCreateOrConnectWithoutModule_item_attachment_statusInputObjectSchema,
        )
        .optional(),
      upsert: z
        .lazy(
          () => UserUpsertWithoutModule_item_attachment_statusInputObjectSchema,
        )
        .optional(),
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(
            () =>
              UserUpdateWithoutModule_item_attachment_statusInputObjectSchema,
          ),
          z.lazy(
            () =>
              UserUncheckedUpdateWithoutModule_item_attachment_statusInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const UserUpdateOneRequiredWithoutModule_item_attachment_statusNestedInputObjectSchema =
  Schema;
