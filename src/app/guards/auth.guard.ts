import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, RouterStateSnapshot } from "@angular/router";
import { CommonService } from "../services/common.service";



@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate{

  constructor(private commonService:CommonService){}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    if(this.commonService.isRouteBlocked){
      return false;
    }
    return true;
  }
}