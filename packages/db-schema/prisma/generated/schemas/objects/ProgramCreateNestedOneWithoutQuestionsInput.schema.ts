import { z } from 'zod';
import { ProgramCreateWithoutQuestionsInputObjectSchema } from './ProgramCreateWithoutQuestionsInput.schema';
import { ProgramUncheckedCreateWithoutQuestionsInputObjectSchema } from './ProgramUncheckedCreateWithoutQuestionsInput.schema';
import { ProgramCreateOrConnectWithoutQuestionsInputObjectSchema } from './ProgramCreateOrConnectWithoutQuestionsInput.schema';
import { ProgramWhereUniqueInputObjectSchema } from './ProgramWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProgramCreateNestedOneWithoutQuestionsInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ProgramCreateWithoutQuestionsInputObjectSchema),
        z.lazy(() => ProgramUncheckedCreateWithoutQuestionsInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => ProgramCreateOrConnectWithoutQuestionsInputObjectSchema)
      .optional(),
    connect: z.lazy(() => ProgramWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const ProgramCreateNestedOneWithoutQuestionsInputObjectSchema = Schema;
