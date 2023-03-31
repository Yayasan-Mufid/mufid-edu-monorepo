import { z } from 'zod';
import { ModuleItemAttachmentStatusWhereInputObjectSchema } from './objects/ModuleItemAttachmentStatusWhereInput.schema';

export const ModuleItemAttachmentStatusDeleteManySchema = z.object({
  where: ModuleItemAttachmentStatusWhereInputObjectSchema.optional(),
});
