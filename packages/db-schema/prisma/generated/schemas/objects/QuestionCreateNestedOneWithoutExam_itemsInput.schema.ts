import { z } from 'zod';
import { QuestionCreateWithoutExam_itemsInputObjectSchema } from './QuestionCreateWithoutExam_itemsInput.schema';
import { QuestionUncheckedCreateWithoutExam_itemsInputObjectSchema } from './QuestionUncheckedCreateWithoutExam_itemsInput.schema';
import { QuestionCreateOrConnectWithoutExam_itemsInputObjectSchema } from './QuestionCreateOrConnectWithoutExam_itemsInput.schema';
import { QuestionWhereUniqueInputObjectSchema } from './QuestionWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.QuestionCreateNestedOneWithoutExam_itemsInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => QuestionCreateWithoutExam_itemsInputObjectSchema),
          z.lazy(
            () => QuestionUncheckedCreateWithoutExam_itemsInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => QuestionCreateOrConnectWithoutExam_itemsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => QuestionWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const QuestionCreateNestedOneWithoutExam_itemsInputObjectSchema = Schema;
