import { z } from 'zod';
import { ExamCreateWithoutStudy_group_examsInputObjectSchema } from './ExamCreateWithoutStudy_group_examsInput.schema';
import { ExamUncheckedCreateWithoutStudy_group_examsInputObjectSchema } from './ExamUncheckedCreateWithoutStudy_group_examsInput.schema';
import { ExamCreateOrConnectWithoutStudy_group_examsInputObjectSchema } from './ExamCreateOrConnectWithoutStudy_group_examsInput.schema';
import { ExamWhereUniqueInputObjectSchema } from './ExamWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamCreateNestedOneWithoutStudy_group_examsInput> =
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
      connect: z.lazy(() => ExamWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const ExamCreateNestedOneWithoutStudy_group_examsInputObjectSchema =
  Schema;
