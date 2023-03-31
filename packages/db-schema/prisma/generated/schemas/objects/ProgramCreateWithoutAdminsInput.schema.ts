import { z } from 'zod';
import { ModuleCreateNestedManyWithoutProgramInputObjectSchema } from './ModuleCreateNestedManyWithoutProgramInput.schema';
import { QuestionCreateNestedManyWithoutProgramInputObjectSchema } from './QuestionCreateNestedManyWithoutProgramInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProgramCreateWithoutAdminsInput> = z
  .object({
    id: z.string().optional(),
    code: z.string(),
    title: z.string(),
    description: z.string(),
    cover_img_url: z.string().optional().nullable(),
    bg_img_url: z.string().optional().nullable(),
    published: z.date().optional().nullable(),
    modules: z
      .lazy(() => ModuleCreateNestedManyWithoutProgramInputObjectSchema)
      .optional(),
    questions: z
      .lazy(() => QuestionCreateNestedManyWithoutProgramInputObjectSchema)
      .optional(),
  })
  .strict();

export const ProgramCreateWithoutAdminsInputObjectSchema = Schema;
