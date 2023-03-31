import { z } from 'zod';
import { UserCreateWithoutUploaded_filesInputObjectSchema } from './UserCreateWithoutUploaded_filesInput.schema';
import { UserUncheckedCreateWithoutUploaded_filesInputObjectSchema } from './UserUncheckedCreateWithoutUploaded_filesInput.schema';
import { UserCreateOrConnectWithoutUploaded_filesInputObjectSchema } from './UserCreateOrConnectWithoutUploaded_filesInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutUploaded_filesInput> =
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
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const UserCreateNestedOneWithoutUploaded_filesInputObjectSchema = Schema;
