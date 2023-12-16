// chat types
export interface ChatDefaultProps {
  roomName: string;
}

export interface ChatProps_Get extends ChatDefaultProps {
  roomId: number;
  createDate: string;
}

export interface ChatProps_Post extends ChatDefaultProps {}

export interface ChatMessageProps {
  id: number;
  sender: string;
  roomId: string;
  message: string;
  type: "ENTER" | "TALK" | "EXIT";
  updateTime?: string;
}
