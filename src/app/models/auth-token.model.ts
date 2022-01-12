export default interface AuthToken {
  accessToken?: string;
  refreshToken?: string;
  expiresIn: Date;
}
