import { z } from 'zod';
import { UserCreateNestedOneWithoutManaged_programsInputObjectSchema } from './UserCreateNestedOneWithoutManaged_programsInput.schema';
import { ProgramCreateNestedOneWithoutAdminsInputObjectSchema } from './ProgramCreateNestedOneWithoutAdminsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProgramAdminCreateInput> = z
  .object({
    id: z.string().optional(),
    user: z.lazy(
      () => UserCreateNestedOneWithoutManaged_programsInputObjectSchema,
    ),
    program: z.lazy(() => ProgramCreateNestedOneWithoutAdminsInputObjectSchema),
    assigned_at: z.date().optional(),
  })
  .strict();

export const ProgramAdminCreateInputObjectSchema = Schema;
