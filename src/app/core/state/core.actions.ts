export namespace Core {
  export class SetAccessToken {
    static readonly type = '[Core] Set Access Token';
    constructor(public token: string) {}
  }
}
