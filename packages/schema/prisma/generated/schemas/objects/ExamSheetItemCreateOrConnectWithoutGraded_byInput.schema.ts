import { z } from 'zod';
import { ExamSheetItemWhereUniqueInputObjectSchema } from './ExamSheetItemWhereUniqueInput.schema';
import { ExamSheetItemCreateWithoutGraded_byInputObjectSchema } from './ExamSheetItemCreateWithoutGraded_byInput.schema';
import { ExamSheetItemUncheckedCreateWithoutGraded_byInputObjectSchema } from './ExamSheetItemUncheckedCreateWithoutGraded_byInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSheetItemCreateOrConnectWithoutGraded_byInput> =
  z
    .object({
      where: z.lazy(() => ExamSheetItemWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => ExamSheetItemCreateWithoutGraded_byInputObjectSchema),
        z.lazy(
          () => ExamSheetItemUncheckedCreateWithoutGraded_byInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ExamSheetItemCreateOrConnectWithoutGraded_byInputObjectSchema =
  Schema;
