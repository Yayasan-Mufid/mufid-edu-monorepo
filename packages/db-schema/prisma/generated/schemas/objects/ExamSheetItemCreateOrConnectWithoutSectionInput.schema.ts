import { z } from 'zod';
import { ExamSheetItemWhereUniqueInputObjectSchema } from './ExamSheetItemWhereUniqueInput.schema';
import { ExamSheetItemCreateWithoutSectionInputObjectSchema } from './ExamSheetItemCreateWithoutSectionInput.schema';
import { ExamSheetItemUncheckedCreateWithoutSectionInputObjectSchema } from './ExamSheetItemUncheckedCreateWithoutSectionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSheetItemCreateOrConnectWithoutSectionInput> =
  z
    .object({
      where: z.lazy(() => ExamSheetItemWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => ExamSheetItemCreateWithoutSectionInputObjectSchema),
        z.lazy(
          () => ExamSheetItemUncheckedCreateWithoutSectionInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ExamSheetItemCreateOrConnectWithoutSectionInputObjectSchema =
  Schema;
