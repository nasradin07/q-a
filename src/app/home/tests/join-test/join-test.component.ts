import { Component, OnInit } from '@angular/core';
import { JoinTestService } from '../../../services/join-test.service';

@Component({
  selector: 'app-join-test',
  templateUrl: './join-test.component.html',
  styleUrls: ['./join-test.component.css']
})
export class JoinTestComponent implements OnInit {
  areCredentialsValid = false;
  nickname: string;
  password: string;
  error: {nicknameError: boolean, passwordError: boolean} = {
    nicknameError: true,
    passwordError: true
  };
  nicknameErrorMsg: string = 'Nickname error';
  passwordErrorMsg: string = 'Password error'
  errorMessage: string = "Bad inputs";
  constructor(
    private _joinTestService: JoinTestService
  ) { }

  ngOnInit() {
    
  }

  public joinTest() {
  
  }

  public gotToTest() {

  }

  public saveCredentials() {
    this._joinTestService.saveCredentials({
      nickname: this.nickname,
      password: this.password
    });
  }

  public validateCredentials() {
    return this.validateNickname() && this.validatePassword();
  }

  //TODO
  public validatePassword() {
    console.log(`Validating password: ${this.password}`);
    return true;
  }

  //TODO
  public validateNickname() {
    console.log(`Validating nickname: ${this.nickname}`);
    return true;
  }

}
