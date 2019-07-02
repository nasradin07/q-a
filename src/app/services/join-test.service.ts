import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JoinTestService {
  private _password: string;
  private _nickname: string;
  private _testId: any;

  constructor() { }

  public saveCredentials({password, nickname}) {
    this._password = password;
    this._nickname = nickname;
  }

  public getCredentials() {
    return {
      password: this._password,
      nickname: this._nickname
    }
  }

  public saveTestId(id) {
    this._testId = id;
  }

  public getTestId() {
    return this._testId;
  }
}
