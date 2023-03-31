import { z } from 'zod';
import { QuestionWhereUniqueInputObjectSchema } from './QuestionWhereUniqueInput.schema';
import { QuestionUpdateWithoutValidated_byInputObjectSchema } from './QuestionUpdateWithoutValidated_byInput.schema';
import { QuestionUncheckedUpdateWithoutValidated_byInputObjectSchema } from './QuestionUncheckedUpdateWithoutValidated_byInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.QuestionUpdateWithWhereUniqueWithoutValidated_byInput> =
  z
    .object({
      where: z.lazy(() => QuestionWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => QuestionUpdateWithoutValidated_byInputObjectSchema),
        z.lazy(
          () => QuestionUncheckedUpdateWithoutValidated_byInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const QuestionUpdateWithWhereUniqueWithoutValidated_byInputObjectSchema =
  Schema;
