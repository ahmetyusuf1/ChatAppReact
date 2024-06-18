import { auth } from "../firebase/config";

const Message = ({ message }) => {
  if (auth.currentUser?.uid === message.author.id) {
    return (
      <p className="bg-rose-400 text-white self-end py-1 px-2 rounded-t rounded-bl">
        {message.text}
      </p>
    );
  }

  return (
    <div className="flex items-center gap-1 text-black">
      <p className="flex items-center gap-1">
        <img className="w-10 rounded-full" src={message.author.photo} />
        <span className="font-bold">{message.author.name}</span>
      </p>
      <span>{message.text}</span>
    </div>
  );
};

export default Message;
