import { z } from 'zod';
import { ExamWhereUniqueInputObjectSchema } from './ExamWhereUniqueInput.schema';
import { ExamCreateWithoutStudy_group_examsInputObjectSchema } from './ExamCreateWithoutStudy_group_examsInput.schema';
import { ExamUncheckedCreateWithoutStudy_group_examsInputObjectSchema } from './ExamUncheckedCreateWithoutStudy_group_examsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamCreateOrConnectWithoutStudy_group_examsInput> =
  z
    .object({
      where: z.lazy(() => ExamWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => ExamCreateWithoutStudy_group_examsInputObjectSchema),
        z.lazy(
          () => ExamUncheckedCreateWithoutStudy_group_examsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ExamCreateOrConnectWithoutStudy_group_examsInputObjectSchema =
  Schema;
