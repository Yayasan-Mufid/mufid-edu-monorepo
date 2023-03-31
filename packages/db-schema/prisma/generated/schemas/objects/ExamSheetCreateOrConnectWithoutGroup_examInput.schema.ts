import { z } from 'zod';
import { ExamSheetWhereUniqueInputObjectSchema } from './ExamSheetWhereUniqueInput.schema';
import { ExamSheetCreateWithoutGroup_examInputObjectSchema } from './ExamSheetCreateWithoutGroup_examInput.schema';
import { ExamSheetUncheckedCreateWithoutGroup_examInputObjectSchema } from './ExamSheetUncheckedCreateWithoutGroup_examInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSheetCreateOrConnectWithoutGroup_examInput> =
  z
    .object({
      where: z.lazy(() => ExamSheetWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => ExamSheetCreateWithoutGroup_examInputObjectSchema),
        z.lazy(
          () => ExamSheetUncheckedCreateWithoutGroup_examInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ExamSheetCreateOrConnectWithoutGroup_examInputObjectSchema =
  Schema;
