import { z } from 'zod';
import { ProgramAdminCreateWithoutUserInputObjectSchema } from './ProgramAdminCreateWithoutUserInput.schema';
import { ProgramAdminUncheckedCreateWithoutUserInputObjectSchema } from './ProgramAdminUncheckedCreateWithoutUserInput.schema';
import { ProgramAdminCreateOrConnectWithoutUserInputObjectSchema } from './ProgramAdminCreateOrConnectWithoutUserInput.schema';
import { ProgramAdminCreateManyUserInputEnvelopeObjectSchema } from './ProgramAdminCreateManyUserInputEnvelope.schema';
import { ProgramAdminWhereUniqueInputObjectSchema } from './ProgramAdminWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProgramAdminUncheckedCreateNestedManyWithoutUserInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ProgramAdminCreateWithoutUserInputObjectSchema),
          z.lazy(() => ProgramAdminCreateWithoutUserInputObjectSchema).array(),
          z.lazy(() => ProgramAdminUncheckedCreateWithoutUserInputObjectSchema),
          z
            .lazy(() => ProgramAdminUncheckedCreateWithoutUserInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => ProgramAdminCreateOrConnectWithoutUserInputObjectSchema),
          z
            .lazy(() => ProgramAdminCreateOrConnectWithoutUserInputObjectSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => ProgramAdminCreateManyUserInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => ProgramAdminWhereUniqueInputObjectSchema),
          z.lazy(() => ProgramAdminWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ProgramAdminUncheckedCreateNestedManyWithoutUserInputObjectSchema =
  Schema;
