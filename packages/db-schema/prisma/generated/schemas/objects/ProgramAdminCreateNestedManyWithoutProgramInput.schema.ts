import { z } from 'zod';
import { ProgramAdminCreateWithoutProgramInputObjectSchema } from './ProgramAdminCreateWithoutProgramInput.schema';
import { ProgramAdminUncheckedCreateWithoutProgramInputObjectSchema } from './ProgramAdminUncheckedCreateWithoutProgramInput.schema';
import { ProgramAdminCreateOrConnectWithoutProgramInputObjectSchema } from './ProgramAdminCreateOrConnectWithoutProgramInput.schema';
import { ProgramAdminCreateManyProgramInputEnvelopeObjectSchema } from './ProgramAdminCreateManyProgramInputEnvelope.schema';
import { ProgramAdminWhereUniqueInputObjectSchema } from './ProgramAdminWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProgramAdminCreateNestedManyWithoutProgramInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ProgramAdminCreateWithoutProgramInputObjectSchema),
          z
            .lazy(() => ProgramAdminCreateWithoutProgramInputObjectSchema)
            .array(),
          z.lazy(
            () => ProgramAdminUncheckedCreateWithoutProgramInputObjectSchema,
          ),
          z
            .lazy(
              () => ProgramAdminUncheckedCreateWithoutProgramInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => ProgramAdminCreateOrConnectWithoutProgramInputObjectSchema,
          ),
          z
            .lazy(
              () => ProgramAdminCreateOrConnectWithoutProgramInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => ProgramAdminCreateManyProgramInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => ProgramAdminWhereUniqueInputObjectSchema),
          z.lazy(() => ProgramAdminWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ProgramAdminCreateNestedManyWithoutProgramInputObjectSchema =
  Schema;
