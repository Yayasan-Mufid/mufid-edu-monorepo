import { z } from 'zod';
import { StudyGroupUpdateWithoutApplicantsInputObjectSchema } from './StudyGroupUpdateWithoutApplicantsInput.schema';
import { StudyGroupUncheckedUpdateWithoutApplicantsInputObjectSchema } from './StudyGroupUncheckedUpdateWithoutApplicantsInput.schema';
import { StudyGroupCreateWithoutApplicantsInputObjectSchema } from './StudyGroupCreateWithoutApplicantsInput.schema';
import { StudyGroupUncheckedCreateWithoutApplicantsInputObjectSchema } from './StudyGroupUncheckedCreateWithoutApplicantsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupUpsertWithoutApplicantsInput> = z
  .object({
    update: z.union([
      z.lazy(() => StudyGroupUpdateWithoutApplicantsInputObjectSchema),
      z.lazy(() => StudyGroupUncheckedUpdateWithoutApplicantsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => StudyGroupCreateWithoutApplicantsInputObjectSchema),
      z.lazy(() => StudyGroupUncheckedCreateWithoutApplicantsInputObjectSchema),
    ]),
  })
  .strict();

export const StudyGroupUpsertWithoutApplicantsInputObjectSchema = Schema;
