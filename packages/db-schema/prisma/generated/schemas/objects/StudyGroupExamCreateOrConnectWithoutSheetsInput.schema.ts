import { z } from 'zod';
import { StudyGroupExamWhereUniqueInputObjectSchema } from './StudyGroupExamWhereUniqueInput.schema';
import { StudyGroupExamCreateWithoutSheetsInputObjectSchema } from './StudyGroupExamCreateWithoutSheetsInput.schema';
import { StudyGroupExamUncheckedCreateWithoutSheetsInputObjectSchema } from './StudyGroupExamUncheckedCreateWithoutSheetsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupExamCreateOrConnectWithoutSheetsInput> =
  z
    .object({
      where: z.lazy(() => StudyGroupExamWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => StudyGroupExamCreateWithoutSheetsInputObjectSchema),
        z.lazy(
          () => StudyGroupExamUncheckedCreateWithoutSheetsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const StudyGroupExamCreateOrConnectWithoutSheetsInputObjectSchema =
  Schema;
