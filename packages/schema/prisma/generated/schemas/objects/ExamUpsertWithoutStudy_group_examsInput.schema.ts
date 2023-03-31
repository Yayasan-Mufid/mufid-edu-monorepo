import { z } from 'zod';
import { ExamUpdateWithoutStudy_group_examsInputObjectSchema } from './ExamUpdateWithoutStudy_group_examsInput.schema';
import { ExamUncheckedUpdateWithoutStudy_group_examsInputObjectSchema } from './ExamUncheckedUpdateWithoutStudy_group_examsInput.schema';
import { ExamCreateWithoutStudy_group_examsInputObjectSchema } from './ExamCreateWithoutStudy_group_examsInput.schema';
import { ExamUncheckedCreateWithoutStudy_group_examsInputObjectSchema } from './ExamUncheckedCreateWithoutStudy_group_examsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamUpsertWithoutStudy_group_examsInput> = z
  .object({
    update: z.union([
      z.lazy(() => ExamUpdateWithoutStudy_group_examsInputObjectSchema),
      z.lazy(
        () => ExamUncheckedUpdateWithoutStudy_group_examsInputObjectSchema,
      ),
    ]),
    create: z.union([
      z.lazy(() => ExamCreateWithoutStudy_group_examsInputObjectSchema),
      z.lazy(
        () => ExamUncheckedCreateWithoutStudy_group_examsInputObjectSchema,
      ),
    ]),
  })
  .strict();

export const ExamUpsertWithoutStudy_group_examsInputObjectSchema = Schema;
