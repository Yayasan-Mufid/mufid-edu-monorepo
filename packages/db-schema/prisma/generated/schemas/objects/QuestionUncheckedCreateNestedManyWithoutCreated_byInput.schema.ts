import { z } from 'zod';
import { QuestionCreateWithoutCreated_byInputObjectSchema } from './QuestionCreateWithoutCreated_byInput.schema';
import { QuestionUncheckedCreateWithoutCreated_byInputObjectSchema } from './QuestionUncheckedCreateWithoutCreated_byInput.schema';
import { QuestionCreateOrConnectWithoutCreated_byInputObjectSchema } from './QuestionCreateOrConnectWithoutCreated_byInput.schema';
import { QuestionCreateManyCreated_byInputEnvelopeObjectSchema } from './QuestionCreateManyCreated_byInputEnvelope.schema';
import { QuestionWhereUniqueInputObjectSchema } from './QuestionWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.QuestionUncheckedCreateNestedManyWithoutCreated_byInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => QuestionCreateWithoutCreated_byInputObjectSchema),
          z
            .lazy(() => QuestionCreateWithoutCreated_byInputObjectSchema)
            .array(),
          z.lazy(
            () => QuestionUncheckedCreateWithoutCreated_byInputObjectSchema,
          ),
          z
            .lazy(
              () => QuestionUncheckedCreateWithoutCreated_byInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => QuestionCreateOrConnectWithoutCreated_byInputObjectSchema,
          ),
          z
            .lazy(
              () => QuestionCreateOrConnectWithoutCreated_byInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => QuestionCreateManyCreated_byInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => QuestionWhereUniqueInputObjectSchema),
          z.lazy(() => QuestionWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const QuestionUncheckedCreateNestedManyWithoutCreated_byInputObjectSchema =
  Schema;
