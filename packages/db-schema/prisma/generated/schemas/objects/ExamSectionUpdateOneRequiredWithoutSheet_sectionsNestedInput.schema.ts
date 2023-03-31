import { z } from 'zod';
import { ExamSectionCreateWithoutSheet_sectionsInputObjectSchema } from './ExamSectionCreateWithoutSheet_sectionsInput.schema';
import { ExamSectionUncheckedCreateWithoutSheet_sectionsInputObjectSchema } from './ExamSectionUncheckedCreateWithoutSheet_sectionsInput.schema';
import { ExamSectionCreateOrConnectWithoutSheet_sectionsInputObjectSchema } from './ExamSectionCreateOrConnectWithoutSheet_sectionsInput.schema';
import { ExamSectionUpsertWithoutSheet_sectionsInputObjectSchema } from './ExamSectionUpsertWithoutSheet_sectionsInput.schema';
import { ExamSectionWhereUniqueInputObjectSchema } from './ExamSectionWhereUniqueInput.schema';
import { ExamSectionUpdateWithoutSheet_sectionsInputObjectSchema } from './ExamSectionUpdateWithoutSheet_sectionsInput.schema';
import { ExamSectionUncheckedUpdateWithoutSheet_sectionsInputObjectSchema } from './ExamSectionUncheckedUpdateWithoutSheet_sectionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSectionUpdateOneRequiredWithoutSheet_sectionsNestedInput> =
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
      upsert: z
        .lazy(() => ExamSectionUpsertWithoutSheet_sectionsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => ExamSectionWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => ExamSectionUpdateWithoutSheet_sectionsInputObjectSchema),
          z.lazy(
            () =>
              ExamSectionUncheckedUpdateWithoutSheet_sectionsInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const ExamSectionUpdateOneRequiredWithoutSheet_sectionsNestedInputObjectSchema =
  Schema;
