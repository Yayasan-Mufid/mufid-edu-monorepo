import { z } from 'zod';
import { ProgramCreateWithoutModulesInputObjectSchema } from './ProgramCreateWithoutModulesInput.schema';
import { ProgramUncheckedCreateWithoutModulesInputObjectSchema } from './ProgramUncheckedCreateWithoutModulesInput.schema';
import { ProgramCreateOrConnectWithoutModulesInputObjectSchema } from './ProgramCreateOrConnectWithoutModulesInput.schema';
import { ProgramUpsertWithoutModulesInputObjectSchema } from './ProgramUpsertWithoutModulesInput.schema';
import { ProgramWhereUniqueInputObjectSchema } from './ProgramWhereUniqueInput.schema';
import { ProgramUpdateWithoutModulesInputObjectSchema } from './ProgramUpdateWithoutModulesInput.schema';
import { ProgramUncheckedUpdateWithoutModulesInputObjectSchema } from './ProgramUncheckedUpdateWithoutModulesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProgramUpdateOneRequiredWithoutModulesNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ProgramCreateWithoutModulesInputObjectSchema),
          z.lazy(() => ProgramUncheckedCreateWithoutModulesInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => ProgramCreateOrConnectWithoutModulesInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => ProgramUpsertWithoutModulesInputObjectSchema)
        .optional(),
      connect: z.lazy(() => ProgramWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => ProgramUpdateWithoutModulesInputObjectSchema),
          z.lazy(() => ProgramUncheckedUpdateWithoutModulesInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const ProgramUpdateOneRequiredWithoutModulesNestedInputObjectSchema =
  Schema;
