import { z } from 'zod';
import { StudyGroupUpdateWithoutStudentsInputObjectSchema } from './StudyGroupUpdateWithoutStudentsInput.schema';
import { StudyGroupUncheckedUpdateWithoutStudentsInputObjectSchema } from './StudyGroupUncheckedUpdateWithoutStudentsInput.schema';
import { StudyGroupCreateWithoutStudentsInputObjectSchema } from './StudyGroupCreateWithoutStudentsInput.schema';
import { StudyGroupUncheckedCreateWithoutStudentsInputObjectSchema } from './StudyGroupUncheckedCreateWithoutStudentsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupUpsertWithoutStudentsInput> = z
  .object({
    update: z.union([
      z.lazy(() => StudyGroupUpdateWithoutStudentsInputObjectSchema),
      z.lazy(() => StudyGroupUncheckedUpdateWithoutStudentsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => StudyGroupCreateWithoutStudentsInputObjectSchema),
      z.lazy(() => StudyGroupUncheckedCreateWithoutStudentsInputObjectSchema),
    ]),
  })
  .strict();

export const StudyGroupUpsertWithoutStudentsInputObjectSchema = Schema;
