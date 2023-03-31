import { z } from 'zod';
import { UserCreateNestedOneWithoutManaged_programsInputObjectSchema } from './UserCreateNestedOneWithoutManaged_programsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProgramAdminCreateWithoutProgramInput> = z
  .object({
    id: z.string().optional(),
    assigned_at: z.date().optional(),
    user: z.lazy(
      () => UserCreateNestedOneWithoutManaged_programsInputObjectSchema,
    ),
  })
  .strict();

export const ProgramAdminCreateWithoutProgramInputObjectSchema = Schema;
