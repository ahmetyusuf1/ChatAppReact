import { useState } from "react";
import AuthPage from "./pages/AuthPage";
import RoomPage from "./pages/RoomPage";
import ChatPage from "./pages/ChatPage";
import PageContainer from "./containers/PageContainer";

const App = () => {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("TOKEN"));
  const [room, setRoom] = useState(null);

  if (!isAuth) {
    return (
      <PageContainer>
        <AuthPage setIsAuth={setIsAuth} />
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      {room ? (
        <ChatPage room={room} setRoom={setRoom} />
      ) : (
        <RoomPage setIsAuth={setIsAuth} setRoom={setRoom} />
      )}
    </PageContainer>
  );
};

export default App;
