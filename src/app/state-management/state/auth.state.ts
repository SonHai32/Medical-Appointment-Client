import AuthToken from 'src/app/models/auth-token.model';
import { User } from '../../models/user.model';
export default interface AuthState {
  currentUser: User | null;
  authenticated: boolean;
  isLoading: boolean;
  hasError: boolean;
  errorMessage: string | null;
  accessToken: AuthToken | null;
}
