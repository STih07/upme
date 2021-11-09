import { Action, Selector, State, StateContext } from "@ngxs/store";
import { Core } from "./core.actions";

export interface CoreStateModel {
  accessToken?: string;
}

@State<CoreStateModel>({
  name: `core`,
  defaults: {
    accessToken: localStorage.getItem('accessToken')
  }
})
export class CoreState {

  @Selector()
  static accessToken(state: CoreStateModel) {
    return state.accessToken;
  }

  @Action(Core.SetAccessToken)
  setAccessToken(ctx: StateContext<CoreStateModel>, {token}: Core.SetAccessToken) {
    localStorage.setItem('accessToken', token);
    ctx.patchState({accessToken: token});
  }
}
