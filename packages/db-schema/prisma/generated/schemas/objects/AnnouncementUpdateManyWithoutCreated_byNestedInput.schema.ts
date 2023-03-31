import { z } from 'zod';
import { AnnouncementCreateWithoutCreated_byInputObjectSchema } from './AnnouncementCreateWithoutCreated_byInput.schema';
import { AnnouncementUncheckedCreateWithoutCreated_byInputObjectSchema } from './AnnouncementUncheckedCreateWithoutCreated_byInput.schema';
import { AnnouncementCreateOrConnectWithoutCreated_byInputObjectSchema } from './AnnouncementCreateOrConnectWithoutCreated_byInput.schema';
import { AnnouncementUpsertWithWhereUniqueWithoutCreated_byInputObjectSchema } from './AnnouncementUpsertWithWhereUniqueWithoutCreated_byInput.schema';
import { AnnouncementCreateManyCreated_byInputEnvelopeObjectSchema } from './AnnouncementCreateManyCreated_byInputEnvelope.schema';
import { AnnouncementWhereUniqueInputObjectSchema } from './AnnouncementWhereUniqueInput.schema';
import { AnnouncementUpdateWithWhereUniqueWithoutCreated_byInputObjectSchema } from './AnnouncementUpdateWithWhereUniqueWithoutCreated_byInput.schema';
import { AnnouncementUpdateManyWithWhereWithoutCreated_byInputObjectSchema } from './AnnouncementUpdateManyWithWhereWithoutCreated_byInput.schema';
import { AnnouncementScalarWhereInputObjectSchema } from './AnnouncementScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AnnouncementUpdateManyWithoutCreated_byNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => AnnouncementCreateWithoutCreated_byInputObjectSchema),
          z
            .lazy(() => AnnouncementCreateWithoutCreated_byInputObjectSchema)
            .array(),
          z.lazy(
            () => AnnouncementUncheckedCreateWithoutCreated_byInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                AnnouncementUncheckedCreateWithoutCreated_byInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => AnnouncementCreateOrConnectWithoutCreated_byInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                AnnouncementCreateOrConnectWithoutCreated_byInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              AnnouncementUpsertWithWhereUniqueWithoutCreated_byInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                AnnouncementUpsertWithWhereUniqueWithoutCreated_byInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => AnnouncementCreateManyCreated_byInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => AnnouncementWhereUniqueInputObjectSchema),
          z.lazy(() => AnnouncementWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => AnnouncementWhereUniqueInputObjectSchema),
          z.lazy(() => AnnouncementWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => AnnouncementWhereUniqueInputObjectSchema),
          z.lazy(() => AnnouncementWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => AnnouncementWhereUniqueInputObjectSchema),
          z.lazy(() => AnnouncementWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              AnnouncementUpdateWithWhereUniqueWithoutCreated_byInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                AnnouncementUpdateWithWhereUniqueWithoutCreated_byInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              AnnouncementUpdateManyWithWhereWithoutCreated_byInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                AnnouncementUpdateManyWithWhereWithoutCreated_byInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => AnnouncementScalarWhereInputObjectSchema),
          z.lazy(() => AnnouncementScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const AnnouncementUpdateManyWithoutCreated_byNestedInputObjectSchema =
  Schema;
