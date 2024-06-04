import { Message } from "@/model/User";

export interface apiResponse {
  success: boolean;
  message: string;
  isAcceptingMessges?: boolean;
  messages?: Array<Message>;
}
