import { z } from 'zod';
import { UserUpdateWithoutUploaded_filesInputObjectSchema } from './UserUpdateWithoutUploaded_filesInput.schema';
import { UserUncheckedUpdateWithoutUploaded_filesInputObjectSchema } from './UserUncheckedUpdateWithoutUploaded_filesInput.schema';
import { UserCreateWithoutUploaded_filesInputObjectSchema } from './UserCreateWithoutUploaded_filesInput.schema';
import { UserUncheckedCreateWithoutUploaded_filesInputObjectSchema } from './UserUncheckedCreateWithoutUploaded_filesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpsertWithoutUploaded_filesInput> = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutUploaded_filesInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutUploaded_filesInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutUploaded_filesInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutUploaded_filesInputObjectSchema),
    ]),
  })
  .strict();

export const UserUpsertWithoutUploaded_filesInputObjectSchema = Schema;
