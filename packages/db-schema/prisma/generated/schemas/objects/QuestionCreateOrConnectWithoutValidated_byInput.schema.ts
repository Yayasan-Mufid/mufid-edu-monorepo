import { z } from 'zod';
import { QuestionWhereUniqueInputObjectSchema } from './QuestionWhereUniqueInput.schema';
import { QuestionCreateWithoutValidated_byInputObjectSchema } from './QuestionCreateWithoutValidated_byInput.schema';
import { QuestionUncheckedCreateWithoutValidated_byInputObjectSchema } from './QuestionUncheckedCreateWithoutValidated_byInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.QuestionCreateOrConnectWithoutValidated_byInput> =
  z
    .object({
      where: z.lazy(() => QuestionWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => QuestionCreateWithoutValidated_byInputObjectSchema),
        z.lazy(
          () => QuestionUncheckedCreateWithoutValidated_byInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const QuestionCreateOrConnectWithoutValidated_byInputObjectSchema =
  Schema;
