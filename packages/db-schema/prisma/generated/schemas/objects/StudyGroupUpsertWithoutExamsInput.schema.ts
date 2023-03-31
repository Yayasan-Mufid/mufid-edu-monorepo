import { z } from 'zod';
import { StudyGroupUpdateWithoutExamsInputObjectSchema } from './StudyGroupUpdateWithoutExamsInput.schema';
import { StudyGroupUncheckedUpdateWithoutExamsInputObjectSchema } from './StudyGroupUncheckedUpdateWithoutExamsInput.schema';
import { StudyGroupCreateWithoutExamsInputObjectSchema } from './StudyGroupCreateWithoutExamsInput.schema';
import { StudyGroupUncheckedCreateWithoutExamsInputObjectSchema } from './StudyGroupUncheckedCreateWithoutExamsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupUpsertWithoutExamsInput> = z
  .object({
    update: z.union([
      z.lazy(() => StudyGroupUpdateWithoutExamsInputObjectSchema),
      z.lazy(() => StudyGroupUncheckedUpdateWithoutExamsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => StudyGroupCreateWithoutExamsInputObjectSchema),
      z.lazy(() => StudyGroupUncheckedCreateWithoutExamsInputObjectSchema),
    ]),
  })
  .strict();

export const StudyGroupUpsertWithoutExamsInputObjectSchema = Schema;
