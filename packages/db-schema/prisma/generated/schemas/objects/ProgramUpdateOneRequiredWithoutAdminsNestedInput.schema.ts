import { z } from 'zod';
import { ProgramCreateWithoutAdminsInputObjectSchema } from './ProgramCreateWithoutAdminsInput.schema';
import { ProgramUncheckedCreateWithoutAdminsInputObjectSchema } from './ProgramUncheckedCreateWithoutAdminsInput.schema';
import { ProgramCreateOrConnectWithoutAdminsInputObjectSchema } from './ProgramCreateOrConnectWithoutAdminsInput.schema';
import { ProgramUpsertWithoutAdminsInputObjectSchema } from './ProgramUpsertWithoutAdminsInput.schema';
import { ProgramWhereUniqueInputObjectSchema } from './ProgramWhereUniqueInput.schema';
import { ProgramUpdateWithoutAdminsInputObjectSchema } from './ProgramUpdateWithoutAdminsInput.schema';
import { ProgramUncheckedUpdateWithoutAdminsInputObjectSchema } from './ProgramUncheckedUpdateWithoutAdminsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProgramUpdateOneRequiredWithoutAdminsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ProgramCreateWithoutAdminsInputObjectSchema),
          z.lazy(() => ProgramUncheckedCreateWithoutAdminsInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => ProgramCreateOrConnectWithoutAdminsInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => ProgramUpsertWithoutAdminsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => ProgramWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => ProgramUpdateWithoutAdminsInputObjectSchema),
          z.lazy(() => ProgramUncheckedUpdateWithoutAdminsInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const ProgramUpdateOneRequiredWithoutAdminsNestedInputObjectSchema =
  Schema;
