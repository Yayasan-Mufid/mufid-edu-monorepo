import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutUploaded_filesInputObjectSchema } from './UserCreateWithoutUploaded_filesInput.schema';
import { UserUncheckedCreateWithoutUploaded_filesInputObjectSchema } from './UserUncheckedCreateWithoutUploaded_filesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutUploaded_filesInput> =
  z
    .object({
      where: z.lazy(() => UserWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => UserCreateWithoutUploaded_filesInputObjectSchema),
        z.lazy(() => UserUncheckedCreateWithoutUploaded_filesInputObjectSchema),
      ]),
    })
    .strict();

export const UserCreateOrConnectWithoutUploaded_filesInputObjectSchema = Schema;
