import { z } from 'zod';
import { ProgramAdminScalarWhereInputObjectSchema } from './ProgramAdminScalarWhereInput.schema';
import { ProgramAdminUpdateManyMutationInputObjectSchema } from './ProgramAdminUpdateManyMutationInput.schema';
import { ProgramAdminUncheckedUpdateManyWithoutManaged_programsInputObjectSchema } from './ProgramAdminUncheckedUpdateManyWithoutManaged_programsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProgramAdminUpdateManyWithWhereWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => ProgramAdminScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => ProgramAdminUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            ProgramAdminUncheckedUpdateManyWithoutManaged_programsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ProgramAdminUpdateManyWithWhereWithoutUserInputObjectSchema =
  Schema;
