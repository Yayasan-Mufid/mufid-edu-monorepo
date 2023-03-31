import { z } from 'zod';
import { ModuleWhereUniqueInputObjectSchema } from './ModuleWhereUniqueInput.schema';
import { ModuleCreateWithoutStudentsInputObjectSchema } from './ModuleCreateWithoutStudentsInput.schema';
import { ModuleUncheckedCreateWithoutStudentsInputObjectSchema } from './ModuleUncheckedCreateWithoutStudentsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleCreateOrConnectWithoutStudentsInput> = z
  .object({
    where: z.lazy(() => ModuleWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ModuleCreateWithoutStudentsInputObjectSchema),
      z.lazy(() => ModuleUncheckedCreateWithoutStudentsInputObjectSchema),
    ]),
  })
  .strict();

export const ModuleCreateOrConnectWithoutStudentsInputObjectSchema = Schema;
