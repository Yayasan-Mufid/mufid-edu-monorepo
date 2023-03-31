import { z } from 'zod';
import { AnnouncementCreateWithoutStudy_groupsInputObjectSchema } from './AnnouncementCreateWithoutStudy_groupsInput.schema';
import { AnnouncementUncheckedCreateWithoutStudy_groupsInputObjectSchema } from './AnnouncementUncheckedCreateWithoutStudy_groupsInput.schema';
import { AnnouncementCreateOrConnectWithoutStudy_groupsInputObjectSchema } from './AnnouncementCreateOrConnectWithoutStudy_groupsInput.schema';
import { AnnouncementUpsertWithoutStudy_groupsInputObjectSchema } from './AnnouncementUpsertWithoutStudy_groupsInput.schema';
import { AnnouncementWhereUniqueInputObjectSchema } from './AnnouncementWhereUniqueInput.schema';
import { AnnouncementUpdateWithoutStudy_groupsInputObjectSchema } from './AnnouncementUpdateWithoutStudy_groupsInput.schema';
import { AnnouncementUncheckedUpdateWithoutStudy_groupsInputObjectSchema } from './AnnouncementUncheckedUpdateWithoutStudy_groupsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AnnouncementUpdateOneRequiredWithoutStudy_groupsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => AnnouncementCreateWithoutStudy_groupsInputObjectSchema),
          z.lazy(
            () =>
              AnnouncementUncheckedCreateWithoutStudy_groupsInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () => AnnouncementCreateOrConnectWithoutStudy_groupsInputObjectSchema,
        )
        .optional(),
      upsert: z
        .lazy(() => AnnouncementUpsertWithoutStudy_groupsInputObjectSchema)
        .optional(),
      connect: z
        .lazy(() => AnnouncementWhereUniqueInputObjectSchema)
        .optional(),
      update: z
        .union([
          z.lazy(() => AnnouncementUpdateWithoutStudy_groupsInputObjectSchema),
          z.lazy(
            () =>
              AnnouncementUncheckedUpdateWithoutStudy_groupsInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const AnnouncementUpdateOneRequiredWithoutStudy_groupsNestedInputObjectSchema =
  Schema;
