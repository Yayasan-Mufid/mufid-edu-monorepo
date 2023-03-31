import { z } from 'zod';
import { ExamSheetItemWhereUniqueInputObjectSchema } from './ExamSheetItemWhereUniqueInput.schema';
import { ExamSheetItemCreateWithoutQuestionInputObjectSchema } from './ExamSheetItemCreateWithoutQuestionInput.schema';
import { ExamSheetItemUncheckedCreateWithoutQuestionInputObjectSchema } from './ExamSheetItemUncheckedCreateWithoutQuestionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSheetItemCreateOrConnectWithoutQuestionInput> =
  z
    .object({
      where: z.lazy(() => ExamSheetItemWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => ExamSheetItemCreateWithoutQuestionInputObjectSchema),
        z.lazy(
          () => ExamSheetItemUncheckedCreateWithoutQuestionInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ExamSheetItemCreateOrConnectWithoutQuestionInputObjectSchema =
  Schema;
