import { z } from 'zod';
import { ModuleUpdateWithoutStudy_groupsInputObjectSchema } from './ModuleUpdateWithoutStudy_groupsInput.schema';
import { ModuleUncheckedUpdateWithoutStudy_groupsInputObjectSchema } from './ModuleUncheckedUpdateWithoutStudy_groupsInput.schema';
import { ModuleCreateWithoutStudy_groupsInputObjectSchema } from './ModuleCreateWithoutStudy_groupsInput.schema';
import { ModuleUncheckedCreateWithoutStudy_groupsInputObjectSchema } from './ModuleUncheckedCreateWithoutStudy_groupsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleUpsertWithoutStudy_groupsInput> = z
  .object({
    update: z.union([
      z.lazy(() => ModuleUpdateWithoutStudy_groupsInputObjectSchema),
      z.lazy(() => ModuleUncheckedUpdateWithoutStudy_groupsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ModuleCreateWithoutStudy_groupsInputObjectSchema),
      z.lazy(() => ModuleUncheckedCreateWithoutStudy_groupsInputObjectSchema),
    ]),
  })
  .strict();

export const ModuleUpsertWithoutStudy_groupsInputObjectSchema = Schema;
