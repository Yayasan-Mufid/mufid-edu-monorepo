import { z } from 'zod';
import { ExamSectionCreateWithoutSheet_sectionsInputObjectSchema } from './ExamSectionCreateWithoutSheet_sectionsInput.schema';
import { ExamSectionUncheckedCreateWithoutSheet_sectionsInputObjectSchema } from './ExamSectionUncheckedCreateWithoutSheet_sectionsInput.schema';
import { ExamSectionCreateOrConnectWithoutSheet_sectionsInputObjectSchema } from './ExamSectionCreateOrConnectWithoutSheet_sectionsInput.schema';
import { ExamSectionWhereUniqueInputObjectSchema } from './ExamSectionWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSectionCreateNestedOneWithoutSheet_sectionsInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ExamSectionCreateWithoutSheet_sectionsInputObjectSchema),
          z.lazy(
            () =>
              ExamSectionUncheckedCreateWithoutSheet_sectionsInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () =>
            ExamSectionCreateOrConnectWithoutSheet_sectionsInputObjectSchema,
        )
        .optional(),
      connect: z.lazy(() => ExamSectionWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const ExamSectionCreateNestedOneWithoutSheet_sectionsInputObjectSchema =
  Schema;
