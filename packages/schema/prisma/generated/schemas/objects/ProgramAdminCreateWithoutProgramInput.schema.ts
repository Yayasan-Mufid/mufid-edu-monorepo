import { z } from 'zod';
import { UserCreateNestedOneWithoutManaged_programsInputObjectSchema } from './UserCreateNestedOneWithoutManaged_programsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProgramAdminCreateWithoutProgramInput> = z
  .object({
    id: z.string().optional(),
    user: z.lazy(
      () => UserCreateNestedOneWithoutManaged_programsInputObjectSchema,
    ),
    assigned_at: z.date().optional(),
  })
  .strict();

export const ProgramAdminCreateWithoutProgramInputObjectSchema = Schema;
