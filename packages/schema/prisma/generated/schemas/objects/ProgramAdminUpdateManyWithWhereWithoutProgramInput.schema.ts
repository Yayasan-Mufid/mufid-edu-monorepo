import { z } from 'zod';
import { ProgramAdminScalarWhereInputObjectSchema } from './ProgramAdminScalarWhereInput.schema';
import { ProgramAdminUpdateManyMutationInputObjectSchema } from './ProgramAdminUpdateManyMutationInput.schema';
import { ProgramAdminUncheckedUpdateManyWithoutAdminsInputObjectSchema } from './ProgramAdminUncheckedUpdateManyWithoutAdminsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProgramAdminUpdateManyWithWhereWithoutProgramInput> =
  z
    .object({
      where: z.lazy(() => ProgramAdminScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => ProgramAdminUpdateManyMutationInputObjectSchema),
        z.lazy(
          () => ProgramAdminUncheckedUpdateManyWithoutAdminsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ProgramAdminUpdateManyWithWhereWithoutProgramInputObjectSchema =
  Schema;
