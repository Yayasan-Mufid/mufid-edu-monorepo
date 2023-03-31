import { z } from 'zod';
import { ModuleUpdateWithoutQuestionsInputObjectSchema } from './ModuleUpdateWithoutQuestionsInput.schema';
import { ModuleUncheckedUpdateWithoutQuestionsInputObjectSchema } from './ModuleUncheckedUpdateWithoutQuestionsInput.schema';
import { ModuleCreateWithoutQuestionsInputObjectSchema } from './ModuleCreateWithoutQuestionsInput.schema';
import { ModuleUncheckedCreateWithoutQuestionsInputObjectSchema } from './ModuleUncheckedCreateWithoutQuestionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleUpsertWithoutQuestionsInput> = z
  .object({
    update: z.union([
      z.lazy(() => ModuleUpdateWithoutQuestionsInputObjectSchema),
      z.lazy(() => ModuleUncheckedUpdateWithoutQuestionsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ModuleCreateWithoutQuestionsInputObjectSchema),
      z.lazy(() => ModuleUncheckedCreateWithoutQuestionsInputObjectSchema),
    ]),
  })
  .strict();

export const ModuleUpsertWithoutQuestionsInputObjectSchema = Schema;
