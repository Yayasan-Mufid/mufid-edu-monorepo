import { z } from 'zod';
import { StudyGroupExamWhereUniqueInputObjectSchema } from './StudyGroupExamWhereUniqueInput.schema';
import { StudyGroupExamCreateWithoutExamInputObjectSchema } from './StudyGroupExamCreateWithoutExamInput.schema';
import { StudyGroupExamUncheckedCreateWithoutExamInputObjectSchema } from './StudyGroupExamUncheckedCreateWithoutExamInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupExamCreateOrConnectWithoutExamInput> =
  z
    .object({
      where: z.lazy(() => StudyGroupExamWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => StudyGroupExamCreateWithoutExamInputObjectSchema),
        z.lazy(() => StudyGroupExamUncheckedCreateWithoutExamInputObjectSchema),
      ]),
    })
    .strict();

export const StudyGroupExamCreateOrConnectWithoutExamInputObjectSchema = Schema;
