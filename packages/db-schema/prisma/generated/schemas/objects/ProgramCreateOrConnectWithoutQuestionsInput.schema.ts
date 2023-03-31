import { z } from 'zod';
import { ProgramWhereUniqueInputObjectSchema } from './ProgramWhereUniqueInput.schema';
import { ProgramCreateWithoutQuestionsInputObjectSchema } from './ProgramCreateWithoutQuestionsInput.schema';
import { ProgramUncheckedCreateWithoutQuestionsInputObjectSchema } from './ProgramUncheckedCreateWithoutQuestionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProgramCreateOrConnectWithoutQuestionsInput> = z
  .object({
    where: z.lazy(() => ProgramWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ProgramCreateWithoutQuestionsInputObjectSchema),
      z.lazy(() => ProgramUncheckedCreateWithoutQuestionsInputObjectSchema),
    ]),
  })
  .strict();

export const ProgramCreateOrConnectWithoutQuestionsInputObjectSchema = Schema;
