import { z } from 'zod';
import { ModuleScalarWhereInputObjectSchema } from './ModuleScalarWhereInput.schema';
import { ModuleUpdateManyMutationInputObjectSchema } from './ModuleUpdateManyMutationInput.schema';
import { ModuleUncheckedUpdateManyWithoutModulesInputObjectSchema } from './ModuleUncheckedUpdateManyWithoutModulesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleUpdateManyWithWhereWithoutProgramInput> = z
  .object({
    where: z.lazy(() => ModuleScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => ModuleUpdateManyMutationInputObjectSchema),
      z.lazy(() => ModuleUncheckedUpdateManyWithoutModulesInputObjectSchema),
    ]),
  })
  .strict();

export const ModuleUpdateManyWithWhereWithoutProgramInputObjectSchema = Schema;
