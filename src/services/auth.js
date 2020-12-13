import axios from 'axios';

class AuthService {
  login(user) {
    return axios
      .post('http://localhost:3000/api/auth/signin', {
        email: user.mail,
        senha: user.pass
      })
      .then(response => {
        if (response.data.token) {
          response.data.tokenLimit = Date.now() + (response.data.tokenExpires * 1000)
          localStorage.setItem('user', JSON.stringify(response.data));
        }

        return response;
      }).catch(() => {
        alert("Usuário não cadastrado ou dados incorretos. Por favor, tente novamente.");
    });
  }

  logout() {
    localStorage.removeItem('user');
  }

  register(user) {
    return axios.post('http://localhost:3000/api/auth/signup', {
         email: user.mail,
         senha: user.pass,
         cpf: user.cpf,
         nome: user.name,
         data_nascimento: user.birth,
         telefone: user.phone,
         endereco: user.address,
    }).then(response => {
      if (response.data.token) {
        response.data.tokenLimit = Date.now() + (response.data.tokenExpires * 1000)
        localStorage.setItem('user', JSON.stringify(response.data));
      }
      return response;
    });
  }

  estaLogado() {
    let user = JSON.parse(localStorage.getItem('user'));
    if (user && user.token) {
      if (user.tokenLimit < Date.now()) {
        localStorage.removeItem('user');
        return false
      }
      return true;
    } else {
      return false;
    }
  }

  isAdmin () {
    let user = JSON.parse(localStorage.getItem('user'));
    if (user && user.user.isAdmin) {
      return true;
    } else {
      return false;
    }
  }

  authHeader() {
    let user = JSON.parse(localStorage.getItem('user'));
    if (user && user.token) {
      return { 'x-access-token': user.token };
    } else {
      return {};
    }
  }

}



export default new AuthService();