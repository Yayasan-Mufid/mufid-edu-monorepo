import { z } from 'zod';
import { ModuleUpdateWithoutStudentsInputObjectSchema } from './ModuleUpdateWithoutStudentsInput.schema';
import { ModuleUncheckedUpdateWithoutStudentsInputObjectSchema } from './ModuleUncheckedUpdateWithoutStudentsInput.schema';
import { ModuleCreateWithoutStudentsInputObjectSchema } from './ModuleCreateWithoutStudentsInput.schema';
import { ModuleUncheckedCreateWithoutStudentsInputObjectSchema } from './ModuleUncheckedCreateWithoutStudentsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleUpsertWithoutStudentsInput> = z
  .object({
    update: z.union([
      z.lazy(() => ModuleUpdateWithoutStudentsInputObjectSchema),
      z.lazy(() => ModuleUncheckedUpdateWithoutStudentsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ModuleCreateWithoutStudentsInputObjectSchema),
      z.lazy(() => ModuleUncheckedCreateWithoutStudentsInputObjectSchema),
    ]),
  })
  .strict();

export const ModuleUpsertWithoutStudentsInputObjectSchema = Schema;
