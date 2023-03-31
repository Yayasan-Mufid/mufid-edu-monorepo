import { z } from 'zod';
import { ExamSheetSectionCreateWithoutItemsInputObjectSchema } from './ExamSheetSectionCreateWithoutItemsInput.schema';
import { ExamSheetSectionUncheckedCreateWithoutItemsInputObjectSchema } from './ExamSheetSectionUncheckedCreateWithoutItemsInput.schema';
import { ExamSheetSectionCreateOrConnectWithoutItemsInputObjectSchema } from './ExamSheetSectionCreateOrConnectWithoutItemsInput.schema';
import { ExamSheetSectionWhereUniqueInputObjectSchema } from './ExamSheetSectionWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSheetSectionCreateNestedOneWithoutItemsInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ExamSheetSectionCreateWithoutItemsInputObjectSchema),
          z.lazy(
            () => ExamSheetSectionUncheckedCreateWithoutItemsInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () => ExamSheetSectionCreateOrConnectWithoutItemsInputObjectSchema,
        )
        .optional(),
      connect: z
        .lazy(() => ExamSheetSectionWhereUniqueInputObjectSchema)
        .optional(),
    })
    .strict();

export const ExamSheetSectionCreateNestedOneWithoutItemsInputObjectSchema =
  Schema;
