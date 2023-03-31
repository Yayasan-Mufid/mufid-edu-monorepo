import { z } from 'zod';
import { ModuleItemUpdateWithoutQuizInputObjectSchema } from './ModuleItemUpdateWithoutQuizInput.schema';
import { ModuleItemUncheckedUpdateWithoutQuizInputObjectSchema } from './ModuleItemUncheckedUpdateWithoutQuizInput.schema';
import { ModuleItemCreateWithoutQuizInputObjectSchema } from './ModuleItemCreateWithoutQuizInput.schema';
import { ModuleItemUncheckedCreateWithoutQuizInputObjectSchema } from './ModuleItemUncheckedCreateWithoutQuizInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemUpsertWithoutQuizInput> = z
  .object({
    update: z.union([
      z.lazy(() => ModuleItemUpdateWithoutQuizInputObjectSchema),
      z.lazy(() => ModuleItemUncheckedUpdateWithoutQuizInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ModuleItemCreateWithoutQuizInputObjectSchema),
      z.lazy(() => ModuleItemUncheckedCreateWithoutQuizInputObjectSchema),
    ]),
  })
  .strict();

export const ModuleItemUpsertWithoutQuizInputObjectSchema = Schema;
