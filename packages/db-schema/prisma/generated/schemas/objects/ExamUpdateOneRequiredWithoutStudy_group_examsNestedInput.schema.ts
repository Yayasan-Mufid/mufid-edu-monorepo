import { z } from 'zod';
import { ExamCreateWithoutStudy_group_examsInputObjectSchema } from './ExamCreateWithoutStudy_group_examsInput.schema';
import { ExamUncheckedCreateWithoutStudy_group_examsInputObjectSchema } from './ExamUncheckedCreateWithoutStudy_group_examsInput.schema';
import { ExamCreateOrConnectWithoutStudy_group_examsInputObjectSchema } from './ExamCreateOrConnectWithoutStudy_group_examsInput.schema';
import { ExamUpsertWithoutStudy_group_examsInputObjectSchema } from './ExamUpsertWithoutStudy_group_examsInput.schema';
import { ExamWhereUniqueInputObjectSchema } from './ExamWhereUniqueInput.schema';
import { ExamUpdateWithoutStudy_group_examsInputObjectSchema } from './ExamUpdateWithoutStudy_group_examsInput.schema';
import { ExamUncheckedUpdateWithoutStudy_group_examsInputObjectSchema } from './ExamUncheckedUpdateWithoutStudy_group_examsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamUpdateOneRequiredWithoutStudy_group_examsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ExamCreateWithoutStudy_group_examsInputObjectSchema),
          z.lazy(
            () => ExamUncheckedCreateWithoutStudy_group_examsInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () => ExamCreateOrConnectWithoutStudy_group_examsInputObjectSchema,
        )
        .optional(),
      upsert: z
        .lazy(() => ExamUpsertWithoutStudy_group_examsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => ExamWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => ExamUpdateWithoutStudy_group_examsInputObjectSchema),
          z.lazy(
            () => ExamUncheckedUpdateWithoutStudy_group_examsInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const ExamUpdateOneRequiredWithoutStudy_group_examsNestedInputObjectSchema =
  Schema;
