import { z } from 'zod';
import { ExamSheetWhereUniqueInputObjectSchema } from './ExamSheetWhereUniqueInput.schema';
import { ExamSheetUpdateWithoutGroup_examInputObjectSchema } from './ExamSheetUpdateWithoutGroup_examInput.schema';
import { ExamSheetUncheckedUpdateWithoutGroup_examInputObjectSchema } from './ExamSheetUncheckedUpdateWithoutGroup_examInput.schema';
import { ExamSheetCreateWithoutGroup_examInputObjectSchema } from './ExamSheetCreateWithoutGroup_examInput.schema';
import { ExamSheetUncheckedCreateWithoutGroup_examInputObjectSchema } from './ExamSheetUncheckedCreateWithoutGroup_examInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSheetUpsertWithWhereUniqueWithoutGroup_examInput> =
  z
    .object({
      where: z.lazy(() => ExamSheetWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => ExamSheetUpdateWithoutGroup_examInputObjectSchema),
        z.lazy(
          () => ExamSheetUncheckedUpdateWithoutGroup_examInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => ExamSheetCreateWithoutGroup_examInputObjectSchema),
        z.lazy(
          () => ExamSheetUncheckedCreateWithoutGroup_examInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ExamSheetUpsertWithWhereUniqueWithoutGroup_examInputObjectSchema =
  Schema;
