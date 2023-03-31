import { z } from 'zod';
import { ProgramWhereUniqueInputObjectSchema } from './ProgramWhereUniqueInput.schema';
import { ProgramCreateWithoutAdminsInputObjectSchema } from './ProgramCreateWithoutAdminsInput.schema';
import { ProgramUncheckedCreateWithoutAdminsInputObjectSchema } from './ProgramUncheckedCreateWithoutAdminsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProgramCreateOrConnectWithoutAdminsInput> = z
  .object({
    where: z.lazy(() => ProgramWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ProgramCreateWithoutAdminsInputObjectSchema),
      z.lazy(() => ProgramUncheckedCreateWithoutAdminsInputObjectSchema),
    ]),
  })
  .strict();

export const ProgramCreateOrConnectWithoutAdminsInputObjectSchema = Schema;
