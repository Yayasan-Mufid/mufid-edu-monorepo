import { z } from 'zod';
import { ProgramAdminCreateWithoutUserInputObjectSchema } from './ProgramAdminCreateWithoutUserInput.schema';
import { ProgramAdminUncheckedCreateWithoutUserInputObjectSchema } from './ProgramAdminUncheckedCreateWithoutUserInput.schema';
import { ProgramAdminCreateOrConnectWithoutUserInputObjectSchema } from './ProgramAdminCreateOrConnectWithoutUserInput.schema';
import { ProgramAdminUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './ProgramAdminUpsertWithWhereUniqueWithoutUserInput.schema';
import { ProgramAdminCreateManyUserInputEnvelopeObjectSchema } from './ProgramAdminCreateManyUserInputEnvelope.schema';
import { ProgramAdminWhereUniqueInputObjectSchema } from './ProgramAdminWhereUniqueInput.schema';
import { ProgramAdminUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './ProgramAdminUpdateWithWhereUniqueWithoutUserInput.schema';
import { ProgramAdminUpdateManyWithWhereWithoutUserInputObjectSchema } from './ProgramAdminUpdateManyWithWhereWithoutUserInput.schema';
import { ProgramAdminScalarWhereInputObjectSchema } from './ProgramAdminScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProgramAdminUpdateManyWithoutUserNestedInput> = z
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
    upsert: z
      .union([
        z.lazy(
          () => ProgramAdminUpsertWithWhereUniqueWithoutUserInputObjectSchema,
        ),
        z
          .lazy(
            () => ProgramAdminUpsertWithWhereUniqueWithoutUserInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => ProgramAdminCreateManyUserInputEnvelopeObjectSchema)
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
          () => ProgramAdminUpdateWithWhereUniqueWithoutUserInputObjectSchema,
        ),
        z
          .lazy(
            () => ProgramAdminUpdateWithWhereUniqueWithoutUserInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(
          () => ProgramAdminUpdateManyWithWhereWithoutUserInputObjectSchema,
        ),
        z
          .lazy(
            () => ProgramAdminUpdateManyWithWhereWithoutUserInputObjectSchema,
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

export const ProgramAdminUpdateManyWithoutUserNestedInputObjectSchema = Schema;
