import { z } from 'zod';
import { ModuleCreateNestedOneWithoutStudentsInputObjectSchema } from './ModuleCreateNestedOneWithoutStudentsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleAccessCreateWithoutUserInput> = z
  .object({
    id: z.string().optional(),
    granted_on: z.date().optional(),
    module: z.lazy(() => ModuleCreateNestedOneWithoutStudentsInputObjectSchema),
  })
  .strict();

export const ModuleAccessCreateWithoutUserInputObjectSchema = Schema;
