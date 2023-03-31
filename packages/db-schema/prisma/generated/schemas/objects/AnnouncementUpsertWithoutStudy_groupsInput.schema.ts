import { z } from 'zod';
import { AnnouncementUpdateWithoutStudy_groupsInputObjectSchema } from './AnnouncementUpdateWithoutStudy_groupsInput.schema';
import { AnnouncementUncheckedUpdateWithoutStudy_groupsInputObjectSchema } from './AnnouncementUncheckedUpdateWithoutStudy_groupsInput.schema';
import { AnnouncementCreateWithoutStudy_groupsInputObjectSchema } from './AnnouncementCreateWithoutStudy_groupsInput.schema';
import { AnnouncementUncheckedCreateWithoutStudy_groupsInputObjectSchema } from './AnnouncementUncheckedCreateWithoutStudy_groupsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AnnouncementUpsertWithoutStudy_groupsInput> = z
  .object({
    update: z.union([
      z.lazy(() => AnnouncementUpdateWithoutStudy_groupsInputObjectSchema),
      z.lazy(
        () => AnnouncementUncheckedUpdateWithoutStudy_groupsInputObjectSchema,
      ),
    ]),
    create: z.union([
      z.lazy(() => AnnouncementCreateWithoutStudy_groupsInputObjectSchema),
      z.lazy(
        () => AnnouncementUncheckedCreateWithoutStudy_groupsInputObjectSchema,
      ),
    ]),
  })
  .strict();

export const AnnouncementUpsertWithoutStudy_groupsInputObjectSchema = Schema;
