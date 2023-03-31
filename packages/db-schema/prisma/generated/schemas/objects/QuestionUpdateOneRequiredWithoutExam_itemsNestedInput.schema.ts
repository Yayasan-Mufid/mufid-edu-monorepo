import { z } from 'zod';
import { QuestionCreateWithoutExam_itemsInputObjectSchema } from './QuestionCreateWithoutExam_itemsInput.schema';
import { QuestionUncheckedCreateWithoutExam_itemsInputObjectSchema } from './QuestionUncheckedCreateWithoutExam_itemsInput.schema';
import { QuestionCreateOrConnectWithoutExam_itemsInputObjectSchema } from './QuestionCreateOrConnectWithoutExam_itemsInput.schema';
import { QuestionUpsertWithoutExam_itemsInputObjectSchema } from './QuestionUpsertWithoutExam_itemsInput.schema';
import { QuestionWhereUniqueInputObjectSchema } from './QuestionWhereUniqueInput.schema';
import { QuestionUpdateWithoutExam_itemsInputObjectSchema } from './QuestionUpdateWithoutExam_itemsInput.schema';
import { QuestionUncheckedUpdateWithoutExam_itemsInputObjectSchema } from './QuestionUncheckedUpdateWithoutExam_itemsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.QuestionUpdateOneRequiredWithoutExam_itemsNestedInput> =
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
      upsert: z
        .lazy(() => QuestionUpsertWithoutExam_itemsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => QuestionWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => QuestionUpdateWithoutExam_itemsInputObjectSchema),
          z.lazy(
            () => QuestionUncheckedUpdateWithoutExam_itemsInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const QuestionUpdateOneRequiredWithoutExam_itemsNestedInputObjectSchema =
  Schema;
