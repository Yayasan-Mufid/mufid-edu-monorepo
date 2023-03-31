import { z } from 'zod';
import { ProgramUpdateWithoutAdminsInputObjectSchema } from './ProgramUpdateWithoutAdminsInput.schema';
import { ProgramUncheckedUpdateWithoutAdminsInputObjectSchema } from './ProgramUncheckedUpdateWithoutAdminsInput.schema';
import { ProgramCreateWithoutAdminsInputObjectSchema } from './ProgramCreateWithoutAdminsInput.schema';
import { ProgramUncheckedCreateWithoutAdminsInputObjectSchema } from './ProgramUncheckedCreateWithoutAdminsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProgramUpsertWithoutAdminsInput> = z
  .object({
    update: z.union([
      z.lazy(() => ProgramUpdateWithoutAdminsInputObjectSchema),
      z.lazy(() => ProgramUncheckedUpdateWithoutAdminsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ProgramCreateWithoutAdminsInputObjectSchema),
      z.lazy(() => ProgramUncheckedCreateWithoutAdminsInputObjectSchema),
    ]),
  })
  .strict();

export const ProgramUpsertWithoutAdminsInputObjectSchema = Schema;
