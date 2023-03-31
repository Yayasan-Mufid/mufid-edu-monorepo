import { z } from 'zod';
import { ProgramAdminWhereUniqueInputObjectSchema } from './ProgramAdminWhereUniqueInput.schema';
import { ProgramAdminCreateWithoutProgramInputObjectSchema } from './ProgramAdminCreateWithoutProgramInput.schema';
import { ProgramAdminUncheckedCreateWithoutProgramInputObjectSchema } from './ProgramAdminUncheckedCreateWithoutProgramInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProgramAdminCreateOrConnectWithoutProgramInput> =
  z
    .object({
      where: z.lazy(() => ProgramAdminWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => ProgramAdminCreateWithoutProgramInputObjectSchema),
        z.lazy(
          () => ProgramAdminUncheckedCreateWithoutProgramInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ProgramAdminCreateOrConnectWithoutProgramInputObjectSchema =
  Schema;
