import { z } from 'zod';
import { ExamSheetCreateWithoutUserInputObjectSchema } from './ExamSheetCreateWithoutUserInput.schema';
import { ExamSheetUncheckedCreateWithoutUserInputObjectSchema } from './ExamSheetUncheckedCreateWithoutUserInput.schema';
import { ExamSheetCreateOrConnectWithoutUserInputObjectSchema } from './ExamSheetCreateOrConnectWithoutUserInput.schema';
import { ExamSheetUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './ExamSheetUpsertWithWhereUniqueWithoutUserInput.schema';
import { ExamSheetCreateManyUserInputEnvelopeObjectSchema } from './ExamSheetCreateManyUserInputEnvelope.schema';
import { ExamSheetWhereUniqueInputObjectSchema } from './ExamSheetWhereUniqueInput.schema';
import { ExamSheetUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './ExamSheetUpdateWithWhereUniqueWithoutUserInput.schema';
import { ExamSheetUpdateManyWithWhereWithoutUserInputObjectSchema } from './ExamSheetUpdateManyWithWhereWithoutUserInput.schema';
import { ExamSheetScalarWhereInputObjectSchema } from './ExamSheetScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSheetUpdateManyWithoutUserNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ExamSheetCreateWithoutUserInputObjectSchema),
        z.lazy(() => ExamSheetCreateWithoutUserInputObjectSchema).array(),
        z.lazy(() => ExamSheetUncheckedCreateWithoutUserInputObjectSchema),
        z
          .lazy(() => ExamSheetUncheckedCreateWithoutUserInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => ExamSheetCreateOrConnectWithoutUserInputObjectSchema),
        z
          .lazy(() => ExamSheetCreateOrConnectWithoutUserInputObjectSchema)
          .array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(
          () => ExamSheetUpsertWithWhereUniqueWithoutUserInputObjectSchema,
        ),
        z
          .lazy(
            () => ExamSheetUpsertWithWhereUniqueWithoutUserInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => ExamSheetCreateManyUserInputEnvelopeObjectSchema)
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
          () => ExamSheetUpdateWithWhereUniqueWithoutUserInputObjectSchema,
        ),
        z
          .lazy(
            () => ExamSheetUpdateWithWhereUniqueWithoutUserInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => ExamSheetUpdateManyWithWhereWithoutUserInputObjectSchema),
        z
          .lazy(() => ExamSheetUpdateManyWithWhereWithoutUserInputObjectSchema)
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

export const ExamSheetUpdateManyWithoutUserNestedInputObjectSchema = Schema;
