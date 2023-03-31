import { z } from 'zod';
import { QuestionCreateWithoutProgramInputObjectSchema } from './QuestionCreateWithoutProgramInput.schema';
import { QuestionUncheckedCreateWithoutProgramInputObjectSchema } from './QuestionUncheckedCreateWithoutProgramInput.schema';
import { QuestionCreateOrConnectWithoutProgramInputObjectSchema } from './QuestionCreateOrConnectWithoutProgramInput.schema';
import { QuestionCreateManyProgramInputEnvelopeObjectSchema } from './QuestionCreateManyProgramInputEnvelope.schema';
import { QuestionWhereUniqueInputObjectSchema } from './QuestionWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.QuestionCreateNestedManyWithoutProgramInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => QuestionCreateWithoutProgramInputObjectSchema),
        z.lazy(() => QuestionCreateWithoutProgramInputObjectSchema).array(),
        z.lazy(() => QuestionUncheckedCreateWithoutProgramInputObjectSchema),
        z
          .lazy(() => QuestionUncheckedCreateWithoutProgramInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => QuestionCreateOrConnectWithoutProgramInputObjectSchema),
        z
          .lazy(() => QuestionCreateOrConnectWithoutProgramInputObjectSchema)
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => QuestionCreateManyProgramInputEnvelopeObjectSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => QuestionWhereUniqueInputObjectSchema),
        z.lazy(() => QuestionWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const QuestionCreateNestedManyWithoutProgramInputObjectSchema = Schema;
