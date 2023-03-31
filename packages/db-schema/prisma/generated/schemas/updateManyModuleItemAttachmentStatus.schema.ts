import { z } from 'zod';
import { ModuleItemAttachmentStatusUpdateManyMutationInputObjectSchema } from './objects/ModuleItemAttachmentStatusUpdateManyMutationInput.schema';
import { ModuleItemAttachmentStatusWhereInputObjectSchema } from './objects/ModuleItemAttachmentStatusWhereInput.schema';

export const ModuleItemAttachmentStatusUpdateManySchema = z.object({
  data: ModuleItemAttachmentStatusUpdateManyMutationInputObjectSchema,
  where: ModuleItemAttachmentStatusWhereInputObjectSchema.optional(),
});
