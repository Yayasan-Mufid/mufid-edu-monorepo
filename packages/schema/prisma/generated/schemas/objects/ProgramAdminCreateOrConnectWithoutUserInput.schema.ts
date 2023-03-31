import { z } from 'zod';
import { ProgramAdminWhereUniqueInputObjectSchema } from './ProgramAdminWhereUniqueInput.schema';
import { ProgramAdminCreateWithoutUserInputObjectSchema } from './ProgramAdminCreateWithoutUserInput.schema';
import { ProgramAdminUncheckedCreateWithoutUserInputObjectSchema } from './ProgramAdminUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProgramAdminCreateOrConnectWithoutUserInput> = z
  .object({
    where: z.lazy(() => ProgramAdminWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ProgramAdminCreateWithoutUserInputObjectSchema),
      z.lazy(() => ProgramAdminUncheckedCreateWithoutUserInputObjectSchema),
    ]),
  })
  .strict();

export const ProgramAdminCreateOrConnectWithoutUserInputObjectSchema = Schema;
