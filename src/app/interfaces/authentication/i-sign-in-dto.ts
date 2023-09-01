export interface ISignInDto {
  email?: string
  password?: string
}

export type SignInTypes = 'email' | 'password'
