import { z } from 'zod';
import { AnnouncementCreateWithoutCreated_byInputObjectSchema } from './AnnouncementCreateWithoutCreated_byInput.schema';
import { AnnouncementUncheckedCreateWithoutCreated_byInputObjectSchema } from './AnnouncementUncheckedCreateWithoutCreated_byInput.schema';
import { AnnouncementCreateOrConnectWithoutCreated_byInputObjectSchema } from './AnnouncementCreateOrConnectWithoutCreated_byInput.schema';
import { AnnouncementCreateManyCreated_byInputEnvelopeObjectSchema } from './AnnouncementCreateManyCreated_byInputEnvelope.schema';
import { AnnouncementWhereUniqueInputObjectSchema } from './AnnouncementWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AnnouncementCreateNestedManyWithoutCreated_byInput> =
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
      createMany: z
        .lazy(() => AnnouncementCreateManyCreated_byInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => AnnouncementWhereUniqueInputObjectSchema),
          z.lazy(() => AnnouncementWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const AnnouncementCreateNestedManyWithoutCreated_byInputObjectSchema =
  Schema;
