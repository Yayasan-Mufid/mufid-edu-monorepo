import { z } from 'zod';
import { ProgramAdminCreateWithoutProgramInputObjectSchema } from './ProgramAdminCreateWithoutProgramInput.schema';
import { ProgramAdminUncheckedCreateWithoutProgramInputObjectSchema } from './ProgramAdminUncheckedCreateWithoutProgramInput.schema';
import { ProgramAdminCreateOrConnectWithoutProgramInputObjectSchema } from './ProgramAdminCreateOrConnectWithoutProgramInput.schema';
import { ProgramAdminUpsertWithWhereUniqueWithoutProgramInputObjectSchema } from './ProgramAdminUpsertWithWhereUniqueWithoutProgramInput.schema';
import { ProgramAdminCreateManyProgramInputEnvelopeObjectSchema } from './ProgramAdminCreateManyProgramInputEnvelope.schema';
import { ProgramAdminWhereUniqueInputObjectSchema } from './ProgramAdminWhereUniqueInput.schema';
import { ProgramAdminUpdateWithWhereUniqueWithoutProgramInputObjectSchema } from './ProgramAdminUpdateWithWhereUniqueWithoutProgramInput.schema';
import { ProgramAdminUpdateManyWithWhereWithoutProgramInputObjectSchema } from './ProgramAdminUpdateManyWithWhereWithoutProgramInput.schema';
import { ProgramAdminScalarWhereInputObjectSchema } from './ProgramAdminScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProgramAdminUncheckedUpdateManyWithoutProgramNestedInput> =
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
      upsert: z
        .union([
          z.lazy(
            () =>
              ProgramAdminUpsertWithWhereUniqueWithoutProgramInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ProgramAdminUpsertWithWhereUniqueWithoutProgramInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => ProgramAdminCreateManyProgramInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => ProgramAdminWhereUniqueInputObjectSchema),
          z.lazy(() => ProgramAdminWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => ProgramAdminWhereUniqueInputObjectSchema),
          z.lazy(() => ProgramAdminWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => ProgramAdminWhereUniqueInputObjectSchema),
          z.lazy(() => ProgramAdminWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => ProgramAdminWhereUniqueInputObjectSchema),
          z.lazy(() => ProgramAdminWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              ProgramAdminUpdateWithWhereUniqueWithoutProgramInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ProgramAdminUpdateWithWhereUniqueWithoutProgramInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              ProgramAdminUpdateManyWithWhereWithoutProgramInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ProgramAdminUpdateManyWithWhereWithoutProgramInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => ProgramAdminScalarWhereInputObjectSchema),
          z.lazy(() => ProgramAdminScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ProgramAdminUncheckedUpdateManyWithoutProgramNestedInputObjectSchema =
  Schema;
