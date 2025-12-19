import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('authToken');
      const user = localStorage.getItem('user');

      if (!token || !user) {
        // Clear any remaining auth data
        localStorage.removeItem('authToken');
        localStorage.removeItem('user');
        localStorage.removeItem('userToken'); // Clear any old token keys
        sessionStorage.removeItem('authToken');
        sessionStorage.removeItem('user');
        
        this.router.navigate(['/']); // redirect to landing/login
        return false;
      }

      // Parse user data and check role if needed
      let userData;
      try {
        userData = JSON.parse(user);
      } catch (e) {
        // Invalid user data, clear and redirect
        localStorage.removeItem('authToken');
        localStorage.removeItem('user');
        this.router.navigate(['/']);
        return false;
      }

      // Check if route has role restriction
      const allowedRoles = route.data['roles'] as Array<string>;
      if (allowedRoles && allowedRoles.length > 0 && !allowedRoles.includes(userData.role)) {
        // user role is not allowed
        this.router.navigate(['/home']); // redirect to default page
        return false;
      }

      return true; // authenticated and role is allowed
    }

    return false;
  }
}
