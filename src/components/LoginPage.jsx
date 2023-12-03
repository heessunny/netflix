import React from 'react';

class LoginPage extends React.Component {
  constructor() {
    super();
    this.state = {
      idValue: '',
      pwValue: '',
      isActive: false,
      errorID: '',
      errorPW: '',
    };
  }

  handleIdInput = (e) => {
    this.setState({
      idValue: e.target.value,
    
    });
  };

  handlePWInput = (e) => {
  
    this.setState({
        pwValue : e.target.value,
     
    });
    
  };

  changeButton = () => {
    const { idValue, pwValue } = this.state;

    const isIdValid = idValue.includes('@');
    const isPwValid =
      pwValue.length >= 8 &&
      /[a-zA-Z]/.test(pwValue) &&
      /\d/.test(pwValue) &&
      /[!@#$%^&*(),.?":{}|<>]/.test(pwValue);

    if (!isIdValid) {
      this.setState({
        errorID: idValue.length > 0 ? '이메일 형식을 확인하세요.' : '',
      });
    } else {
      this.setState({
        errorID: '',
      });
    }

    if (!isPwValid) {
      this.setState({
        errorPW: pwValue.length > 0 ? '비밀번호 형식을 확인하세요.' : '',
      });
    } else {
      this.setState({
        errorPW: '',
      });
    }

    if (isIdValid && isPwValid) {
      this.setState({
        errorID: '',
        errorPW: '',
      });
    }
    if (isIdValid && isPwValid) {
        this.setState({ isActive: true });
      } else {
        this.setState({ isActive: false });
      }
  };

  render() {
    return (
      <div className="LoginPage">
      
          <div className="idpw"> 아이디와 비밀번호를<br/> 입력하세요 </div>
          <div className="outbox">
          <form className="id_pw">
            <table>
                <tr>
                    <td>
            아이디:<br/>
            <input
              className="idInput"
              type="text"
              placeholder="이메일"
              onChange={this.handleIdInput}
              onKeyUp={this.changeButton}
              name="idValue"
            />
            {this.state.errorID && (
              <div className="errorID-message">{this.state.errorID}</div>
            )}
          
            </td>
            </tr>
            <tr>
            <td>
            비밀번호:<br/>
            <input
              className="pwInput"
              type="password"
              placeholder="영문, 숫자, 문자 포함 8자 이상"
              onChange={this.handlePWInput}
              onKeyUp={this.changeButton}
              name="pwValue"
            />
            {this.state.errorPW && (
              <div className="errorPW-message">{this.state.errorPW}</div>
            )}
            </td>
            </tr>
            <tr>
            <td>
            <input
              type="submit"
              value="로그인"
              className={'btn' + (this.state.isActive ? 'Active' : 'Disabled')}
            />
             </td>
            </tr>
            </table>
          </form>
        </div>
      </div>
    );
  }
}

export default LoginPage;
