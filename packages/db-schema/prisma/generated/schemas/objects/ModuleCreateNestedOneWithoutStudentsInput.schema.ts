import { z } from 'zod';
import { ModuleCreateWithoutStudentsInputObjectSchema } from './ModuleCreateWithoutStudentsInput.schema';
import { ModuleUncheckedCreateWithoutStudentsInputObjectSchema } from './ModuleUncheckedCreateWithoutStudentsInput.schema';
import { ModuleCreateOrConnectWithoutStudentsInputObjectSchema } from './ModuleCreateOrConnectWithoutStudentsInput.schema';
import { ModuleWhereUniqueInputObjectSchema } from './ModuleWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleCreateNestedOneWithoutStudentsInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ModuleCreateWithoutStudentsInputObjectSchema),
        z.lazy(() => ModuleUncheckedCreateWithoutStudentsInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => ModuleCreateOrConnectWithoutStudentsInputObjectSchema)
      .optional(),
    connect: z.lazy(() => ModuleWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const ModuleCreateNestedOneWithoutStudentsInputObjectSchema = Schema;
