import { z } from 'zod';
import { ModuleItemCreateNestedOneWithoutQuizInputObjectSchema } from './ModuleItemCreateNestedOneWithoutQuizInput.schema';
import { QuestionCreateNestedOneWithoutModule_item_questionInputObjectSchema } from './QuestionCreateNestedOneWithoutModule_item_questionInput.schema';
import { ModuleItemQuestionStatusCreateNestedManyWithoutQuestionInputObjectSchema } from './ModuleItemQuestionStatusCreateNestedManyWithoutQuestionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemQuestionCreateInput> = z
  .object({
    id: z.string().optional(),
    module_item: z.lazy(
      () => ModuleItemCreateNestedOneWithoutQuizInputObjectSchema,
    ),
    question: z.lazy(
      () => QuestionCreateNestedOneWithoutModule_item_questionInputObjectSchema,
    ),
    user_status: z
      .lazy(
        () =>
          ModuleItemQuestionStatusCreateNestedManyWithoutQuestionInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const ModuleItemQuestionCreateInputObjectSchema = Schema;
