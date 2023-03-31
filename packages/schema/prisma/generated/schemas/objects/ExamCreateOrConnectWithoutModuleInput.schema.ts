import { z } from 'zod';
import { ExamWhereUniqueInputObjectSchema } from './ExamWhereUniqueInput.schema';
import { ExamCreateWithoutModuleInputObjectSchema } from './ExamCreateWithoutModuleInput.schema';
import { ExamUncheckedCreateWithoutModuleInputObjectSchema } from './ExamUncheckedCreateWithoutModuleInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamCreateOrConnectWithoutModuleInput> = z
  .object({
    where: z.lazy(() => ExamWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ExamCreateWithoutModuleInputObjectSchema),
      z.lazy(() => ExamUncheckedCreateWithoutModuleInputObjectSchema),
    ]),
  })
  .strict();

export const ExamCreateOrConnectWithoutModuleInputObjectSchema = Schema;
