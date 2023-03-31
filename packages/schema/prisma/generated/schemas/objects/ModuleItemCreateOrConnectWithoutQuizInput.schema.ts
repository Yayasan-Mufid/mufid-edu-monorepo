import { z } from 'zod';
import { ModuleItemWhereUniqueInputObjectSchema } from './ModuleItemWhereUniqueInput.schema';
import { ModuleItemCreateWithoutQuizInputObjectSchema } from './ModuleItemCreateWithoutQuizInput.schema';
import { ModuleItemUncheckedCreateWithoutQuizInputObjectSchema } from './ModuleItemUncheckedCreateWithoutQuizInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemCreateOrConnectWithoutQuizInput> = z
  .object({
    where: z.lazy(() => ModuleItemWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ModuleItemCreateWithoutQuizInputObjectSchema),
      z.lazy(() => ModuleItemUncheckedCreateWithoutQuizInputObjectSchema),
    ]),
  })
  .strict();

export const ModuleItemCreateOrConnectWithoutQuizInputObjectSchema = Schema;
