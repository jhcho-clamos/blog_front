// chat types
export interface ChatDefaultProps {
  roomName: string;
}

export interface ChatProps_Get extends ChatDefaultProps {
  roomId: string;
  createDate: string;
}

export interface ChatProps_Post extends ChatDefaultProps {}

export interface ChatMessageProps {
  id: string;
  sender: string;
  roomId: string;
  message: string;
  type: "ENTER" | "TALK" | "EXIT";
  updateTime?: string;
}
