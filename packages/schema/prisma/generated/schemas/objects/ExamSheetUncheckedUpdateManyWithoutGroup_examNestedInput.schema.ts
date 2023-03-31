import { z } from 'zod';
import { ExamSheetCreateWithoutGroup_examInputObjectSchema } from './ExamSheetCreateWithoutGroup_examInput.schema';
import { ExamSheetUncheckedCreateWithoutGroup_examInputObjectSchema } from './ExamSheetUncheckedCreateWithoutGroup_examInput.schema';
import { ExamSheetCreateOrConnectWithoutGroup_examInputObjectSchema } from './ExamSheetCreateOrConnectWithoutGroup_examInput.schema';
import { ExamSheetUpsertWithWhereUniqueWithoutGroup_examInputObjectSchema } from './ExamSheetUpsertWithWhereUniqueWithoutGroup_examInput.schema';
import { ExamSheetCreateManyGroup_examInputEnvelopeObjectSchema } from './ExamSheetCreateManyGroup_examInputEnvelope.schema';
import { ExamSheetWhereUniqueInputObjectSchema } from './ExamSheetWhereUniqueInput.schema';
import { ExamSheetUpdateWithWhereUniqueWithoutGroup_examInputObjectSchema } from './ExamSheetUpdateWithWhereUniqueWithoutGroup_examInput.schema';
import { ExamSheetUpdateManyWithWhereWithoutGroup_examInputObjectSchema } from './ExamSheetUpdateManyWithWhereWithoutGroup_examInput.schema';
import { ExamSheetScalarWhereInputObjectSchema } from './ExamSheetScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSheetUncheckedUpdateManyWithoutGroup_examNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ExamSheetCreateWithoutGroup_examInputObjectSchema),
          z
            .lazy(() => ExamSheetCreateWithoutGroup_examInputObjectSchema)
            .array(),
          z.lazy(
            () => ExamSheetUncheckedCreateWithoutGroup_examInputObjectSchema,
          ),
          z
            .lazy(
              () => ExamSheetUncheckedCreateWithoutGroup_examInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => ExamSheetCreateOrConnectWithoutGroup_examInputObjectSchema,
          ),
          z
            .lazy(
              () => ExamSheetCreateOrConnectWithoutGroup_examInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              ExamSheetUpsertWithWhereUniqueWithoutGroup_examInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ExamSheetUpsertWithWhereUniqueWithoutGroup_examInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => ExamSheetCreateManyGroup_examInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => ExamSheetWhereUniqueInputObjectSchema),
          z.lazy(() => ExamSheetWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => ExamSheetWhereUniqueInputObjectSchema),
          z.lazy(() => ExamSheetWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => ExamSheetWhereUniqueInputObjectSchema),
          z.lazy(() => ExamSheetWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => ExamSheetWhereUniqueInputObjectSchema),
          z.lazy(() => ExamSheetWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              ExamSheetUpdateWithWhereUniqueWithoutGroup_examInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ExamSheetUpdateWithWhereUniqueWithoutGroup_examInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              ExamSheetUpdateManyWithWhereWithoutGroup_examInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ExamSheetUpdateManyWithWhereWithoutGroup_examInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => ExamSheetScalarWhereInputObjectSchema),
          z.lazy(() => ExamSheetScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ExamSheetUncheckedUpdateManyWithoutGroup_examNestedInputObjectSchema =
  Schema;
