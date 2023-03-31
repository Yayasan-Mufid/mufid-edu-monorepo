import { z } from 'zod';
import { ExamSheetSectionWhereUniqueInputObjectSchema } from './ExamSheetSectionWhereUniqueInput.schema';
import { ExamSheetSectionCreateWithoutSectionInputObjectSchema } from './ExamSheetSectionCreateWithoutSectionInput.schema';
import { ExamSheetSectionUncheckedCreateWithoutSectionInputObjectSchema } from './ExamSheetSectionUncheckedCreateWithoutSectionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSheetSectionCreateOrConnectWithoutSectionInput> =
  z
    .object({
      where: z.lazy(() => ExamSheetSectionWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => ExamSheetSectionCreateWithoutSectionInputObjectSchema),
        z.lazy(
          () => ExamSheetSectionUncheckedCreateWithoutSectionInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ExamSheetSectionCreateOrConnectWithoutSectionInputObjectSchema =
  Schema;
