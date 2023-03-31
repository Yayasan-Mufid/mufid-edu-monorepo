import { z } from 'zod';
import { ProgramCreateNestedOneWithoutAdminsInputObjectSchema } from './ProgramCreateNestedOneWithoutAdminsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProgramAdminCreateWithoutUserInput> = z
  .object({
    id: z.string().optional(),
    assigned_at: z.date().optional(),
    program: z.lazy(() => ProgramCreateNestedOneWithoutAdminsInputObjectSchema),
  })
  .strict();

export const ProgramAdminCreateWithoutUserInputObjectSchema = Schema;
