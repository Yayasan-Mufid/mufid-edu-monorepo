import { z } from 'zod';
import { ModuleCreateWithoutQuestionsInputObjectSchema } from './ModuleCreateWithoutQuestionsInput.schema';
import { ModuleUncheckedCreateWithoutQuestionsInputObjectSchema } from './ModuleUncheckedCreateWithoutQuestionsInput.schema';
import { ModuleCreateOrConnectWithoutQuestionsInputObjectSchema } from './ModuleCreateOrConnectWithoutQuestionsInput.schema';
import { ModuleUpsertWithoutQuestionsInputObjectSchema } from './ModuleUpsertWithoutQuestionsInput.schema';
import { ModuleWhereUniqueInputObjectSchema } from './ModuleWhereUniqueInput.schema';
import { ModuleUpdateWithoutQuestionsInputObjectSchema } from './ModuleUpdateWithoutQuestionsInput.schema';
import { ModuleUncheckedUpdateWithoutQuestionsInputObjectSchema } from './ModuleUncheckedUpdateWithoutQuestionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleUpdateOneWithoutQuestionsNestedInput> = z
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
    upsert: z
      .lazy(() => ModuleUpsertWithoutQuestionsInputObjectSchema)
      .optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => ModuleWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => ModuleUpdateWithoutQuestionsInputObjectSchema),
        z.lazy(() => ModuleUncheckedUpdateWithoutQuestionsInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const ModuleUpdateOneWithoutQuestionsNestedInputObjectSchema = Schema;
