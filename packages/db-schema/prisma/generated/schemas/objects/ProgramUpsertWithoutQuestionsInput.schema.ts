import { z } from 'zod';
import { ProgramUpdateWithoutQuestionsInputObjectSchema } from './ProgramUpdateWithoutQuestionsInput.schema';
import { ProgramUncheckedUpdateWithoutQuestionsInputObjectSchema } from './ProgramUncheckedUpdateWithoutQuestionsInput.schema';
import { ProgramCreateWithoutQuestionsInputObjectSchema } from './ProgramCreateWithoutQuestionsInput.schema';
import { ProgramUncheckedCreateWithoutQuestionsInputObjectSchema } from './ProgramUncheckedCreateWithoutQuestionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProgramUpsertWithoutQuestionsInput> = z
  .object({
    update: z.union([
      z.lazy(() => ProgramUpdateWithoutQuestionsInputObjectSchema),
      z.lazy(() => ProgramUncheckedUpdateWithoutQuestionsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ProgramCreateWithoutQuestionsInputObjectSchema),
      z.lazy(() => ProgramUncheckedCreateWithoutQuestionsInputObjectSchema),
    ]),
  })
  .strict();

export const ProgramUpsertWithoutQuestionsInputObjectSchema = Schema;
