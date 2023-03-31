import { z } from 'zod';

export const UserScalarFieldEnumSchema = z.enum([
  'id',
  'name',
  'gender',
  'date_of_birth',
  'place_of_birth',
  'username',
  'email',
  'password',
  'emailVerified',
  'image',
  'address',
  'phone_number',
  'wa_number',
  'telegram_id',
  'otp',
  'otp_expired',
  'mandatory_filled',
  'suspended',
  'profile_picture',
]);
