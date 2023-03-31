import { z } from 'zod';
import { QuestionCreateWithoutValidated_byInputObjectSchema } from './QuestionCreateWithoutValidated_byInput.schema';
import { QuestionUncheckedCreateWithoutValidated_byInputObjectSchema } from './QuestionUncheckedCreateWithoutValidated_byInput.schema';
import { QuestionCreateOrConnectWithoutValidated_byInputObjectSchema } from './QuestionCreateOrConnectWithoutValidated_byInput.schema';
import { QuestionCreateManyValidated_byInputEnvelopeObjectSchema } from './QuestionCreateManyValidated_byInputEnvelope.schema';
import { QuestionWhereUniqueInputObjectSchema } from './QuestionWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.QuestionUncheckedCreateNestedManyWithoutValidated_byInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => QuestionCreateWithoutValidated_byInputObjectSchema),
          z
            .lazy(() => QuestionCreateWithoutValidated_byInputObjectSchema)
            .array(),
          z.lazy(
            () => QuestionUncheckedCreateWithoutValidated_byInputObjectSchema,
          ),
          z
            .lazy(
              () => QuestionUncheckedCreateWithoutValidated_byInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => QuestionCreateOrConnectWithoutValidated_byInputObjectSchema,
          ),
          z
            .lazy(
              () => QuestionCreateOrConnectWithoutValidated_byInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => QuestionCreateManyValidated_byInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => QuestionWhereUniqueInputObjectSchema),
          z.lazy(() => QuestionWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const QuestionUncheckedCreateNestedManyWithoutValidated_byInputObjectSchema =
  Schema;
