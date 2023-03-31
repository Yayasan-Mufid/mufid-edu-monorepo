import { z } from 'zod';
import { ExamSheetSectionWhereUniqueInputObjectSchema } from './ExamSheetSectionWhereUniqueInput.schema';
import { ExamSheetSectionCreateWithoutItemsInputObjectSchema } from './ExamSheetSectionCreateWithoutItemsInput.schema';
import { ExamSheetSectionUncheckedCreateWithoutItemsInputObjectSchema } from './ExamSheetSectionUncheckedCreateWithoutItemsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSheetSectionCreateOrConnectWithoutItemsInput> =
  z
    .object({
      where: z.lazy(() => ExamSheetSectionWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => ExamSheetSectionCreateWithoutItemsInputObjectSchema),
        z.lazy(
          () => ExamSheetSectionUncheckedCreateWithoutItemsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ExamSheetSectionCreateOrConnectWithoutItemsInputObjectSchema =
  Schema;
