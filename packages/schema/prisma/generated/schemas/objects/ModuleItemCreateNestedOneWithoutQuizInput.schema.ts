import { z } from 'zod';
import { ModuleItemCreateWithoutQuizInputObjectSchema } from './ModuleItemCreateWithoutQuizInput.schema';
import { ModuleItemUncheckedCreateWithoutQuizInputObjectSchema } from './ModuleItemUncheckedCreateWithoutQuizInput.schema';
import { ModuleItemCreateOrConnectWithoutQuizInputObjectSchema } from './ModuleItemCreateOrConnectWithoutQuizInput.schema';
import { ModuleItemWhereUniqueInputObjectSchema } from './ModuleItemWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemCreateNestedOneWithoutQuizInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ModuleItemCreateWithoutQuizInputObjectSchema),
        z.lazy(() => ModuleItemUncheckedCreateWithoutQuizInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => ModuleItemCreateOrConnectWithoutQuizInputObjectSchema)
      .optional(),
    connect: z.lazy(() => ModuleItemWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const ModuleItemCreateNestedOneWithoutQuizInputObjectSchema = Schema;
