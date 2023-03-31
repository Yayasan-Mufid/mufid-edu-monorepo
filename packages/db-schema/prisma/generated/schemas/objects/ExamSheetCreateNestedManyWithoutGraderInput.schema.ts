import { z } from 'zod';
import { ExamSheetCreateWithoutGraderInputObjectSchema } from './ExamSheetCreateWithoutGraderInput.schema';
import { ExamSheetUncheckedCreateWithoutGraderInputObjectSchema } from './ExamSheetUncheckedCreateWithoutGraderInput.schema';
import { ExamSheetCreateOrConnectWithoutGraderInputObjectSchema } from './ExamSheetCreateOrConnectWithoutGraderInput.schema';
import { ExamSheetCreateManyGraderInputEnvelopeObjectSchema } from './ExamSheetCreateManyGraderInputEnvelope.schema';
import { ExamSheetWhereUniqueInputObjectSchema } from './ExamSheetWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSheetCreateNestedManyWithoutGraderInput> = z
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
    createMany: z
      .lazy(() => ExamSheetCreateManyGraderInputEnvelopeObjectSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => ExamSheetWhereUniqueInputObjectSchema),
        z.lazy(() => ExamSheetWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const ExamSheetCreateNestedManyWithoutGraderInputObjectSchema = Schema;
