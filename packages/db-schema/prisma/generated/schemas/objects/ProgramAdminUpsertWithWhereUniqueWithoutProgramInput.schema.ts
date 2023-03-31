import { z } from 'zod';
import { ProgramAdminWhereUniqueInputObjectSchema } from './ProgramAdminWhereUniqueInput.schema';
import { ProgramAdminUpdateWithoutProgramInputObjectSchema } from './ProgramAdminUpdateWithoutProgramInput.schema';
import { ProgramAdminUncheckedUpdateWithoutProgramInputObjectSchema } from './ProgramAdminUncheckedUpdateWithoutProgramInput.schema';
import { ProgramAdminCreateWithoutProgramInputObjectSchema } from './ProgramAdminCreateWithoutProgramInput.schema';
import { ProgramAdminUncheckedCreateWithoutProgramInputObjectSchema } from './ProgramAdminUncheckedCreateWithoutProgramInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProgramAdminUpsertWithWhereUniqueWithoutProgramInput> =
  z
    .object({
      where: z.lazy(() => ProgramAdminWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => ProgramAdminUpdateWithoutProgramInputObjectSchema),
        z.lazy(
          () => ProgramAdminUncheckedUpdateWithoutProgramInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => ProgramAdminCreateWithoutProgramInputObjectSchema),
        z.lazy(
          () => ProgramAdminUncheckedCreateWithoutProgramInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ProgramAdminUpsertWithWhereUniqueWithoutProgramInputObjectSchema =
  Schema;
