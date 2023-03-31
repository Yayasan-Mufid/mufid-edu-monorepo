import { z } from 'zod';
import { ProgramCreateNestedOneWithoutAdminsInputObjectSchema } from './ProgramCreateNestedOneWithoutAdminsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProgramAdminCreateWithoutUserInput> = z
  .object({
    id: z.string().optional(),
    program: z.lazy(() => ProgramCreateNestedOneWithoutAdminsInputObjectSchema),
    assigned_at: z.date().optional(),
  })
  .strict();

export const ProgramAdminCreateWithoutUserInputObjectSchema = Schema;
