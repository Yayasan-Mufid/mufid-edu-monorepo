import { z } from 'zod';
import { ModuleWhereUniqueInputObjectSchema } from './ModuleWhereUniqueInput.schema';
import { ModuleUpdateWithoutProgramInputObjectSchema } from './ModuleUpdateWithoutProgramInput.schema';
import { ModuleUncheckedUpdateWithoutProgramInputObjectSchema } from './ModuleUncheckedUpdateWithoutProgramInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleUpdateWithWhereUniqueWithoutProgramInput> =
  z
    .object({
      where: z.lazy(() => ModuleWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => ModuleUpdateWithoutProgramInputObjectSchema),
        z.lazy(() => ModuleUncheckedUpdateWithoutProgramInputObjectSchema),
      ]),
    })
    .strict();

export const ModuleUpdateWithWhereUniqueWithoutProgramInputObjectSchema =
  Schema;
