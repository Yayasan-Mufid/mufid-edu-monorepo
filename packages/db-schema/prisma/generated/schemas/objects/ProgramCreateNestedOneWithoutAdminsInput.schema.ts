import { z } from 'zod';
import { ProgramCreateWithoutAdminsInputObjectSchema } from './ProgramCreateWithoutAdminsInput.schema';
import { ProgramUncheckedCreateWithoutAdminsInputObjectSchema } from './ProgramUncheckedCreateWithoutAdminsInput.schema';
import { ProgramCreateOrConnectWithoutAdminsInputObjectSchema } from './ProgramCreateOrConnectWithoutAdminsInput.schema';
import { ProgramWhereUniqueInputObjectSchema } from './ProgramWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProgramCreateNestedOneWithoutAdminsInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ProgramCreateWithoutAdminsInputObjectSchema),
        z.lazy(() => ProgramUncheckedCreateWithoutAdminsInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => ProgramCreateOrConnectWithoutAdminsInputObjectSchema)
      .optional(),
    connect: z.lazy(() => ProgramWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const ProgramCreateNestedOneWithoutAdminsInputObjectSchema = Schema;
