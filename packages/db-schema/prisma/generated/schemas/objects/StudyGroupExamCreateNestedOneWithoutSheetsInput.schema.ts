import { z } from 'zod';
import { StudyGroupExamCreateWithoutSheetsInputObjectSchema } from './StudyGroupExamCreateWithoutSheetsInput.schema';
import { StudyGroupExamUncheckedCreateWithoutSheetsInputObjectSchema } from './StudyGroupExamUncheckedCreateWithoutSheetsInput.schema';
import { StudyGroupExamCreateOrConnectWithoutSheetsInputObjectSchema } from './StudyGroupExamCreateOrConnectWithoutSheetsInput.schema';
import { StudyGroupExamWhereUniqueInputObjectSchema } from './StudyGroupExamWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupExamCreateNestedOneWithoutSheetsInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => StudyGroupExamCreateWithoutSheetsInputObjectSchema),
          z.lazy(
            () => StudyGroupExamUncheckedCreateWithoutSheetsInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => StudyGroupExamCreateOrConnectWithoutSheetsInputObjectSchema)
        .optional(),
      connect: z
        .lazy(() => StudyGroupExamWhereUniqueInputObjectSchema)
        .optional(),
    })
    .strict();

export const StudyGroupExamCreateNestedOneWithoutSheetsInputObjectSchema =
  Schema;
