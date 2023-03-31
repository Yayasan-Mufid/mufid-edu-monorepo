import { z } from 'zod';
import { ModuleCreateWithoutQuestionsInputObjectSchema } from './ModuleCreateWithoutQuestionsInput.schema';
import { ModuleUncheckedCreateWithoutQuestionsInputObjectSchema } from './ModuleUncheckedCreateWithoutQuestionsInput.schema';
import { ModuleCreateOrConnectWithoutQuestionsInputObjectSchema } from './ModuleCreateOrConnectWithoutQuestionsInput.schema';
import { ModuleWhereUniqueInputObjectSchema } from './ModuleWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleCreateNestedOneWithoutQuestionsInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ModuleCreateWithoutQuestionsInputObjectSchema),
        z.lazy(() => ModuleUncheckedCreateWithoutQuestionsInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => ModuleCreateOrConnectWithoutQuestionsInputObjectSchema)
      .optional(),
    connect: z.lazy(() => ModuleWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const ModuleCreateNestedOneWithoutQuestionsInputObjectSchema = Schema;
