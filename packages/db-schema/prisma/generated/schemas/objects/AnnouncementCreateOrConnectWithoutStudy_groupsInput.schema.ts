import { z } from 'zod';
import { AnnouncementWhereUniqueInputObjectSchema } from './AnnouncementWhereUniqueInput.schema';
import { AnnouncementCreateWithoutStudy_groupsInputObjectSchema } from './AnnouncementCreateWithoutStudy_groupsInput.schema';
import { AnnouncementUncheckedCreateWithoutStudy_groupsInputObjectSchema } from './AnnouncementUncheckedCreateWithoutStudy_groupsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AnnouncementCreateOrConnectWithoutStudy_groupsInput> =
  z
    .object({
      where: z.lazy(() => AnnouncementWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => AnnouncementCreateWithoutStudy_groupsInputObjectSchema),
        z.lazy(
          () => AnnouncementUncheckedCreateWithoutStudy_groupsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const AnnouncementCreateOrConnectWithoutStudy_groupsInputObjectSchema =
  Schema;
