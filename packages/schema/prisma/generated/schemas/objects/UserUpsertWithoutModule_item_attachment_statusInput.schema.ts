import { z } from 'zod';
import { UserUpdateWithoutModule_item_attachment_statusInputObjectSchema } from './UserUpdateWithoutModule_item_attachment_statusInput.schema';
import { UserUncheckedUpdateWithoutModule_item_attachment_statusInputObjectSchema } from './UserUncheckedUpdateWithoutModule_item_attachment_statusInput.schema';
import { UserCreateWithoutModule_item_attachment_statusInputObjectSchema } from './UserCreateWithoutModule_item_attachment_statusInput.schema';
import { UserUncheckedCreateWithoutModule_item_attachment_statusInputObjectSchema } from './UserUncheckedCreateWithoutModule_item_attachment_statusInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpsertWithoutModule_item_attachment_statusInput> =
  z
    .object({
      update: z.union([
        z.lazy(
          () => UserUpdateWithoutModule_item_attachment_statusInputObjectSchema,
        ),
        z.lazy(
          () =>
            UserUncheckedUpdateWithoutModule_item_attachment_statusInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(
          () => UserCreateWithoutModule_item_attachment_statusInputObjectSchema,
        ),
        z.lazy(
          () =>
            UserUncheckedCreateWithoutModule_item_attachment_statusInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const UserUpsertWithoutModule_item_attachment_statusInputObjectSchema =
  Schema;
