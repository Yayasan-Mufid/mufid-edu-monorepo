import { z } from 'zod';
import { QuestionWhereUniqueInputObjectSchema } from './QuestionWhereUniqueInput.schema';
import { QuestionUpdateWithoutModuleInputObjectSchema } from './QuestionUpdateWithoutModuleInput.schema';
import { QuestionUncheckedUpdateWithoutModuleInputObjectSchema } from './QuestionUncheckedUpdateWithoutModuleInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.QuestionUpdateWithWhereUniqueWithoutModuleInput> =
  z
    .object({
      where: z.lazy(() => QuestionWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => QuestionUpdateWithoutModuleInputObjectSchema),
        z.lazy(() => QuestionUncheckedUpdateWithoutModuleInputObjectSchema),
      ]),
    })
    .strict();

export const QuestionUpdateWithWhereUniqueWithoutModuleInputObjectSchema =
  Schema;
