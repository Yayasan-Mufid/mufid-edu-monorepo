import { z } from 'zod';
import { ModuleItemQuestionCreateNestedOneWithoutUser_statusInputObjectSchema } from './ModuleItemQuestionCreateNestedOneWithoutUser_statusInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemQuestionStatusCreateWithoutUserInput> =
  z
    .object({
      status: z.string(),
      question: z.lazy(
        () =>
          ModuleItemQuestionCreateNestedOneWithoutUser_statusInputObjectSchema,
      ),
    })
    .strict();

export const ModuleItemQuestionStatusCreateWithoutUserInputObjectSchema =
  Schema;
