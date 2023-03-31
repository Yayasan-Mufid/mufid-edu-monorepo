import { z } from 'zod';
import { ProgramCreateWithoutQuestionsInputObjectSchema } from './ProgramCreateWithoutQuestionsInput.schema';
import { ProgramUncheckedCreateWithoutQuestionsInputObjectSchema } from './ProgramUncheckedCreateWithoutQuestionsInput.schema';
import { ProgramCreateOrConnectWithoutQuestionsInputObjectSchema } from './ProgramCreateOrConnectWithoutQuestionsInput.schema';
import { ProgramUpsertWithoutQuestionsInputObjectSchema } from './ProgramUpsertWithoutQuestionsInput.schema';
import { ProgramWhereUniqueInputObjectSchema } from './ProgramWhereUniqueInput.schema';
import { ProgramUpdateWithoutQuestionsInputObjectSchema } from './ProgramUpdateWithoutQuestionsInput.schema';
import { ProgramUncheckedUpdateWithoutQuestionsInputObjectSchema } from './ProgramUncheckedUpdateWithoutQuestionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProgramUpdateOneWithoutQuestionsNestedInput> = z
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
    upsert: z
      .lazy(() => ProgramUpsertWithoutQuestionsInputObjectSchema)
      .optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => ProgramWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => ProgramUpdateWithoutQuestionsInputObjectSchema),
        z.lazy(() => ProgramUncheckedUpdateWithoutQuestionsInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const ProgramUpdateOneWithoutQuestionsNestedInputObjectSchema = Schema;
