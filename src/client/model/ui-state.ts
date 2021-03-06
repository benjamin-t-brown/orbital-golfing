interface UIState {
  lobbies: LobbyState[];
  name: string;
  activePane: string;
  lobbyId: string;
  entityActive: boolean;
  roundCompleted: boolean;
}

const uiState: UIState = {
  lobbies: [],
  name: 'Player',
  activePane: 'loading',
  lobbyId: '',
  entityActive: false,
  roundCompleted: false,
};
const getUiState = () => uiState;
const setUiState = (nextState: Partial<UIState>) => {
  Object.assign(uiState, nextState);
};

const setLobbyListState = (lobbies: LobbyState[]) => {
  setUiState({
    lobbies,
  });
  if (['menu', 'lobby'].includes(uiState.activePane)) {
    renderUi();
  }
};
