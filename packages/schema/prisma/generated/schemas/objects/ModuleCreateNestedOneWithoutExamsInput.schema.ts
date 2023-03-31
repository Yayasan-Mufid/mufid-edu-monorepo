import { z } from 'zod';
import { ModuleCreateWithoutExamsInputObjectSchema } from './ModuleCreateWithoutExamsInput.schema';
import { ModuleUncheckedCreateWithoutExamsInputObjectSchema } from './ModuleUncheckedCreateWithoutExamsInput.schema';
import { ModuleCreateOrConnectWithoutExamsInputObjectSchema } from './ModuleCreateOrConnectWithoutExamsInput.schema';
import { ModuleWhereUniqueInputObjectSchema } from './ModuleWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleCreateNestedOneWithoutExamsInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ModuleCreateWithoutExamsInputObjectSchema),
        z.lazy(() => ModuleUncheckedCreateWithoutExamsInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => ModuleCreateOrConnectWithoutExamsInputObjectSchema)
      .optional(),
    connect: z.lazy(() => ModuleWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const ModuleCreateNestedOneWithoutExamsInputObjectSchema = Schema;
