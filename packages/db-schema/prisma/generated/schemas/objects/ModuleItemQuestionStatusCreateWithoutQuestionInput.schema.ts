import { z } from 'zod';
import { UserCreateNestedOneWithoutModule_item_question_statusInputObjectSchema } from './UserCreateNestedOneWithoutModule_item_question_statusInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemQuestionStatusCreateWithoutQuestionInput> =
  z
    .object({
      status: z.string(),
      user: z.lazy(
        () =>
          UserCreateNestedOneWithoutModule_item_question_statusInputObjectSchema,
      ),
    })
    .strict();

export const ModuleItemQuestionStatusCreateWithoutQuestionInputObjectSchema =
  Schema;
