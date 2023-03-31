import { z } from 'zod';
import { ModuleItemQuestionCreateNestedOneWithoutUser_statusInputObjectSchema } from './ModuleItemQuestionCreateNestedOneWithoutUser_statusInput.schema';
import { UserCreateNestedOneWithoutModule_item_question_statusInputObjectSchema } from './UserCreateNestedOneWithoutModule_item_question_statusInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemQuestionStatusCreateInput> = z
  .object({
    question: z.lazy(
      () =>
        ModuleItemQuestionCreateNestedOneWithoutUser_statusInputObjectSchema,
    ),
    user: z.lazy(
      () =>
        UserCreateNestedOneWithoutModule_item_question_statusInputObjectSchema,
    ),
    status: z.string(),
  })
  .strict();

export const ModuleItemQuestionStatusCreateInputObjectSchema = Schema;
