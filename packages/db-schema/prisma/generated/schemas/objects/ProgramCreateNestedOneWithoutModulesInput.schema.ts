import { z } from 'zod';
import { ProgramCreateWithoutModulesInputObjectSchema } from './ProgramCreateWithoutModulesInput.schema';
import { ProgramUncheckedCreateWithoutModulesInputObjectSchema } from './ProgramUncheckedCreateWithoutModulesInput.schema';
import { ProgramCreateOrConnectWithoutModulesInputObjectSchema } from './ProgramCreateOrConnectWithoutModulesInput.schema';
import { ProgramWhereUniqueInputObjectSchema } from './ProgramWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProgramCreateNestedOneWithoutModulesInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ProgramCreateWithoutModulesInputObjectSchema),
        z.lazy(() => ProgramUncheckedCreateWithoutModulesInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => ProgramCreateOrConnectWithoutModulesInputObjectSchema)
      .optional(),
    connect: z.lazy(() => ProgramWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const ProgramCreateNestedOneWithoutModulesInputObjectSchema = Schema;
