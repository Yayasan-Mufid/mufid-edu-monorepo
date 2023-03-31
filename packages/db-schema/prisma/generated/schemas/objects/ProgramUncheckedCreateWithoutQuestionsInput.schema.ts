import { z } from 'zod';
import { ModuleUncheckedCreateNestedManyWithoutProgramInputObjectSchema } from './ModuleUncheckedCreateNestedManyWithoutProgramInput.schema';
import { ProgramAdminUncheckedCreateNestedManyWithoutProgramInputObjectSchema } from './ProgramAdminUncheckedCreateNestedManyWithoutProgramInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProgramUncheckedCreateWithoutQuestionsInput> = z
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
  })
  .strict();

export const ProgramUncheckedCreateWithoutQuestionsInputObjectSchema = Schema;
