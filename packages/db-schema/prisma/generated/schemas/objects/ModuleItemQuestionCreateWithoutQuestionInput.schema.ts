import { z } from 'zod';
import { ModuleItemCreateNestedOneWithoutQuizInputObjectSchema } from './ModuleItemCreateNestedOneWithoutQuizInput.schema';
import { ModuleItemQuestionStatusCreateNestedManyWithoutQuestionInputObjectSchema } from './ModuleItemQuestionStatusCreateNestedManyWithoutQuestionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemQuestionCreateWithoutQuestionInput> = z
  .object({
    id: z.string().optional(),
    module_item: z.lazy(
      () => ModuleItemCreateNestedOneWithoutQuizInputObjectSchema,
    ),
    user_status: z
      .lazy(
        () =>
          ModuleItemQuestionStatusCreateNestedManyWithoutQuestionInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const ModuleItemQuestionCreateWithoutQuestionInputObjectSchema = Schema;
