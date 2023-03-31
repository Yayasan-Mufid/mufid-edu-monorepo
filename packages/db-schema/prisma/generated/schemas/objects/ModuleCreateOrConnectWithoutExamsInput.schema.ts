import { z } from 'zod';
import { ModuleWhereUniqueInputObjectSchema } from './ModuleWhereUniqueInput.schema';
import { ModuleCreateWithoutExamsInputObjectSchema } from './ModuleCreateWithoutExamsInput.schema';
import { ModuleUncheckedCreateWithoutExamsInputObjectSchema } from './ModuleUncheckedCreateWithoutExamsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleCreateOrConnectWithoutExamsInput> = z
  .object({
    where: z.lazy(() => ModuleWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ModuleCreateWithoutExamsInputObjectSchema),
      z.lazy(() => ModuleUncheckedCreateWithoutExamsInputObjectSchema),
    ]),
  })
  .strict();

export const ModuleCreateOrConnectWithoutExamsInputObjectSchema = Schema;
