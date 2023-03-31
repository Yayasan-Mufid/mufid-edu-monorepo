import { z } from 'zod';
import { ProgramAdminWhereUniqueInputObjectSchema } from './ProgramAdminWhereUniqueInput.schema';
import { ProgramAdminUpdateWithoutUserInputObjectSchema } from './ProgramAdminUpdateWithoutUserInput.schema';
import { ProgramAdminUncheckedUpdateWithoutUserInputObjectSchema } from './ProgramAdminUncheckedUpdateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProgramAdminUpdateWithWhereUniqueWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => ProgramAdminWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => ProgramAdminUpdateWithoutUserInputObjectSchema),
        z.lazy(() => ProgramAdminUncheckedUpdateWithoutUserInputObjectSchema),
      ]),
    })
    .strict();

export const ProgramAdminUpdateWithWhereUniqueWithoutUserInputObjectSchema =
  Schema;
