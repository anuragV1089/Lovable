import { useChatStore } from "@/utils/store";

export default function Chat() {
  const { messages, addMessage } = useChatStore((state) => ({
    messages: state.messages,
    addMessage: state.addMessage,
  }));
  const { isStreaming, setStreamingContent } = useChatStore((state) => ({
    isStreaming: state.isStreaming,
    setStreamingContent: state.setStreamingContent,
  }));
  const { streamingContent, setStreamingContent: setStreamingContentState } =
    useChatStore((state) => ({
      streamingContent: state.streamingContent,
      setStreamingContent: state.setStreamingContent,
    }));
}
