import { z } from 'zod';
import { ModuleUpdateWithoutExamsInputObjectSchema } from './ModuleUpdateWithoutExamsInput.schema';
import { ModuleUncheckedUpdateWithoutExamsInputObjectSchema } from './ModuleUncheckedUpdateWithoutExamsInput.schema';
import { ModuleCreateWithoutExamsInputObjectSchema } from './ModuleCreateWithoutExamsInput.schema';
import { ModuleUncheckedCreateWithoutExamsInputObjectSchema } from './ModuleUncheckedCreateWithoutExamsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleUpsertWithoutExamsInput> = z
  .object({
    update: z.union([
      z.lazy(() => ModuleUpdateWithoutExamsInputObjectSchema),
      z.lazy(() => ModuleUncheckedUpdateWithoutExamsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ModuleCreateWithoutExamsInputObjectSchema),
      z.lazy(() => ModuleUncheckedCreateWithoutExamsInputObjectSchema),
    ]),
  })
  .strict();

export const ModuleUpsertWithoutExamsInputObjectSchema = Schema;
