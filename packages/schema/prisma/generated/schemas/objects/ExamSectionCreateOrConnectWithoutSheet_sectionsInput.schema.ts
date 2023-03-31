import { z } from 'zod';
import { ExamSectionWhereUniqueInputObjectSchema } from './ExamSectionWhereUniqueInput.schema';
import { ExamSectionCreateWithoutSheet_sectionsInputObjectSchema } from './ExamSectionCreateWithoutSheet_sectionsInput.schema';
import { ExamSectionUncheckedCreateWithoutSheet_sectionsInputObjectSchema } from './ExamSectionUncheckedCreateWithoutSheet_sectionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSectionCreateOrConnectWithoutSheet_sectionsInput> =
  z
    .object({
      where: z.lazy(() => ExamSectionWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => ExamSectionCreateWithoutSheet_sectionsInputObjectSchema),
        z.lazy(
          () =>
            ExamSectionUncheckedCreateWithoutSheet_sectionsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ExamSectionCreateOrConnectWithoutSheet_sectionsInputObjectSchema =
  Schema;
