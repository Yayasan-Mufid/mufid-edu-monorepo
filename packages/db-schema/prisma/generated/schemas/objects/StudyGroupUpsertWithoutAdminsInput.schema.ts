import { z } from 'zod';
import { StudyGroupUpdateWithoutAdminsInputObjectSchema } from './StudyGroupUpdateWithoutAdminsInput.schema';
import { StudyGroupUncheckedUpdateWithoutAdminsInputObjectSchema } from './StudyGroupUncheckedUpdateWithoutAdminsInput.schema';
import { StudyGroupCreateWithoutAdminsInputObjectSchema } from './StudyGroupCreateWithoutAdminsInput.schema';
import { StudyGroupUncheckedCreateWithoutAdminsInputObjectSchema } from './StudyGroupUncheckedCreateWithoutAdminsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupUpsertWithoutAdminsInput> = z
  .object({
    update: z.union([
      z.lazy(() => StudyGroupUpdateWithoutAdminsInputObjectSchema),
      z.lazy(() => StudyGroupUncheckedUpdateWithoutAdminsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => StudyGroupCreateWithoutAdminsInputObjectSchema),
      z.lazy(() => StudyGroupUncheckedCreateWithoutAdminsInputObjectSchema),
    ]),
  })
  .strict();

export const StudyGroupUpsertWithoutAdminsInputObjectSchema = Schema;
