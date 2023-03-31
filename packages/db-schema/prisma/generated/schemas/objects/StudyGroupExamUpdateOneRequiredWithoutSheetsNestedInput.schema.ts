import { z } from 'zod';
import { StudyGroupExamCreateWithoutSheetsInputObjectSchema } from './StudyGroupExamCreateWithoutSheetsInput.schema';
import { StudyGroupExamUncheckedCreateWithoutSheetsInputObjectSchema } from './StudyGroupExamUncheckedCreateWithoutSheetsInput.schema';
import { StudyGroupExamCreateOrConnectWithoutSheetsInputObjectSchema } from './StudyGroupExamCreateOrConnectWithoutSheetsInput.schema';
import { StudyGroupExamUpsertWithoutSheetsInputObjectSchema } from './StudyGroupExamUpsertWithoutSheetsInput.schema';
import { StudyGroupExamWhereUniqueInputObjectSchema } from './StudyGroupExamWhereUniqueInput.schema';
import { StudyGroupExamUpdateWithoutSheetsInputObjectSchema } from './StudyGroupExamUpdateWithoutSheetsInput.schema';
import { StudyGroupExamUncheckedUpdateWithoutSheetsInputObjectSchema } from './StudyGroupExamUncheckedUpdateWithoutSheetsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupExamUpdateOneRequiredWithoutSheetsNestedInput> =
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
      upsert: z
        .lazy(() => StudyGroupExamUpsertWithoutSheetsInputObjectSchema)
        .optional(),
      connect: z
        .lazy(() => StudyGroupExamWhereUniqueInputObjectSchema)
        .optional(),
      update: z
        .union([
          z.lazy(() => StudyGroupExamUpdateWithoutSheetsInputObjectSchema),
          z.lazy(
            () => StudyGroupExamUncheckedUpdateWithoutSheetsInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const StudyGroupExamUpdateOneRequiredWithoutSheetsNestedInputObjectSchema =
  Schema;
