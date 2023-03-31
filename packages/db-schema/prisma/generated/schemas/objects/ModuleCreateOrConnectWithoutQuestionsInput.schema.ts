import { z } from 'zod';
import { ModuleWhereUniqueInputObjectSchema } from './ModuleWhereUniqueInput.schema';
import { ModuleCreateWithoutQuestionsInputObjectSchema } from './ModuleCreateWithoutQuestionsInput.schema';
import { ModuleUncheckedCreateWithoutQuestionsInputObjectSchema } from './ModuleUncheckedCreateWithoutQuestionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleCreateOrConnectWithoutQuestionsInput> = z
  .object({
    where: z.lazy(() => ModuleWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ModuleCreateWithoutQuestionsInputObjectSchema),
      z.lazy(() => ModuleUncheckedCreateWithoutQuestionsInputObjectSchema),
    ]),
  })
  .strict();

export const ModuleCreateOrConnectWithoutQuestionsInputObjectSchema = Schema;
