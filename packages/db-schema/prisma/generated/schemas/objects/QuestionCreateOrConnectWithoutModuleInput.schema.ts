import { z } from 'zod';
import { QuestionWhereUniqueInputObjectSchema } from './QuestionWhereUniqueInput.schema';
import { QuestionCreateWithoutModuleInputObjectSchema } from './QuestionCreateWithoutModuleInput.schema';
import { QuestionUncheckedCreateWithoutModuleInputObjectSchema } from './QuestionUncheckedCreateWithoutModuleInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.QuestionCreateOrConnectWithoutModuleInput> = z
  .object({
    where: z.lazy(() => QuestionWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => QuestionCreateWithoutModuleInputObjectSchema),
      z.lazy(() => QuestionUncheckedCreateWithoutModuleInputObjectSchema),
    ]),
  })
  .strict();

export const QuestionCreateOrConnectWithoutModuleInputObjectSchema = Schema;
