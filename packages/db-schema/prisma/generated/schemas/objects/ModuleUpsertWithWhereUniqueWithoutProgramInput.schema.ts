import { z } from 'zod';
import { ModuleWhereUniqueInputObjectSchema } from './ModuleWhereUniqueInput.schema';
import { ModuleUpdateWithoutProgramInputObjectSchema } from './ModuleUpdateWithoutProgramInput.schema';
import { ModuleUncheckedUpdateWithoutProgramInputObjectSchema } from './ModuleUncheckedUpdateWithoutProgramInput.schema';
import { ModuleCreateWithoutProgramInputObjectSchema } from './ModuleCreateWithoutProgramInput.schema';
import { ModuleUncheckedCreateWithoutProgramInputObjectSchema } from './ModuleUncheckedCreateWithoutProgramInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleUpsertWithWhereUniqueWithoutProgramInput> =
  z
    .object({
      where: z.lazy(() => ModuleWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => ModuleUpdateWithoutProgramInputObjectSchema),
        z.lazy(() => ModuleUncheckedUpdateWithoutProgramInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => ModuleCreateWithoutProgramInputObjectSchema),
        z.lazy(() => ModuleUncheckedCreateWithoutProgramInputObjectSchema),
      ]),
    })
    .strict();

export const ModuleUpsertWithWhereUniqueWithoutProgramInputObjectSchema =
  Schema;
