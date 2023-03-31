import { z } from 'zod';
import { StudyGroupWhereUniqueInputObjectSchema } from './StudyGroupWhereUniqueInput.schema';
import { StudyGroupCreateWithoutStudentsInputObjectSchema } from './StudyGroupCreateWithoutStudentsInput.schema';
import { StudyGroupUncheckedCreateWithoutStudentsInputObjectSchema } from './StudyGroupUncheckedCreateWithoutStudentsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupCreateOrConnectWithoutStudentsInput> =
  z
    .object({
      where: z.lazy(() => StudyGroupWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => StudyGroupCreateWithoutStudentsInputObjectSchema),
        z.lazy(() => StudyGroupUncheckedCreateWithoutStudentsInputObjectSchema),
      ]),
    })
    .strict();

export const StudyGroupCreateOrConnectWithoutStudentsInputObjectSchema = Schema;
