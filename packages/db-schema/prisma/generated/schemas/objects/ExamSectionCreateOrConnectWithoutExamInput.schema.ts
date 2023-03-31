import { z } from 'zod';
import { ExamSectionWhereUniqueInputObjectSchema } from './ExamSectionWhereUniqueInput.schema';
import { ExamSectionCreateWithoutExamInputObjectSchema } from './ExamSectionCreateWithoutExamInput.schema';
import { ExamSectionUncheckedCreateWithoutExamInputObjectSchema } from './ExamSectionUncheckedCreateWithoutExamInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSectionCreateOrConnectWithoutExamInput> = z
  .object({
    where: z.lazy(() => ExamSectionWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ExamSectionCreateWithoutExamInputObjectSchema),
      z.lazy(() => ExamSectionUncheckedCreateWithoutExamInputObjectSchema),
    ]),
  })
  .strict();

export const ExamSectionCreateOrConnectWithoutExamInputObjectSchema = Schema;
