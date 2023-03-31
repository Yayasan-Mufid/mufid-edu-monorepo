import { z } from 'zod';
import { ExamWhereUniqueInputObjectSchema } from './ExamWhereUniqueInput.schema';
import { ExamUpdateWithoutModuleInputObjectSchema } from './ExamUpdateWithoutModuleInput.schema';
import { ExamUncheckedUpdateWithoutModuleInputObjectSchema } from './ExamUncheckedUpdateWithoutModuleInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamUpdateWithWhereUniqueWithoutModuleInput> = z
  .object({
    where: z.lazy(() => ExamWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => ExamUpdateWithoutModuleInputObjectSchema),
      z.lazy(() => ExamUncheckedUpdateWithoutModuleInputObjectSchema),
    ]),
  })
  .strict();

export const ExamUpdateWithWhereUniqueWithoutModuleInputObjectSchema = Schema;
