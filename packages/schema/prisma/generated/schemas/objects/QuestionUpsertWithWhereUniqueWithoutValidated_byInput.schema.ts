import { z } from 'zod';
import { QuestionWhereUniqueInputObjectSchema } from './QuestionWhereUniqueInput.schema';
import { QuestionUpdateWithoutValidated_byInputObjectSchema } from './QuestionUpdateWithoutValidated_byInput.schema';
import { QuestionUncheckedUpdateWithoutValidated_byInputObjectSchema } from './QuestionUncheckedUpdateWithoutValidated_byInput.schema';
import { QuestionCreateWithoutValidated_byInputObjectSchema } from './QuestionCreateWithoutValidated_byInput.schema';
import { QuestionUncheckedCreateWithoutValidated_byInputObjectSchema } from './QuestionUncheckedCreateWithoutValidated_byInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.QuestionUpsertWithWhereUniqueWithoutValidated_byInput> =
  z
    .object({
      where: z.lazy(() => QuestionWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => QuestionUpdateWithoutValidated_byInputObjectSchema),
        z.lazy(
          () => QuestionUncheckedUpdateWithoutValidated_byInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => QuestionCreateWithoutValidated_byInputObjectSchema),
        z.lazy(
          () => QuestionUncheckedCreateWithoutValidated_byInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const QuestionUpsertWithWhereUniqueWithoutValidated_byInputObjectSchema =
  Schema;
