import { z } from 'zod';
import { AnnouncementScalarWhereInputObjectSchema } from './AnnouncementScalarWhereInput.schema';
import { AnnouncementUpdateManyMutationInputObjectSchema } from './AnnouncementUpdateManyMutationInput.schema';
import { AnnouncementUncheckedUpdateManyWithoutCreated_announcementsInputObjectSchema } from './AnnouncementUncheckedUpdateManyWithoutCreated_announcementsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AnnouncementUpdateManyWithWhereWithoutCreated_byInput> =
  z
    .object({
      where: z.lazy(() => AnnouncementScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => AnnouncementUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            AnnouncementUncheckedUpdateManyWithoutCreated_announcementsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const AnnouncementUpdateManyWithWhereWithoutCreated_byInputObjectSchema =
  Schema;
