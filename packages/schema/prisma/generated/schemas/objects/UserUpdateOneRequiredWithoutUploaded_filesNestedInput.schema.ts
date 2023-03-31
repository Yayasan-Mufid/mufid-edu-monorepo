import { z } from 'zod';
import { UserCreateWithoutUploaded_filesInputObjectSchema } from './UserCreateWithoutUploaded_filesInput.schema';
import { UserUncheckedCreateWithoutUploaded_filesInputObjectSchema } from './UserUncheckedCreateWithoutUploaded_filesInput.schema';
import { UserCreateOrConnectWithoutUploaded_filesInputObjectSchema } from './UserCreateOrConnectWithoutUploaded_filesInput.schema';
import { UserUpsertWithoutUploaded_filesInputObjectSchema } from './UserUpsertWithoutUploaded_filesInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutUploaded_filesInputObjectSchema } from './UserUpdateWithoutUploaded_filesInput.schema';
import { UserUncheckedUpdateWithoutUploaded_filesInputObjectSchema } from './UserUncheckedUpdateWithoutUploaded_filesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutUploaded_filesNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutUploaded_filesInputObjectSchema),
          z.lazy(
            () => UserUncheckedCreateWithoutUploaded_filesInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => UserCreateOrConnectWithoutUploaded_filesInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => UserUpsertWithoutUploaded_filesInputObjectSchema)
        .optional(),
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => UserUpdateWithoutUploaded_filesInputObjectSchema),
          z.lazy(
            () => UserUncheckedUpdateWithoutUploaded_filesInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const UserUpdateOneRequiredWithoutUploaded_filesNestedInputObjectSchema =
  Schema;
