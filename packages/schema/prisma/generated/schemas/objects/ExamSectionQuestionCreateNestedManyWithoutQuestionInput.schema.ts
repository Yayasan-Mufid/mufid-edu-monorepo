import { z } from 'zod';
import { ExamSectionQuestionCreateWithoutQuestionInputObjectSchema } from './ExamSectionQuestionCreateWithoutQuestionInput.schema';
import { ExamSectionQuestionUncheckedCreateWithoutQuestionInputObjectSchema } from './ExamSectionQuestionUncheckedCreateWithoutQuestionInput.schema';
import { ExamSectionQuestionCreateOrConnectWithoutQuestionInputObjectSchema } from './ExamSectionQuestionCreateOrConnectWithoutQuestionInput.schema';
import { ExamSectionQuestionCreateManyQuestionInputEnvelopeObjectSchema } from './ExamSectionQuestionCreateManyQuestionInputEnvelope.schema';
import { ExamSectionQuestionWhereUniqueInputObjectSchema } from './ExamSectionQuestionWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSectionQuestionCreateNestedManyWithoutQuestionInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () => ExamSectionQuestionCreateWithoutQuestionInputObjectSchema,
          ),
          z
            .lazy(
              () => ExamSectionQuestionCreateWithoutQuestionInputObjectSchema,
            )
            .array(),
          z.lazy(
            () =>
              ExamSectionQuestionUncheckedCreateWithoutQuestionInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ExamSectionQuestionUncheckedCreateWithoutQuestionInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              ExamSectionQuestionCreateOrConnectWithoutQuestionInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ExamSectionQuestionCreateOrConnectWithoutQuestionInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(
          () => ExamSectionQuestionCreateManyQuestionInputEnvelopeObjectSchema,
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

export const ExamSectionQuestionCreateNestedManyWithoutQuestionInputObjectSchema =
  Schema;
