import { z } from 'zod';
import { ModuleItemCreateNestedOneWithoutQuizInputObjectSchema } from './ModuleItemCreateNestedOneWithoutQuizInput.schema';
import { QuestionCreateNestedOneWithoutModule_item_questionInputObjectSchema } from './QuestionCreateNestedOneWithoutModule_item_questionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemQuestionCreateWithoutUser_statusInput> =
  z
    .object({
      id: z.string().optional(),
      module_item: z.lazy(
        () => ModuleItemCreateNestedOneWithoutQuizInputObjectSchema,
      ),
      question: z.lazy(
        () =>
          QuestionCreateNestedOneWithoutModule_item_questionInputObjectSchema,
      ),
    })
    .strict();

export const ModuleItemQuestionCreateWithoutUser_statusInputObjectSchema =
  Schema;
