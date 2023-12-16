// chat types
export interface ChatDefaultProps {
  roomName: string;
}

export interface ChatProps_Get extends ChatDefaultProps {
  roomId: number;
  makeUser: string;
  createDate: string;
  pwStatus: boolean;
}

export interface ChatProps_Post extends ChatDefaultProps {
  createDate: string;
  makeUser: string;
  password: string;
}

export interface ChatProps_Access_Post {
  roomId: number;
  password: string;
}

export interface ChatMessageProps {
  id: number;
  sender: string;
  roomId: string;
  message: string;
  type: "ENTER" | "TALK" | "EXIT";
  updateTime?: string;
}
