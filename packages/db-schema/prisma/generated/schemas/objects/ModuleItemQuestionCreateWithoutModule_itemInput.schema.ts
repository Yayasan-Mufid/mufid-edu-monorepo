import { z } from 'zod';
import { QuestionCreateNestedOneWithoutModule_item_questionInputObjectSchema } from './QuestionCreateNestedOneWithoutModule_item_questionInput.schema';
import { ModuleItemQuestionStatusCreateNestedManyWithoutQuestionInputObjectSchema } from './ModuleItemQuestionStatusCreateNestedManyWithoutQuestionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemQuestionCreateWithoutModule_itemInput> =
  z
    .object({
      id: z.string().optional(),
      question: z.lazy(
        () =>
          QuestionCreateNestedOneWithoutModule_item_questionInputObjectSchema,
      ),
      user_status: z
        .lazy(
          () =>
            ModuleItemQuestionStatusCreateNestedManyWithoutQuestionInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const ModuleItemQuestionCreateWithoutModule_itemInputObjectSchema =
  Schema;
