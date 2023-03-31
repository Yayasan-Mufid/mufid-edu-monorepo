import { z } from 'zod';

export const UserRoleScalarFieldEnumSchema = z.enum([
  'id',
  'user_id',
  'role_name',
]);
