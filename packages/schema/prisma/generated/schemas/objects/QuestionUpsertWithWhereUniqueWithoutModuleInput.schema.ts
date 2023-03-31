import { z } from 'zod';
import { QuestionWhereUniqueInputObjectSchema } from './QuestionWhereUniqueInput.schema';
import { QuestionUpdateWithoutModuleInputObjectSchema } from './QuestionUpdateWithoutModuleInput.schema';
import { QuestionUncheckedUpdateWithoutModuleInputObjectSchema } from './QuestionUncheckedUpdateWithoutModuleInput.schema';
import { QuestionCreateWithoutModuleInputObjectSchema } from './QuestionCreateWithoutModuleInput.schema';
import { QuestionUncheckedCreateWithoutModuleInputObjectSchema } from './QuestionUncheckedCreateWithoutModuleInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.QuestionUpsertWithWhereUniqueWithoutModuleInput> =
  z
    .object({
      where: z.lazy(() => QuestionWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => QuestionUpdateWithoutModuleInputObjectSchema),
        z.lazy(() => QuestionUncheckedUpdateWithoutModuleInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => QuestionCreateWithoutModuleInputObjectSchema),
        z.lazy(() => QuestionUncheckedCreateWithoutModuleInputObjectSchema),
      ]),
    })
    .strict();

export const QuestionUpsertWithWhereUniqueWithoutModuleInputObjectSchema =
  Schema;
