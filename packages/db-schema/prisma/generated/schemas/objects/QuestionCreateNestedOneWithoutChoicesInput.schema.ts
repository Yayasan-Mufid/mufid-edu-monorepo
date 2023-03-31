import { z } from 'zod';
import { QuestionCreateWithoutChoicesInputObjectSchema } from './QuestionCreateWithoutChoicesInput.schema';
import { QuestionUncheckedCreateWithoutChoicesInputObjectSchema } from './QuestionUncheckedCreateWithoutChoicesInput.schema';
import { QuestionCreateOrConnectWithoutChoicesInputObjectSchema } from './QuestionCreateOrConnectWithoutChoicesInput.schema';
import { QuestionWhereUniqueInputObjectSchema } from './QuestionWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.QuestionCreateNestedOneWithoutChoicesInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => QuestionCreateWithoutChoicesInputObjectSchema),
        z.lazy(() => QuestionUncheckedCreateWithoutChoicesInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => QuestionCreateOrConnectWithoutChoicesInputObjectSchema)
      .optional(),
    connect: z.lazy(() => QuestionWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const QuestionCreateNestedOneWithoutChoicesInputObjectSchema = Schema;
