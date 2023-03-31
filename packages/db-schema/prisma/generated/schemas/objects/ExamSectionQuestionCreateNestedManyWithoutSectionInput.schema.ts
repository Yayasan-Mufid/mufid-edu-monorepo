import { z } from 'zod';
import { ExamSectionQuestionCreateWithoutSectionInputObjectSchema } from './ExamSectionQuestionCreateWithoutSectionInput.schema';
import { ExamSectionQuestionUncheckedCreateWithoutSectionInputObjectSchema } from './ExamSectionQuestionUncheckedCreateWithoutSectionInput.schema';
import { ExamSectionQuestionCreateOrConnectWithoutSectionInputObjectSchema } from './ExamSectionQuestionCreateOrConnectWithoutSectionInput.schema';
import { ExamSectionQuestionCreateManySectionInputEnvelopeObjectSchema } from './ExamSectionQuestionCreateManySectionInputEnvelope.schema';
import { ExamSectionQuestionWhereUniqueInputObjectSchema } from './ExamSectionQuestionWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSectionQuestionCreateNestedManyWithoutSectionInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () => ExamSectionQuestionCreateWithoutSectionInputObjectSchema,
          ),
          z
            .lazy(
              () => ExamSectionQuestionCreateWithoutSectionInputObjectSchema,
            )
            .array(),
          z.lazy(
            () =>
              ExamSectionQuestionUncheckedCreateWithoutSectionInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ExamSectionQuestionUncheckedCreateWithoutSectionInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              ExamSectionQuestionCreateOrConnectWithoutSectionInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ExamSectionQuestionCreateOrConnectWithoutSectionInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(
          () => ExamSectionQuestionCreateManySectionInputEnvelopeObjectSchema,
        )
        .optional(),
      connect: z
        .union([
          z.lazy(() => ExamSectionQuestionWhereUniqueInputObjectSchema),
          z.lazy(() => ExamSectionQuestionWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ExamSectionQuestionCreateNestedManyWithoutSectionInputObjectSchema =
  Schema;
