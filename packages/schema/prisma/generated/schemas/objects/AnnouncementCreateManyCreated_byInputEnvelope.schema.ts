import { z } from 'zod';
import { AnnouncementCreateManyCreated_byInputObjectSchema } from './AnnouncementCreateManyCreated_byInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AnnouncementCreateManyCreated_byInputEnvelope> =
  z
    .object({
      data: z
        .lazy(() => AnnouncementCreateManyCreated_byInputObjectSchema)
        .array(),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const AnnouncementCreateManyCreated_byInputEnvelopeObjectSchema = Schema;
