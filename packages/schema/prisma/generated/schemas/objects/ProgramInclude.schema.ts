import { z } from 'zod';
import { ModuleFindManySchema } from '../findManyModule.schema';
import { ProgramAdminFindManySchema } from '../findManyProgramAdmin.schema';
import { QuestionFindManySchema } from '../findManyQuestion.schema';
import { ProgramCountOutputTypeArgsObjectSchema } from './ProgramCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProgramInclude> = z
  .object({
    modules: z
      .union([z.boolean(), z.lazy(() => ModuleFindManySchema)])
      .optional(),
    admins: z
      .union([z.boolean(), z.lazy(() => ProgramAdminFindManySchema)])
      .optional(),
    questions: z
      .union([z.boolean(), z.lazy(() => QuestionFindManySchema)])
      .optional(),
    _count: z
      .union([
        z.boolean(),
        z.lazy(() => ProgramCountOutputTypeArgsObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const ProgramIncludeObjectSchema = Schema;
