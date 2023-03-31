import { z } from 'zod';
import { ModuleWhereUniqueInputObjectSchema } from './ModuleWhereUniqueInput.schema';
import { ModuleCreateWithoutProgramInputObjectSchema } from './ModuleCreateWithoutProgramInput.schema';
import { ModuleUncheckedCreateWithoutProgramInputObjectSchema } from './ModuleUncheckedCreateWithoutProgramInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleCreateOrConnectWithoutProgramInput> = z
  .object({
    where: z.lazy(() => ModuleWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ModuleCreateWithoutProgramInputObjectSchema),
      z.lazy(() => ModuleUncheckedCreateWithoutProgramInputObjectSchema),
    ]),
  })
  .strict();

export const ModuleCreateOrConnectWithoutProgramInputObjectSchema = Schema;
