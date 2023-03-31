import { z } from 'zod';
import { ProgramAdminWhereUniqueInputObjectSchema } from './ProgramAdminWhereUniqueInput.schema';
import { ProgramAdminUpdateWithoutUserInputObjectSchema } from './ProgramAdminUpdateWithoutUserInput.schema';
import { ProgramAdminUncheckedUpdateWithoutUserInputObjectSchema } from './ProgramAdminUncheckedUpdateWithoutUserInput.schema';
import { ProgramAdminCreateWithoutUserInputObjectSchema } from './ProgramAdminCreateWithoutUserInput.schema';
import { ProgramAdminUncheckedCreateWithoutUserInputObjectSchema } from './ProgramAdminUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProgramAdminUpsertWithWhereUniqueWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => ProgramAdminWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => ProgramAdminUpdateWithoutUserInputObjectSchema),
        z.lazy(() => ProgramAdminUncheckedUpdateWithoutUserInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => ProgramAdminCreateWithoutUserInputObjectSchema),
        z.lazy(() => ProgramAdminUncheckedCreateWithoutUserInputObjectSchema),
      ]),
    })
    .strict();

export const ProgramAdminUpsertWithWhereUniqueWithoutUserInputObjectSchema =
  Schema;
