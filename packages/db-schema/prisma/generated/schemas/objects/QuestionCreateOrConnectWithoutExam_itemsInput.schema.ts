import { z } from 'zod';
import { QuestionWhereUniqueInputObjectSchema } from './QuestionWhereUniqueInput.schema';
import { QuestionCreateWithoutExam_itemsInputObjectSchema } from './QuestionCreateWithoutExam_itemsInput.schema';
import { QuestionUncheckedCreateWithoutExam_itemsInputObjectSchema } from './QuestionUncheckedCreateWithoutExam_itemsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.QuestionCreateOrConnectWithoutExam_itemsInput> =
  z
    .object({
      where: z.lazy(() => QuestionWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => QuestionCreateWithoutExam_itemsInputObjectSchema),
        z.lazy(() => QuestionUncheckedCreateWithoutExam_itemsInputObjectSchema),
      ]),
    })
    .strict();

export const QuestionCreateOrConnectWithoutExam_itemsInputObjectSchema = Schema;
