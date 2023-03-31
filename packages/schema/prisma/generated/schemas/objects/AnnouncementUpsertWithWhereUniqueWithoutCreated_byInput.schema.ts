import { z } from 'zod';
import { AnnouncementWhereUniqueInputObjectSchema } from './AnnouncementWhereUniqueInput.schema';
import { AnnouncementUpdateWithoutCreated_byInputObjectSchema } from './AnnouncementUpdateWithoutCreated_byInput.schema';
import { AnnouncementUncheckedUpdateWithoutCreated_byInputObjectSchema } from './AnnouncementUncheckedUpdateWithoutCreated_byInput.schema';
import { AnnouncementCreateWithoutCreated_byInputObjectSchema } from './AnnouncementCreateWithoutCreated_byInput.schema';
import { AnnouncementUncheckedCreateWithoutCreated_byInputObjectSchema } from './AnnouncementUncheckedCreateWithoutCreated_byInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AnnouncementUpsertWithWhereUniqueWithoutCreated_byInput> =
  z
    .object({
      where: z.lazy(() => AnnouncementWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => AnnouncementUpdateWithoutCreated_byInputObjectSchema),
        z.lazy(
          () => AnnouncementUncheckedUpdateWithoutCreated_byInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => AnnouncementCreateWithoutCreated_byInputObjectSchema),
        z.lazy(
          () => AnnouncementUncheckedCreateWithoutCreated_byInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const AnnouncementUpsertWithWhereUniqueWithoutCreated_byInputObjectSchema =
  Schema;
