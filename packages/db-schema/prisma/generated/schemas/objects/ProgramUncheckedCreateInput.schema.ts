import { z } from 'zod';
import { ModuleUncheckedCreateNestedManyWithoutProgramInputObjectSchema } from './ModuleUncheckedCreateNestedManyWithoutProgramInput.schema';
import { ProgramAdminUncheckedCreateNestedManyWithoutProgramInputObjectSchema } from './ProgramAdminUncheckedCreateNestedManyWithoutProgramInput.schema';
import { QuestionUncheckedCreateNestedManyWithoutProgramInputObjectSchema } from './QuestionUncheckedCreateNestedManyWithoutProgramInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProgramUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    code: z.string(),
    title: z.string(),
    description: z.string(),
    cover_img_url: z.string().optional().nullable(),
    bg_img_url: z.string().optional().nullable(),
    published: z.date().optional().nullable(),
    modules: z
      .lazy(
        () => ModuleUncheckedCreateNestedManyWithoutProgramInputObjectSchema,
      )
      .optional(),
    admins: z
      .lazy(
        () =>
          ProgramAdminUncheckedCreateNestedManyWithoutProgramInputObjectSchema,
      )
      .optional(),
    questions: z
      .lazy(
        () => QuestionUncheckedCreateNestedManyWithoutProgramInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const ProgramUncheckedCreateInputObjectSchema = Schema;
