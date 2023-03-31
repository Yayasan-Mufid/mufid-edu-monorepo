import { z } from 'zod';
import { ExamWhereUniqueInputObjectSchema } from './ExamWhereUniqueInput.schema';
import { ExamUpdateWithoutModuleInputObjectSchema } from './ExamUpdateWithoutModuleInput.schema';
import { ExamUncheckedUpdateWithoutModuleInputObjectSchema } from './ExamUncheckedUpdateWithoutModuleInput.schema';
import { ExamCreateWithoutModuleInputObjectSchema } from './ExamCreateWithoutModuleInput.schema';
import { ExamUncheckedCreateWithoutModuleInputObjectSchema } from './ExamUncheckedCreateWithoutModuleInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamUpsertWithWhereUniqueWithoutModuleInput> = z
  .object({
    where: z.lazy(() => ExamWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => ExamUpdateWithoutModuleInputObjectSchema),
      z.lazy(() => ExamUncheckedUpdateWithoutModuleInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ExamCreateWithoutModuleInputObjectSchema),
      z.lazy(() => ExamUncheckedCreateWithoutModuleInputObjectSchema),
    ]),
  })
  .strict();

export const ExamUpsertWithWhereUniqueWithoutModuleInputObjectSchema = Schema;
