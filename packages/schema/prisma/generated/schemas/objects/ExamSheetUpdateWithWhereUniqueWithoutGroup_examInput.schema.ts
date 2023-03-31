import { z } from 'zod';
import { ExamSheetWhereUniqueInputObjectSchema } from './ExamSheetWhereUniqueInput.schema';
import { ExamSheetUpdateWithoutGroup_examInputObjectSchema } from './ExamSheetUpdateWithoutGroup_examInput.schema';
import { ExamSheetUncheckedUpdateWithoutGroup_examInputObjectSchema } from './ExamSheetUncheckedUpdateWithoutGroup_examInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSheetUpdateWithWhereUniqueWithoutGroup_examInput> =
  z
    .object({
      where: z.lazy(() => ExamSheetWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => ExamSheetUpdateWithoutGroup_examInputObjectSchema),
        z.lazy(
          () => ExamSheetUncheckedUpdateWithoutGroup_examInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ExamSheetUpdateWithWhereUniqueWithoutGroup_examInputObjectSchema =
  Schema;
