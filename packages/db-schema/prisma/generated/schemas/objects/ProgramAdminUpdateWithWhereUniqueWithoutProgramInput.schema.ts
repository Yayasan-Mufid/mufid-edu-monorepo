import { z } from 'zod';
import { ProgramAdminWhereUniqueInputObjectSchema } from './ProgramAdminWhereUniqueInput.schema';
import { ProgramAdminUpdateWithoutProgramInputObjectSchema } from './ProgramAdminUpdateWithoutProgramInput.schema';
import { ProgramAdminUncheckedUpdateWithoutProgramInputObjectSchema } from './ProgramAdminUncheckedUpdateWithoutProgramInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProgramAdminUpdateWithWhereUniqueWithoutProgramInput> =
  z
    .object({
      where: z.lazy(() => ProgramAdminWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => ProgramAdminUpdateWithoutProgramInputObjectSchema),
        z.lazy(
          () => ProgramAdminUncheckedUpdateWithoutProgramInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ProgramAdminUpdateWithWhereUniqueWithoutProgramInputObjectSchema =
  Schema;
