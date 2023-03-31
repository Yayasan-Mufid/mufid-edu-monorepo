import { z } from 'zod';
import { ExamSectionCreateWithoutExamInputObjectSchema } from './ExamSectionCreateWithoutExamInput.schema';
import { ExamSectionUncheckedCreateWithoutExamInputObjectSchema } from './ExamSectionUncheckedCreateWithoutExamInput.schema';
import { ExamSectionCreateOrConnectWithoutExamInputObjectSchema } from './ExamSectionCreateOrConnectWithoutExamInput.schema';
import { ExamSectionCreateManyExamInputEnvelopeObjectSchema } from './ExamSectionCreateManyExamInputEnvelope.schema';
import { ExamSectionWhereUniqueInputObjectSchema } from './ExamSectionWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSectionUncheckedCreateNestedManyWithoutExamInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ExamSectionCreateWithoutExamInputObjectSchema),
          z.lazy(() => ExamSectionCreateWithoutExamInputObjectSchema).array(),
          z.lazy(() => ExamSectionUncheckedCreateWithoutExamInputObjectSchema),
          z
            .lazy(() => ExamSectionUncheckedCreateWithoutExamInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => ExamSectionCreateOrConnectWithoutExamInputObjectSchema),
          z
            .lazy(() => ExamSectionCreateOrConnectWithoutExamInputObjectSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => ExamSectionCreateManyExamInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => ExamSectionWhereUniqueInputObjectSchema),
          z.lazy(() => ExamSectionWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ExamSectionUncheckedCreateNestedManyWithoutExamInputObjectSchema =
  Schema;
