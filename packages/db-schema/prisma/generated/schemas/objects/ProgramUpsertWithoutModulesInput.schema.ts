import { z } from 'zod';
import { ProgramUpdateWithoutModulesInputObjectSchema } from './ProgramUpdateWithoutModulesInput.schema';
import { ProgramUncheckedUpdateWithoutModulesInputObjectSchema } from './ProgramUncheckedUpdateWithoutModulesInput.schema';
import { ProgramCreateWithoutModulesInputObjectSchema } from './ProgramCreateWithoutModulesInput.schema';
import { ProgramUncheckedCreateWithoutModulesInputObjectSchema } from './ProgramUncheckedCreateWithoutModulesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProgramUpsertWithoutModulesInput> = z
  .object({
    update: z.union([
      z.lazy(() => ProgramUpdateWithoutModulesInputObjectSchema),
      z.lazy(() => ProgramUncheckedUpdateWithoutModulesInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ProgramCreateWithoutModulesInputObjectSchema),
      z.lazy(() => ProgramUncheckedCreateWithoutModulesInputObjectSchema),
    ]),
  })
  .strict();

export const ProgramUpsertWithoutModulesInputObjectSchema = Schema;
