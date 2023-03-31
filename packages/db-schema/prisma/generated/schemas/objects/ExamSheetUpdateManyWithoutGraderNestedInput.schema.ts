import { z } from 'zod';
import { ExamSheetCreateWithoutGraderInputObjectSchema } from './ExamSheetCreateWithoutGraderInput.schema';
import { ExamSheetUncheckedCreateWithoutGraderInputObjectSchema } from './ExamSheetUncheckedCreateWithoutGraderInput.schema';
import { ExamSheetCreateOrConnectWithoutGraderInputObjectSchema } from './ExamSheetCreateOrConnectWithoutGraderInput.schema';
import { ExamSheetUpsertWithWhereUniqueWithoutGraderInputObjectSchema } from './ExamSheetUpsertWithWhereUniqueWithoutGraderInput.schema';
import { ExamSheetCreateManyGraderInputEnvelopeObjectSchema } from './ExamSheetCreateManyGraderInputEnvelope.schema';
import { ExamSheetWhereUniqueInputObjectSchema } from './ExamSheetWhereUniqueInput.schema';
import { ExamSheetUpdateWithWhereUniqueWithoutGraderInputObjectSchema } from './ExamSheetUpdateWithWhereUniqueWithoutGraderInput.schema';
import { ExamSheetUpdateManyWithWhereWithoutGraderInputObjectSchema } from './ExamSheetUpdateManyWithWhereWithoutGraderInput.schema';
import { ExamSheetScalarWhereInputObjectSchema } from './ExamSheetScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSheetUpdateManyWithoutGraderNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ExamSheetCreateWithoutGraderInputObjectSchema),
        z.lazy(() => ExamSheetCreateWithoutGraderInputObjectSchema).array(),
        z.lazy(() => ExamSheetUncheckedCreateWithoutGraderInputObjectSchema),
        z
          .lazy(() => ExamSheetUncheckedCreateWithoutGraderInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => ExamSheetCreateOrConnectWithoutGraderInputObjectSchema),
        z
          .lazy(() => ExamSheetCreateOrConnectWithoutGraderInputObjectSchema)
          .array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(
          () => ExamSheetUpsertWithWhereUniqueWithoutGraderInputObjectSchema,
        ),
        z
          .lazy(
            () => ExamSheetUpsertWithWhereUniqueWithoutGraderInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => ExamSheetCreateManyGraderInputEnvelopeObjectSchema)
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
          () => ExamSheetUpdateWithWhereUniqueWithoutGraderInputObjectSchema,
        ),
        z
          .lazy(
            () => ExamSheetUpdateWithWhereUniqueWithoutGraderInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(
          () => ExamSheetUpdateManyWithWhereWithoutGraderInputObjectSchema,
        ),
        z
          .lazy(
            () => ExamSheetUpdateManyWithWhereWithoutGraderInputObjectSchema,
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

export const ExamSheetUpdateManyWithoutGraderNestedInputObjectSchema = Schema;
