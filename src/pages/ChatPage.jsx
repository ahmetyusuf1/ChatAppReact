import {
  collection,
  addDoc,
  serverTimestamp,
  onSnapshot,
  query,
  orderBy,
  where,
} from "firebase/firestore";
import { auth, db } from "../firebase/config";
import { useEffect, useState } from "react";
import Message from "../components/Message";

const ChatPage = ({ room, setRoom }) => {
  const [messages, setMessages] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const messagesCollection = collection(db, "messages");

    await addDoc(messagesCollection, {
      author: {
        id: auth.currentUser?.uid,
        name: auth.currentUser?.displayName,
        photo: auth.currentUser?.photoURL,
      },
      createdAt: serverTimestamp(),
      room,
      text: e.target[0].value,
    });

    e.target.reset();
  };

  useEffect(() => {
    const messagesCollection = collection(db, "messages");

    const q = query(
      messagesCollection,
      where("room", "==", room),
      orderBy("createdAt", "asc")
    );

    onSnapshot(q, (snapShot) => {
      const tempMessage = [];

      snapShot.docs.forEach((doc) => {
        tempMessage.push(doc.data());
      });

      setMessages(tempMessage);
    });
  }, []);

  return (
    <div className="bg-white w-4/5 max-sm:w-full h-3/4 max-sm:h-full flex flex-col justify-between gap-12">
      <header className="bg-violet-700 text-white flex items-center justify-between p-4">
        <p className="text-base">{auth.currentUser?.displayName}</p>
        <p className="text-lg font-bold">{room}</p>
        <button
          onClick={() => setRoom(null)}
          className="bg-yellow-500 py-1 px-2 rounded hover:opacity-80"
        >
          Different Room
        </button>
      </header>
      <main className="flex-1 flex flex-col overflow-auto gap-2 p-2">
        {messages.map((message, index) => (
          <Message key={index} message={message} />
        ))}
      </main>
      <form
        onSubmit={handleSubmit}
        className="bg-violet-700 flex items-center justify-center gap-4 py-4"
      >
        <input type="text" className="w-1/2 p-1 max-sm:py-2 rounded" />
        <button className="bg-yellow-500 py-1 max-sm:py-2 px-4 rounded hover:opacity-60">
          Send
        </button>
      </form>
    </div>
  );
};

export default ChatPage;
