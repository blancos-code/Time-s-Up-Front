export class AuthGuard {
  static isAuthenticated() {
    return localStorage.getItem('accessToken');
  }
}