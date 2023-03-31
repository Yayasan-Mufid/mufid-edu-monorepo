import { z } from 'zod';
import { AnnouncementWhereUniqueInputObjectSchema } from './AnnouncementWhereUniqueInput.schema';
import { AnnouncementCreateWithoutCreated_byInputObjectSchema } from './AnnouncementCreateWithoutCreated_byInput.schema';
import { AnnouncementUncheckedCreateWithoutCreated_byInputObjectSchema } from './AnnouncementUncheckedCreateWithoutCreated_byInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AnnouncementCreateOrConnectWithoutCreated_byInput> =
  z
    .object({
      where: z.lazy(() => AnnouncementWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => AnnouncementCreateWithoutCreated_byInputObjectSchema),
        z.lazy(
          () => AnnouncementUncheckedCreateWithoutCreated_byInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const AnnouncementCreateOrConnectWithoutCreated_byInputObjectSchema =
  Schema;
