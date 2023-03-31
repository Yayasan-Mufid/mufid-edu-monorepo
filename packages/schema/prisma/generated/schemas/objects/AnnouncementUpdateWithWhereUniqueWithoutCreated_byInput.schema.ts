import { z } from 'zod';
import { AnnouncementWhereUniqueInputObjectSchema } from './AnnouncementWhereUniqueInput.schema';
import { AnnouncementUpdateWithoutCreated_byInputObjectSchema } from './AnnouncementUpdateWithoutCreated_byInput.schema';
import { AnnouncementUncheckedUpdateWithoutCreated_byInputObjectSchema } from './AnnouncementUncheckedUpdateWithoutCreated_byInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AnnouncementUpdateWithWhereUniqueWithoutCreated_byInput> =
  z
    .object({
      where: z.lazy(() => AnnouncementWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => AnnouncementUpdateWithoutCreated_byInputObjectSchema),
        z.lazy(
          () => AnnouncementUncheckedUpdateWithoutCreated_byInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const AnnouncementUpdateWithWhereUniqueWithoutCreated_byInputObjectSchema =
  Schema;
