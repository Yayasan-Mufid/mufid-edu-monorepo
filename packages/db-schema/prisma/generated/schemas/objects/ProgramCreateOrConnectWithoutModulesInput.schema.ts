import { z } from 'zod';
import { ProgramWhereUniqueInputObjectSchema } from './ProgramWhereUniqueInput.schema';
import { ProgramCreateWithoutModulesInputObjectSchema } from './ProgramCreateWithoutModulesInput.schema';
import { ProgramUncheckedCreateWithoutModulesInputObjectSchema } from './ProgramUncheckedCreateWithoutModulesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProgramCreateOrConnectWithoutModulesInput> = z
  .object({
    where: z.lazy(() => ProgramWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ProgramCreateWithoutModulesInputObjectSchema),
      z.lazy(() => ProgramUncheckedCreateWithoutModulesInputObjectSchema),
    ]),
  })
  .strict();

export const ProgramCreateOrConnectWithoutModulesInputObjectSchema = Schema;
