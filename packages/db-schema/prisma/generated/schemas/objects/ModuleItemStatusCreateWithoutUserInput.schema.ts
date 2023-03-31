import { z } from 'zod';
import { ModuleItemCreateNestedOneWithoutUser_statusInputObjectSchema } from './ModuleItemCreateNestedOneWithoutUser_statusInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemStatusCreateWithoutUserInput> = z
  .object({
    status: z.string().optional(),
    updated_at: z.date().optional(),
    module_item: z.lazy(
      () => ModuleItemCreateNestedOneWithoutUser_statusInputObjectSchema,
    ),
  })
  .strict();

export const ModuleItemStatusCreateWithoutUserInputObjectSchema = Schema;
