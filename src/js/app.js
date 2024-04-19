export default class Validate {
  constructor(nickname) {
    this.nickname = nickname;
  }
  validateUsername() {
    let re = /^[a-z][\w-]*[a-z]$/i;
	let re2 = /\d{4}/
    return re.test(this.nickname) && !re2.test(this.nickname);
  }
}

