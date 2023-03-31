import { z } from 'zod';
import { QuestionWhereUniqueInputObjectSchema } from './QuestionWhereUniqueInput.schema';
import { QuestionUpdateWithoutCreated_byInputObjectSchema } from './QuestionUpdateWithoutCreated_byInput.schema';
import { QuestionUncheckedUpdateWithoutCreated_byInputObjectSchema } from './QuestionUncheckedUpdateWithoutCreated_byInput.schema';
import { QuestionCreateWithoutCreated_byInputObjectSchema } from './QuestionCreateWithoutCreated_byInput.schema';
import { QuestionUncheckedCreateWithoutCreated_byInputObjectSchema } from './QuestionUncheckedCreateWithoutCreated_byInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.QuestionUpsertWithWhereUniqueWithoutCreated_byInput> =
  z
    .object({
      where: z.lazy(() => QuestionWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => QuestionUpdateWithoutCreated_byInputObjectSchema),
        z.lazy(() => QuestionUncheckedUpdateWithoutCreated_byInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => QuestionCreateWithoutCreated_byInputObjectSchema),
        z.lazy(() => QuestionUncheckedCreateWithoutCreated_byInputObjectSchema),
      ]),
    })
    .strict();

export const QuestionUpsertWithWhereUniqueWithoutCreated_byInputObjectSchema =
  Schema;
