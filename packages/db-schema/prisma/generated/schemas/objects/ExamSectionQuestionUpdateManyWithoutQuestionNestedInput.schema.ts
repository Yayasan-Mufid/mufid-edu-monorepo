import { z } from 'zod';
import { ExamSectionQuestionCreateWithoutQuestionInputObjectSchema } from './ExamSectionQuestionCreateWithoutQuestionInput.schema';
import { ExamSectionQuestionUncheckedCreateWithoutQuestionInputObjectSchema } from './ExamSectionQuestionUncheckedCreateWithoutQuestionInput.schema';
import { ExamSectionQuestionCreateOrConnectWithoutQuestionInputObjectSchema } from './ExamSectionQuestionCreateOrConnectWithoutQuestionInput.schema';
import { ExamSectionQuestionUpsertWithWhereUniqueWithoutQuestionInputObjectSchema } from './ExamSectionQuestionUpsertWithWhereUniqueWithoutQuestionInput.schema';
import { ExamSectionQuestionCreateManyQuestionInputEnvelopeObjectSchema } from './ExamSectionQuestionCreateManyQuestionInputEnvelope.schema';
import { ExamSectionQuestionWhereUniqueInputObjectSchema } from './ExamSectionQuestionWhereUniqueInput.schema';
import { ExamSectionQuestionUpdateWithWhereUniqueWithoutQuestionInputObjectSchema } from './ExamSectionQuestionUpdateWithWhereUniqueWithoutQuestionInput.schema';
import { ExamSectionQuestionUpdateManyWithWhereWithoutQuestionInputObjectSchema } from './ExamSectionQuestionUpdateManyWithWhereWithoutQuestionInput.schema';
import { ExamSectionQuestionScalarWhereInputObjectSchema } from './ExamSectionQuestionScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSectionQuestionUpdateManyWithoutQuestionNestedInput> =
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
      upsert: z
        .union([
          z.lazy(
            () =>
              ExamSectionQuestionUpsertWithWhereUniqueWithoutQuestionInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ExamSectionQuestionUpsertWithWhereUniqueWithoutQuestionInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(
          () => ExamSectionQuestionCreateManyQuestionInputEnvelopeObjectSchema,
        )
        .optional(),
      set: z
        .union([
          z.lazy(() => ExamSectionQuestionWhereUniqueInputObjectSchema),
          z.lazy(() => ExamSectionQuestionWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => ExamSectionQuestionWhereUniqueInputObjectSchema),
          z.lazy(() => ExamSectionQuestionWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => ExamSectionQuestionWhereUniqueInputObjectSchema),
          z.lazy(() => ExamSectionQuestionWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => ExamSectionQuestionWhereUniqueInputObjectSchema),
          z.lazy(() => ExamSectionQuestionWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              ExamSectionQuestionUpdateWithWhereUniqueWithoutQuestionInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ExamSectionQuestionUpdateWithWhereUniqueWithoutQuestionInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              ExamSectionQuestionUpdateManyWithWhereWithoutQuestionInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ExamSectionQuestionUpdateManyWithWhereWithoutQuestionInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => ExamSectionQuestionScalarWhereInputObjectSchema),
          z.lazy(() => ExamSectionQuestionScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ExamSectionQuestionUpdateManyWithoutQuestionNestedInputObjectSchema =
  Schema;
